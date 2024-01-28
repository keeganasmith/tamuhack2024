from flask import Flask, jsonify
from flask import request
from google_client.google_class import Google_Class
import traceback
from flask_cors import CORS

# Create an instance of Flask
app = Flask(__name__)
CORS(app)
# Define routes
@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/api/get_emails', methods=["POST", "OPTIONS"])
def get_emails():
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'success'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        return response, 200

    try:
        info = request.json
        auth_token = info.get("token", "")
        google_client = Google_Class(token=auth_token)
        result = google_client.get_email_htmls()
        return result, 200
    except Exception as e:
        traceback.print_exc()
        print(e)
        return "bad", 500
if __name__ == '__main__':
    app.run(debug=True)
