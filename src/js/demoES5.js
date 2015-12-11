// es5 module export example
module.exports = function (number) {
	
	var html = [
		'<div class="wrapper" style="width: 90%;margin: 20px auto;">',
			'<div class="card">',
			'<h1>Nice to meet Hue</h1>',
				// '<p>Hello, this is an <strong>ES'+ version + ' module</strong></p>',
				'<p>Hue '+ number + '  is currently <strong id="hue-status">OFFLINE</strong></p>',
				'<p id="hue-info"></p>',
				'<p id="hue-info2"></p>',
			'</div>',
		'</div>'
	].join('\n');

	var newEl = document.createElement("div");
	newEl.innerHTML = html;
	var es5Content = document.body.appendChild(newEl);

	return es5Content;
};
