import requests

i=1
cats = "wrong"
href = 'jdaqfazy4wafobkn2hi3nt'
res = requests.get('https://finger-warmup.chals.damctf.xyz/' + href).text
while res.find('click here, if you are patient enough I will give you the flag') > -1:
    href = res[9:res.find('">c')]
    res = requests.get('https://finger-warmup.chals.damctf.xyz/' + href).text
    i += 1
    if i > 1500:
        print('https://finger-warmup.chals.damctf.xyz/' + href)
        i = 1
        f = input("continue?")
print('https://finger-warmup.chals.damctf.xyz/' + href)
