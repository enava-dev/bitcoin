
var bitcore = require('bitcore-lib');
var RpcClient = require('bitcoind-rpc');

var conf = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '127.0.0.1',
    port: '8332'
};

var rpc = new RpcClient(conf);


var personA = {
    privKey: 'ae13a218adc43f95bbd1273a2f741bac3c3d27a3ded244fa8aeb8b8cc07c561f',
    privKeyWIF: 'cTR5pmfkJs8JkMqXP8eBG7NrWadnEKZXVVg5TKY8pRAm1DCicgwT',
    address: 'mzfyWBDbzSz2EKfEwrFn4McjzegJUZNBuN'
};

var personB = {
    privKey: '862640acfd43df2ffe0afab61ceda534d5116b2fe2bf03d7ecfae19fd8b83bb0',
    privKeyWIF: 'cS5UFKi3fsFKeWeKBrWGYTt15ehxQPn688owYKjg5ppVYaHmHfzm',
    address: 'mtbEBJjxuQpqi2UUBNpy4RBhR5gNDPQfQs'
};




var privKeyA = new bitcore.PrivateKey(personA.privKey, 'testnet');
var addressA = privKeyA.toAddress();


var privKeyB = new bitcore.PrivateKey(personB.privKey, 'testnet');
var addressB = privKeyB.toAddress();


function listUnspent( addresses, cb){
  rpc.listUnspent( 1, 9999999, addresses, function(err, res){
    cb(res.result);
  });
};

function sendRawTransaction(txHex, cb){
  rpc.sendRawTransaction(txHex, function(err, res){
    cb(res.result);
  });
};



listUnspent([addressA.toString()], function(utxos){
  console.log('utxos:', utxos);
  console.log('addressB.toString():', addressB.toString());
  console.log('privKeyA.toString():', privKeyA.toString());

  var tx = new bitcore.Transaction()
      .from(utxos)          // Feed information about what unspent outputs one can use
      .to(addressB.toString(), bitcore.Transaction.DUST_AMOUNT)  // Add an output with the given amount of satoshis
      .change(addressA.toString())      // Sets up a change address where the rest of the funds will go
      .addData('send digital asset')
      .sign(privKeyA.toString());     // Signs all the inputs it can
  console.log('tx:', tx);

  var txHex = tx.serialize();
  console.log('txHex:', txHex);
  sendRawTransaction(txHex, function(txid){
    console.log('txid:', txid);
  });

});
















//
//
//
// rpc.getBalance( [addressA.toString()], function(err, res){
//   console.log('getBalance addressA');
//   console.log('err:', err);
//   console.log('res:', res);
// });
//


/*rpc.sendToAddress( addressA.toString(), 10.00, function(err, res){
  console.log('sendToAddress addressA');
  console.log('err:', err);
  console.log('res:', res);
});*/



//
//
// rpc.listUnspent( 1, 9999999, ['n1gss1K7H6az7RXYpvrKK245EYTPd3TQTq'],function(err, res){
//   console.log('listUnspent addressB');
//   console.log('err:', err);
//   console.log('res:', res);
// });
//
//
