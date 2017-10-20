


var bitcore = require('bitcore-lib');
var btNode = require('./btNode');
var data = require('./data');


var Unit = bitcore.Unit;


var data = [];

for (var i = 0; i< 20; i++){
    btNode.getNewAddressAndPrivKey(function(res){
        data.push(res);
        if(i == 19){
            console.log('data:', data);
        }
    });
}
