from __future__ import print_function
import requests

f1=open('./text', 'r')

url = "https://etheris.everisdigitalchannels.com/api/v1/transactions/0x88a8c1627fa7f6c03f8971530bd4e9336a906210ef0956ba322f36d173e4bf95"

headers = {'authorization': "Bearer e28eff8e3470b7ad06bed2bdbe31816f9a263be51f008488"}

response = requests.request("GET", url, headers=headers)
x=response['value']
y=response['value']

print(response.text)
if(response):
    f1.append(x)
    f1.append(y)
    f1.close()