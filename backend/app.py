from flask import Flask

# Create an instance of Flask
app = Flask(__name__)

# Define routes
@app.route('/')
def index():
    return 'Hello, World!'

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
