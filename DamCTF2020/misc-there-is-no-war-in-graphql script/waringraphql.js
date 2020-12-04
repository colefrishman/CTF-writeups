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

let batchQuery = (day, month, year, era) => {
	return `query EclipsesByDate {
		planetariumBatch(lookup: {
		  search: {
			date: {
				year: 100,
				era: "AG"
			}
			eclipse: null
		  },
		  options: null
		}, debug: true) {
		  log
		  __typename
		  data{
			date{
			  day
			  month
			  year
			  era
			}
			eclipse
		  }
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

/*
query EclipsesByDate {
  planetariumBatch(lookup: {
    search: {
      date: {
        year: null
      }
      eclipse: null
    },
    options: null
  }, debug: true) {
    log
    __typename
    data{
      date{
        day
        month
        year
        era
      }
      eclipse
    }
  } 
}

query EclipsesOne {
  planetariumOne(
    date: {
        day: 29,
        month: 2,
        year: 100,
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
}

query EclipseToday{
    planetariumToday{
    date{
      day
      month
      year
      era
    }
    eclipse
      __typename
  }
}

query Inv{
  invade(date: {
    day: 11
    month: 7
    year: 104
    era: "AG"
  })
}

query scheme{
  __schema{
    types{
      name
    }
    description
  }
  
  __type(name: "JSON"){
    kind
    name
    fields{
      name
    }
  }
  
}
*/