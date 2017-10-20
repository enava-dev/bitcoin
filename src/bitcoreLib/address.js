
var bitcore = require('bitcore-lib');
var RpcClient = require('bitcoind-rpc');

var local = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '127.0.0.1',
    port: '8332'
};

var server = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '10.28.149.235',
    port: '8332'
};

var rpc = new RpcClient(server);



function getNewAddress(cb){
  rpc.getNewAddress(function( err, res ){
    cb(res.result);
  });
}


function getPrivKey(address, cb){
  rpc.dumpPrivKey(address, function( err, res){
    cb(res.result);
  });
}


getNewAddress(function(addressStr){
  var address = bitcore.Address.fromString(addressStr);
  console.log('address:', address);
  getPrivKey(address.toString(), function(privKeyStr){
    var privKey = bitcore.PrivateKey.fromWIF(privKeyStr);
    console.log('privKey:', privKey);
    console.log('privKey.toWIF():', privKey.toWIF());
    var pubKey = privKey.toPublicKey();
    console.log('pubKey:', pubKey);
  });

});





//
//
// var privKeyA = new bitcore.PrivateKey('regtest');
// console.log('privKeyA:', privKeyA);
// var privKeyAWIF = privKeyA.toWIF();
// console.log('privKeyAWIF:', privKeyAWIF);
// var pubKeyA = privKeyA.toPublicKey();
// console.log('pubKeyA:', pubKeyA);
// var addressTmpA = pubKeyA.toAddress();
// console.log('addressTmpA:', addressTmpA);
//
// var addressA = privKeyA.toAddress();
// console.log('addressA:', addressA);
//
//
//
// var privKeyB = new bitcore.PrivateKey('regtest');
// console.log('privKeyB:', privKeyB);
// var privKeyBWIF = privKeyB.toWIF();
// console.log('privKeyBWIF:', privKeyBWIF);
// var pubKeyB = privKeyB.toPublicKey();
// console.log('pubKeyB:', pubKeyB);
// var addressTmpB = pubKeyB.toAddress();
// console.log('addressTmpB:', addressTmpB);
//
// var addressB = privKeyB.toAddress();
// console.log('addressB:', addressB);
