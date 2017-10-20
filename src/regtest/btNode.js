
var bitcore = require('bitcore-lib');
var Unit = bitcore.Unit;
var RpcClient = require('bitcoind-rpc');


var conf = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '127.0.0.1',
    port: '8332'
};

var rpc = new RpcClient(conf);


var btNode = {};



btNode.listAddressGroupings = function(cb){
    rpc.listAddressGroupings(function(err, res){
        cb(res.result);
    });
}


btNode.listUnspent = function(addresses, cb){

  if (!addresses) {
    addresses = [];
  } else if(typeof addresses === 'string'){
    addresses = [addresses];
  }

  rpc.listUnspent(1, 99999999, addresses, function (err, res) {
     return cb(res.result);
  });
}


btNode.getBalance = function(address, cb){
  if(!address){
    address = '';
  }

  rpc.getBalance(address, function(err, res){
    cb(res.result);
  });
}


btNode.getNewAddress = function(cb){
  rpc.getNewAddress(function( err, res ){
    cb(res.result);
  });
}


btNode.dumpPrivKey = function(address, cb){
  rpc.dumpPrivKey(address, function( err, res){
    cb(res.result);
  });
}



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




btNode.getNewAddressAndPrivKey = function(cb){
    btNode.getNewAddress(function(addStr){
      var address = bitcore.Address.fromString(addStr);
      btNode.dumpPrivKey(address.toString(), function(privKeyStr){
        var privKey = bitcore.PrivateKey.fromWIF(privKeyStr);
        //privKey.toWIF();
        //var pubKey = privKey.toPublicKey();
        //pubKey.toAddress().toString();
        cb({
            address: addStr,
            privKey: privKeyStr
        });
      });
    });
}




btNode.createMultiSig = function(addresses, cb){
  rpc.createMultiSig(addresses.length, addresses, function(err, res){
    cb(res.result);
  });
}


btNode.sendRawTransaction = function(tx, cb){
  var txHex;
  try {
     txHex = tx.serialize();
  } catch (err) {
    return cb(err);
  }
  rpc.sendRawTransaction(txHex, function(err, res){
    cb(res.result);
  });
};



btNode.getRawTransaction = function(txId, cb){
    rpc.getRawTransaction(txId, 1, function(err, res) {
        cb(res.result);
    });
}



btNode.getNewTransaction = function(data, cb){
  console.log('txData:', data);

  var tx = new bitcore.Transaction()
    .from(data.utxos)
    .to(data.to, data.amount)
    .addData(data.opReturn)
    .change(data.change)
    .sign(data.sign);

  console.log('getFee:', tx.getFee());
  console.log('estimateSize', tx._estimateSize());

  cb(tx);
}


btNode.getTotalAmount= function(utxos, cb){
  var totalAmount = 0.0;
  for (var i = 0; i < utxos.length; i++){
    totalAmount += utxos[i].amount;
  }
  cb(totalAmount.toFixed(8));
}




// fileHelper.getHash = function (data) {
//     var buffer = new Buffer(data, 'base64');
//     return bitcore.crypto.Hash.sha256sha256(buffer).toString('hex');
// };



btNode.createUnspentOutput = function(rawTx, n, cb){

  var vout = rawTx.vout[n];
  var utxo = new bitcore.Transaction.UnspentOutput({
              txid: rawTx.txid,
              vout: vout.n,
              address: vout.scriptPubKey.addresses[0],
              scriptPubKey: vout.scriptPubKey.hex,
              satoshis: Unit.fromBTC(vout.value).toSatoshis()
  });

  cb(utxo);
}


btNode.getNewHDPrivKey = function(cb){

  //testnet
  var hdPrivKey = new bitcore.HDPrivateKey('testnet');
  //livenet
  // var hdPrivKey = new bitcore.HDPrivateKey();


  var privKey = hdPrivKey.privateKey;
  var privKeyWIF = privKey.toWIF();

  var hdPubKey = hdPrivKey.hdPublicKey;
  var pubKey = hdPrivKey.publicKey;
  var pubKey2 = hdPubKey.publicKey;
  var pubKey3 = privKey.toPublicKey();

  var address = privKey.toAddress();
  var address2 = pubKey.toAddress();

  cb(hdPrivKey);
}

module.exports = btNode;
