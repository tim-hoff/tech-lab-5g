module.exports = function (number) {
	var newEl = document.createElement("script");
	var content = document.body.appendChild(newEl);
	var hue = require("node-hue-api"),HueApi = hue.HueApi, lightState = hue.lightState;
	var hostname = "192.168.1.109", username = "TimH1993zxcv", userDescription = "The real M.V.P.";;
	var api = new HueApi(hostname, username);
	var light_1 = 1, light_2 = 2, light_3 = 3;
	var lamp = 4, ls1 = 1, ls2 = 2;
	var state = lightState.create().on().bri(255).rgb([255,0,0]).alert("lselect");

	var displayUserResult = function(result) {
	  console.log("Created user: " + JSON.stringify(result));
	};

	var displayError = function(err) {
	  console.log(err);
	};

	// hue.registerUser(hostname, username, userDescription).then(displayUserResult).fail(displayError).done();
	
	function displayAlarm(value) {
		var html = [
		'<div class="wrapper" style="width: 90%;margin: 20px auto;">',
			'<div class="card">',
				'<h1>Blink Light '+value+'</h1>',
				'<h1 class="button danger" id="blink" style="left: 50%; margin-right: -50%; transform: translate(-50%, -50%);" href="#">Blink Light</h1>',
					'<h1 style="text-align:center;margin-top: 0px;"><i class="fa fa-lightbulb-o"></i></h1>',
			'</div>',
		'</div>',
		].join('\n');

		document.getElementById("app").insertAdjacentHTML('beforeend', html);
	};

	function logResult(value) {		
		var hue = require("node-hue-api"),
     HueApi = hue.HueApi,
     lightState = hue.lightState;
		console.log("logResult - " + JSON.stringify(value, null, 2));
	};

	function displayResult(value) {
		var string = JSON.stringify(value, null, 2)
		var html = [
		'<div class="wrapper" style="width: 90%;margin: 20px auto;">',
			'<div class="card">',
				'<h1>Display Result</h1>',
				'<p>',
					string,
				'</p>',
			'</div>',
		'</div>'
		].join('\n');

		console.log("displayResult - " + string);

		document.getElementById("app").insertAdjacentHTML('beforeend', html);
	};

	function blinkLights(value) {
		var state_low = lightState.create().bri(1).rgb([100,0,255]);
		var state_med = lightState.create().bri(100).rgb([100,0,255]);
		var state_high = lightState.create().bri(254).rgb([100,0,255]);
		var state_alert = lightState.create().bri(180).rgb([255,0,0]).alert("select");

		api.setLightState(value, state_alert).then(logResult).done();
	}
	function offLights(value) {
		var state_off = lightState.create().off();
		api.setLightState(value, state_off).then(logResult).done();
	}
	
	function onLights(value) {
		var state_on = lightState.create().on();
		api.setLightState(value, state_on).then(logResult).done();
	}

	// xy > ct > hue
	displayAlarm(number);
	[light_1, light_2, light_3].forEach(onLights);

	// api.lights().then(displayResult).done();
	// api.lightStatus(1).then(displayResult).done();
	// api.lightStatus(2).then(displayResult).done();
	// api.lightStatus(3).then(displayResult).done();
	// api.getConfig().then(displayResult).done();
	// api.getFullState().then(displayResult).done();
	return content;
};
