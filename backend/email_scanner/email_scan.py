import requests
from openai import OpenAI

from dotenv import load_dotenv
import os

load_dotenv()


def url_scan(website_url): #responds with a json containing information about given url
    url = f"https://www.ipqualityscore.com/api/json/url/{os.getenv('IPQUALITYSCORE_KEY')}/{website_url}"

    response = requests.get(url)

    if response.status_code == 200:
        response = response.json()
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
        return response.status_code

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

    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are an assistant who is tasked with determining whether an email is a phishing attempt or legitimate. Please respond to prompts with Phishing attempt or Legitimate email."},
        {"role": "user", "content": content}
    ]
    )

    print(completion.choices[0].message)
    return completion.choices[0].message

email_address_scan("notifications@instructure.com")