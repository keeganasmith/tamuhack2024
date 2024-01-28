from flask import Flask
from flask import request
from google_client.google_class import Google_Class
import traceback
# Create an instance of Flask
app = Flask(__name__)

# Define routes
@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/api/get_emails', methods = ["POST"])
def get_emails():
    try:
        info = request.json
        auth_token = info.get("auth_token", "")
        google_client = Google_Class(auth_token = auth_token)
        result = google_client.get_email_htmls()
        return result, 200
    except Exception as e:
        traceback.print_exc()
        print(e)
        return "bad", 500
if __name__ == '__main__':
    app.run(debug=True)
