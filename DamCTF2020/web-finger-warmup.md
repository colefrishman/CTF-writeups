## DamCTF - 10/09/2020 - 10/11/2020

### web/finger-warmup

This was an individual effort

The website at damctf.xyz is no longer up, so I could not link to the challenge.

#### Description:

​	A finger warmup to prepare for the rest of the CTF, good luck!

​	You may find [this](https://realpython.com/python-requests/) or [this](https://programminghistorian.org/en/lessons/intro-to-beautiful-soup) to be helpful.

#### Solution:

1. Clicking the link on the page at https://finger-warmup.chals.damctf.xyz/ (no longer up), there's a link to a similar looking page with a different url.

2. Doing this continuously kept bringing up similar pages, and the pages had the instruction to keep clicking the link on the page

3. I initially wrote a script to automate this process in AutoHotKey, which would continuosly click on the same part of the page. The script is as follows:

   ```autohotkey
   #NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
   ; #Warn  ; Enable warnings to assist with detecting common errors.
   SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
   SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
   #MaxThreadsPerHotkey 3
   
   ^z::
   Toggle := !Toggle
   Loop
   {
   	If (!Toggle)
   		Break
   	Click
   	Sleep 83 ; Make this number higher for slower clicks, lower for faster.
   }
   ```

4. After a while, I decided to switch to python, so I could free up my mouse pointer and run the scipt in the background. The python script follows the link on each page until it finds a page with different contents. The script is as follows:

   ```python3
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
   ```

5. Eventually, this took us to a page at https://finger-warmup.chals.damctf.xyz/giz93go1o1bpg4avsls5gh which I have archived at https://archive.vn/DdGeO where the flag was revealed.

dam{I_hope_you_did_this_manually}