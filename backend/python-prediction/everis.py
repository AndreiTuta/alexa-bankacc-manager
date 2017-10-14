import requests

url = "http://etheris.everisgitalchannels.com/api/v1/transactions/0x88a8c1627fa7f6c03f8971530bd4e9336a906210ef0956ba322f36d173e4bf95"

headers = {'authorization': "Bearer dRTgokWFk4cquPL85gT5PxlF"}

response = requests.request("GET", url, headers=headers)

print(response.text)