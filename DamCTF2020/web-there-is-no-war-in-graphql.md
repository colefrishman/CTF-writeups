## DamCTF - 10/09/2020 - 10/11/2020

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

   ```javascript
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