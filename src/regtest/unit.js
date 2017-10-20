
var bitcore = require('bitcore-lib');
var btNode = require('./btNode');
var data = require('./data');


var Unit = bitcore.Unit;



var txAmountSatoshis = 20920;

var totalAmountBtc = Unit.fromSatoshis(txAmountSatoshis).toBTC();

console.log('totalAmountBtc:', totalAmountBtc);
