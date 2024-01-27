from api_key import ipqualityscore_key
import requests

def url_scan(website_url):
    url = f"https://www.ipqualityscore.com/api/json/url/{ipqualityscore_key}/{website_url}"

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

def email_address_scan(email_address):
    url = f"https://www.ipqualityscore.com/api/json/email/{ipqualityscore_key}/{email_address}"

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

print(email_address_scan("willheeney03@gmail.com"))