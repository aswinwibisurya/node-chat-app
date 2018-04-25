var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = "Aswin";
		var text = "Some chat";

		var res = generateMessage(from, text);

		expect(res.from).toBe(from);
		expect(res.text).toBe(text);
		expect(typeof res.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = "Aswin";
		var latitude = -6.20046;
		var longitude = 106.7860249;
		var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

		var res = generateLocationMessage(from, latitude, longitude);


		expect(res.from).toBe(from);
		expect(res.url).toBe(url);
		expect(typeof res.createdAt).toBe('number');
	});
})