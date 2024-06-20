import requests
import json

response = requests.get("http://localhost:3000/books")
print(response.json())


