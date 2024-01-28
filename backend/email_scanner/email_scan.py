import requests
import re
from openai import OpenAI

from dotenv import load_dotenv
import os
import urllib
load_dotenv()


def url_scan(content): #responds with a json containing information about given url

    url_list = re.findall("(?P<url>https?://[^\s'\"]+)", content)

    if len(url_list) < 1:
        return {
                "domain": "No links in Email",
                "risk_score": ""
                }
    url_hold = url_list[0]
    api_key = os.getenv('IPQUALITYSCORE_KEY')
    base_url = "https://www.ipqualityscore.com/api/json/url"
    url_list[0] = urllib.parse.quote_plus(url_list[0])
    url = f"{base_url}/{api_key}/{url_list[0]}"

    response = requests.get(url)


    if response.status_code == 200:
        response = response.json()
        print(response)
        link_info = {
            "domain": response["domain"],
            "unsafe": response["unsafe"],
            "spamming": response["spamming"],
            "malware": response["malware"],
            "phishing": response["phishing"],
            "suspicious": response["suspicious"],
            "adult": response["adult"],
            "risk_score": response["risk_score"]
        }
        return link_info
    else:
        link_info = {
            "domain": url_hold,
            "risk_score": "Link was unable to be read"
        }
        return link_info

def email_address_scan(email_address): # responds with a json containing information about given email address
    url = f"https://www.ipqualityscore.com/api/json/email/{os.getenv('IPQUALITYSCORE_KEY')}/{email_address}"

    response = requests.get(url)

    if response.status_code == 200:
        response = response.json()
        print(response)
        email_address_info = {
            "sanitized_email": response["sanitized_email"],
            "valid": response["valid"],
            "disposable": response["disposable"],
            "suspect": response["suspect"],
            "recent_abuse": response["recent_abuse"],
            "fraud_score": response["fraud_score"],
            "leaked": response["leaked"],
        }
        return email_address_info
    else:
        return response.status_code


def email_content_scan(content): # returns either Phishing attempt or Legitimate email after scanning email
    client = OpenAI()
    print(content)
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are an assistant who is tasked with determining whether an email is a phishing attempt or legitimate. Please respond to prompts with Phishing attempt or Legitimate email."},
        {"role": "user", "content": content}
    ]
    )

    return completion.choices[0].message.content

