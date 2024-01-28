from googleapiclient.discovery import build
from concurrent.futures import ThreadPoolExecutor
from time import sleep
from google.oauth2.credentials import Credentials
import requests
import base64
import re
import email
LIMIT = 20
REDIRECT_URI = "https://localhost:3000"
def exchange_auth_code_for_access_token(auth_code, client_id, client_secret, redirect_uri):
    token_endpoint = "https://oauth2.googleapis.com/token"
    payload = {
        "client_id": client_id,
        "client_secret": client_secret,
        "code": auth_code,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code"
    }
    response = requests.post(token_endpoint, data=payload)
    if response.status_code == 200:
        return response.json()["access_token"]
    else:
        print("Error exchanging authorization code for access token:")
        print(response.text)
        return None
class Google_Class:
    def __init__(self, auth_token = None, token = None):
        if(auth_token):
            self.token = exchange_auth_code_for_access_token(auth_code=auth_token)
        else:
            self.token = token;
        self.user_id = None;
        self.service = None;
        self.credentials = None;
        self.set_user_email()
        self.set_credentials()
        self.set_service()
    def set_credentials(self):
        self.credentials = Credentials(self.token)
    def get_html_content(self, msg):
        html_content = ""
        for part in msg.walk():
            if part.get_content_type() == "text/html":
                html_content = part.get_payload(decode=True).decode(part.get_content_charset(), errors='ignore')
                return html_content
        return ""
    def set_service(self):
        self.service = build('gmail', 'v1', credentials=self.credentials)
    def set_user_email(self):
        url = 'https://www.googleapis.com/oauth2/v1/userinfo'
        headers = {'Authorization': f'Bearer {self.token}'}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            user_info = response.json()
            self.user_id = user_info.get('email')
            return True
        return False
    def get_text_from_id(self, message_id):
        url = f"https://www.googleapis.com/gmail/v1/users/{self.user_id}/messages/{message_id}?format=raw"
        headers = {
            "Authorization": f"Bearer {self.token}",
            "Accept": "application/json"
        }

        try:
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                message = response.json()
                raw_message = base64.urlsafe_b64decode(message['raw'].encode('ASCII'))
                # Decode the bytes to string using utf-8 encoding
                decoded_message = raw_message.decode('utf-8', errors="ignore")
                msg = email.message_from_string(decoded_message)
                sent_from = msg["from"]
                print("got here1")
                html_content = self.get_html_content(msg)
                print("got here2")
                return html_content
            else:
                print(f"Error: {response.status_code} - {response.text}")
                return None
        except Exception as e:
            print(f"An error occurred: {e}")
            return None
        
    def get_emails(self):
        
        response = self.service.users().messages().list(userId=self.user_id).execute()
        messages = []
        if 'messages' in response:
            messages.extend(response['messages'])
        i = 0;
        while('nextPageToken' in response and i < 0):
            page_token = response['nextPageToken']
            response = self.service.users().messages().list(userId=self.user_id, pageToken=page_token).execute()
            messages.extend(response['messages'])
            i +=1 
        return messages
    def clean_email_text(self, text):
        lines = text.split("\n")
        i =0
        result = ""; 
        while(i < len(lines)):
            if(lines[i][-1] == '='):
                result += lines[i][0:-1]
            else:
                result += lines[i]
            i +=1 
        return result;
    def get_email_texts(self):
        messages = self.get_emails()
        list_of_emails = []
        with ThreadPoolExecutor() as executor:
            futures = []
            i =0
            while(i < len(messages) and i < LIMIT):                
                message = messages[i]
                futures.append(executor.submit(self.get_text_from_id, message["id"]))
                i +=1
            i = 0 
            while(i < len(messages) and i < LIMIT):
                future= futures[i] 
                list_of_emails.append(future.result())
                i +=1 
                
        return list_of_emails
    def get_email_htmls(self):
        texts = self.get_email_texts()
        
        return texts