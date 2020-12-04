## DamCTF - 10/09/2020 - 10/11/2020

### misc/rules

This was an individual effort

The website at damctf.xyz is no longer up, so I could not link to the challenge.

#### Description:

​	Welcome to DamCTF! Make sure to read the rules

#### Solution:

1. A rules document was linked here: https://docs.google.com/document/d/199VdTFQ9BAn8ewlsoV7_LEeFbh1LqHCixX9v7_fXlSw/
2. In the rules document, point 3 gives an example flag.
3. Turns out, that was the actual flag.

dam{rul3s_ar3_t00_c00l_f0r_sk00l}



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



### misc/pretty-good (OSINT)

This was an asynchronous group effort, but I'm not sure if the other people were in CIS4024

The website at damctf.xyz is no longer up, so I could not link to the challenge.

#### Description:

​	Nothing like getting a project assignment on a Friday afternoon.

​	Flag is the IP address (ex: dam{169.254.42.42})

#### Solution:

1. A rules document was linked here: https://docs.google.com/document/d/199VdTFQ9BAn8ewlsoV7_LEeFbh1LqHCixX9v7_fXlSw/
2. Following the attached pdf (no longer can be found), there was an attached picture. A reverse image search led to a blog, whose archive we found here: https://web.archive.org/web/20201005005536/https://rayhaanhodgson.com/. 
3. It was mentioned on the blog that the author had a GitHub profile.
4. Opening up GitHub pages related to the author's name and email revealed a GitHub commit with deleted sensitive info. (The relevant GitHub page is no longer up)
5. Viewing the diff showed an IP address, which was the flag. 

dam{182.24.89.5}



### web/there-is-no-war-in-graphql

This was an individual effort

The website at damctf.xyz is no longer up, so I could not link to the challenge.

#### Description:

​	I did not record the exact challenge description, but here is a summary:

​	Given a GraphQL explorer (at graphql.chals.damctf.xyz/graphql, no longer up),  find when the next Eclipse is.

#### Solution:

1. Snooping around the schema and using recommended fields gave an idea of how the API worked.

2. In the rules document, point 3 gives an example flag.

3. Creating a query for planetariumToday gave an idea of what the date format looks like.

   { day: d, month: m, year: y (99 was "today"), era: 'AG' }

4. As much as I tried I couldn't get planetariumBatch to output the future eclipse dates

5. Instead, I wrote a script in node.js that queries planetariumOne for each upcoming date, one-by-one, until I found one with an eclipse. The script is as follows:

   ```
   const fetch = require("node-fetch");
   
   var going=false;
   
   let oneQuery = (day, month, year, era) => {
   	return `query EclipsesOne {
   	planetariumOne(
   	  date: {
   		  day: ${day},
   		  month: ${month},
   		  year: ${year},
   		  era: "AG"
   	  }
   	){
   	  date{
   		day
   		month
   		year
   		era
   	  }
   	  eclipse
   	  __typename
   	}
     }`;  
   }
   
   const checkEclipse = (planetariumOne) => {
   	if(planetariumOne.eclipse === true){
   		console.log(planetariumOne.date)
   		going=true
   		return planetariumOne
   	}
   	if(planetariumOne.eclipse === false){
   		return false
   	}
   	console.log("rip")
   	return "error"
   }
   
   
   const sendQuery = (query) => {
   	fetch('https://graphql.chals.damctf.xyz/graphql?', {
   		method: 'POST',
   		headers: {
   		  'Content-Type': 'application/json',
   		  'Accept': 'application/json'
   		},
   		body: JSON.stringify({
   		  query
   		})
   	})
   	.then(r => r.json())
   	.then(result => checkEclipse(result.data.planetariumOne))
   }
   
   sendQuery(oneQuery(1,1,100,"AG"))
   
   y=99
   while (y<103 && !going){
   	for(i=1; i<=12; ++i){
   		for(j=1; j<=28; ++j){
   			sendQuery(oneQuery(j,i,y,"AG"))
   		}
   		if([1,3,4,5,6,7,8,9,10,11,12].includes(i)){
   			sendQuery(oneQuery(29,i,y,"AG"))
   			sendQuery(oneQuery(30,i,y,"AG"))
   			if([1,3,5,7,8,10,12].includes(i)){
   				sendQuery(oneQuery(31,i,y,"AG"))
   			}
   		}
   		else if((y%4 == 0) && (y%100 != 0)){
   			sendQuery(oneQuery(29,i,y,"AG"))
   		}
   	}
   	console.log(y)
   	++y
   }
   ```

6. Turns out the next eclipse is on { day: 11, month: 7, year: 104, era: 'AG' }

7. Running planetariumOne with this date revealed the flag.

dam{InvAd3_w1T0ut_4_w4R}



### misc/rules

This was an individual effort

The website at damctf.xyz is no longer up, so I could not link to the challenge.

#### Description:

​	The website is longer up and I did not archive the description.

#### Solution:

1. A survey was linked in the challenge description.
2. Filling it out revealed a flag at the end

dam{surv3ys_r_c00l_4nd_s0_r_u}