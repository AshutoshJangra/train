var TrainController = (function() {
	let data = [
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		},
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		},
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		},
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		},
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		},
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		},
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		},
		{
			number: "12491",
			name: "MOURDHWAJ EXPRESS",
			travel_time: "21:45",
			src_departure_time: "14:05",
			dest_arrival_time: "11:50",
			from_station: {
				code: "GKP",
				name: "GORAKHPUR"
			},
			to_station: {
				code: "JAT",
				name: "JAMMU TAWI"
			},
			classes: [
				{
					code: "2S",
					available: "N",
					name: "SECOND SEATING"
				},
				{
					code: "CC",
					available: "N",
					name: "AC CHAIR CAR"
				},
				{
					code: "FC",
					available: "N",
					name: "FIRST CLASS"
				},
				{
					code: "SL",
					available: "Y",
					name: "SLEEPER CLASS"
				},
				{
					code: "2A",
					available: "Y",
					name: "SECOND AC"
				},
				{
					code: "1A",
					available: "Y",
					name: "FIRST AC"
				},
				{
					code: "3E",
					available: "N",
					name: "3rd AC ECONOMY"
				},
				{
					code: "3A",
					available: "Y",
					name: "THIRD AC"
				}
			],
			days: [
				{
					code: "MON",
					runs: "N"
				},
				{
					code: "TUE",
					runs: "N"
				},
				{
					code: "WED",
					runs: "N"
				},
				{
					code: "THU",
					runs: "N"
				},
				{
					code: "FRI",
					runs: "N"
				},
				{
					code: "SAT",
					runs: "N"
				},
				{
					code: "SUN",
					runs: "Y"
				}
			]
		}
	];


    const getCode=(source)=>{
    	const proxy = 'https://cors-anywhere.herokuapp.com/';
    	
      fetch(`${proxy}https://api.railwayapi.com/v2/name-to-code/station/${source}/apikey/foho9twvto/`)
      	.then(resp => resp.json())
      	.then(res => console.log(res));
    }

    const getInitialData = (stnName) => {
    	const proxy = 'https://cors-anywhere.herokuapp.com/';
    	fetch(`${proxy}https://api.railwayapi.com/v2/arrivals/station/${stnName}/hours/3/apikey/foho9twvto/`)
    		.then(resp => resp.json())
    		.then(res => data = res.trains);
    }

	return {
		getTrain: async ({source , dest}) => {
           //temperory variable bcoz getcode api is broken
           source = 'pnp';
           dest = 'ndls';
           	// convert station name to station code
	      		//getCode(source);
			    // getCode(dest);

			// get trains using station code
			const proxy = 'https://cors-anywhere.herokuapp.com/';

			const result = await fetch(`${proxy}https://api.railwayapi.com/v2/between/source/${source}/dest/${dest}/date/06-07-2019/apikey/foho9twvto/`);
			const resp = await result.json();
			data = resp.trains ;
		},

		getInitialTrains : async (stnName) => {
			//temperory variable bcoz getcode api is broken
           stnName = 'ndls';

            //const result = await getInitialData(stnName);
           const result = await fetch(`https://api.railwayapi.com/v2/arrivals/station/${stnName}/hours/3/apikey/foho9twvto/`);
			const resp = await result.json();
			data = resp.trains ;

		},

		getData: () => {
			return data;
		}
	};
})();

var UIController = (function() {
	return {
		getInput: () => {
			return {
				source: document.querySelector(".source-station").value,
				dest: document.querySelector(".destination-station").value
			};
		},

		displayTrains: (train , temp) => {
			let template1 = '<div class="display-train-box"><div class="name__dep-time"><h2 class="train-name">%Train-Name%</h2><h2 class="depTime"><span class="keyword">Departure</span>%6:45%</h2></div><div class="number__arr-time"><h3 class="train-number">%12345%</h3><h2 class="arrTime"><span class="keyword">Arrival</span>%7:55%</h2></div><div class="src__dest-name"><h1 class="srcName"><span class="keyword">From</span>%src-Station%</h1><h1 class="destName"><span class="keyword">To</span>%dest-name%</h1></div></div>'
            let template2 = '<div class="display-train-box"><div class="name__dep-time"><h2 class="train-name">%Train-Name%</h2><h2 class="depTime"><span class="keyword">Departure</span>%6:45%</h2></div><div class="number__arr-time"><h3 class="train-number">%12345%</h3><h2 class="arrTime"><span class="keyword">Arrival</span>%7:55%</h2></div><div class="delay-time"><h1 class="delay"><span class="keyword">Delay</span>%delay%</h1></div></div>'
            let template;

            if(temp === 'template1'){
            	template = template1;
            }else if(temp === 'template2'){
            	template = template2;
            }

            let newTemplate=template.replace('%Train-Name%' , train.name);
            newTemplate=newTemplate.replace('%12345%' , train.number);
            newTemplate=newTemplate.replace('%src-Station%' , train.from_station.name);
			newTemplate=newTemplate.replace('%dest-name%' , train.to_station.name);
			newTemplate=newTemplate.replace('%6:45%' , train.src_departure_time);
			newTemplate=newTemplate.replace('%7:55%' , train.dest_arrival_time);
			newTemplate=newTemplate.replace('%delay%' , train.delayarr);


			document.querySelector('.display-trains').insertAdjacentHTML('beforeend', newTemplate);
		}
	};
})();

// Global App Controller
var GlobalController = (function(trainCtrl, uiCtrl) {

	let ctrlSearchEvent =  () => {
		// get input
		let inputs = uiCtrl.getInput();
		console.log(inputs);

		// convert the station name to station code

		// send a api request to railway api to get the trains and display by looping to array
				 // trainCtrl.getTrain(inputs)
				 // .then(()=> trainCtrl.getData())
				 // .then(data => data.forEach(curr => uiCtrl.displayTrains(curr , 'template1')));
		          
		console.log("search dh");
		trainCtrl.getData().forEach(curr => uiCtrl.displayTrains(curr , 'template1'));
		
	};

	const initialTrainHandler = () => {
        
        // Get initial train
        trainCtrl.getInitialTrains('pnp')
		 .then(()=> trainCtrl.getData())
		 .then(data => data.forEach(curr => uiCtrl.displayTrains(curr , 'template2')));
        // display on ui
        console.log("initial");
	}

	return {
		initializer: () => {
			console.log("Application has started");

			// Attaching event listeners
			document.querySelector(".search-btn").addEventListener("click", ctrlSearchEvent);
			document.addEventListener("keypress", e => {
				if (e.keyCode === 13 || e.which === 13) {
					ctrlSearchEvent();
				}
			});

			//run initial train handler for trains in 3 hours of interval at a station
			//initialTrainHandler();
		}
	}

	
})(TrainController, UIController);



// Initializing function
GlobalController.initializer(); 


