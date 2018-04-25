var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb', 'March'];
// console.log(date.getMonth());

// var createdAt = 1234;
// var date = moment(createdAt);
// date.add(1, 'year').subtract(9, 'month');

// console.log(date.format('MMM Do, YYYY'));
// console.log(date.format('h:mm a'));

var timestamp = moment().valueOf();
console.log(timestamp);