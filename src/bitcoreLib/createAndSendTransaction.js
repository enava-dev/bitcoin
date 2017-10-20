


var bitcore = require('bitcore-lib');
/*var Insight = require('bitcore-explorers').Insight;
var insight = new Insight('testnet');*/

var RpcClient = require('bitcoind-rpc');



var config1 = {
    protocol: 'http',
    user: 'user',
    pass: 'pass',
    host: '127.0.0.1',
    port: '18332',
  };


  var config2 = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '10.28.149.235',
    port: '8332'
};


var rpc = new RpcClient(config2);





/*//another way to obtain a private key
// WIF: wallet input format
var priKey = bitcore.PrivateKey('testnet').toWIF();
console.log('priKey:', priKey);

var address2 = new bitcore.PrivateKey(priKey).toAddress('testnet');
console.log('address2', address2);*/




var priKeyWIF1 = 'cUaMQ7c8zhFRnsZAiMowKwogSxC4wx9hDCeJUocDKUnayJTMddyd';
console.log('priKeyWIF1:', priKeyWIF1);

//generates an PrivateKey object
var priKey1 = bitcore.PrivateKey.fromWIF(priKeyWIF1);
console.log('priKey1:', priKey1);

var address1 = priKey1.toAddress();
console.log('address1:', address1);
console.log('address1 hard:', 'mfatZDEJtscAKMzbjig6xDmi1tWdFvoHYH');








var priKeyWIF2 = 'cNNcRsKKSw4PEhEgHEVJQTZoNmC8hWcEABkrqvTAFHQwhq7Sw8ac';
console.log('priKeyWIF2:', priKeyWIF2);

//generates an PrivateKey object
var priKey2 = bitcore.PrivateKey.fromWIF(priKeyWIF2);
console.log('priKey2:', priKey2);

var address2 = priKey2.toAddress();
console.log('address2:', address2);
console.log('address2 hard:', 'mhkuZR1aKbEE6jwfUMp6tGK9fJXizwyKpp');







/*insight.getUnspentUtxos(address1, function( err, utxos){
  if (err) {
    // Handle errors..
  } else {
    // use the UTXOs to create a transaction
    console.log('address1 utxos:', utxos);
  }
});



insight.getUnspentUtxos(address2, function( err, utxos){
  if (err) {
    // Handle errors..
  } else {
    // use the UTXOs to create a transaction
    console.log('address2 utxos:', utxos);
  }
});*/





rpc.listUnspent(1, 99999999, [address1.toString()], function (err, res) {
       //TODO: check for errors
       console.log('address1');
       console.log('err:', err);
       console.log('res:', res);
});



rpc.listUnspent(1, 99999999, [address2.toString()], function (err, res) {
       //TODO: check for errors
       console.log('address2');
       console.log('err:', err);
       console.log('res:', res);
});
