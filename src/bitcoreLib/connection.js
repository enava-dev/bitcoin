
var RpcClient = require('bitcoind-rpc');

var conf = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '127.0.0.1',
    port: '8332'
};

var rpc = new RpcClient(conf);


//bitcoin-cli getbalance
rpc.getBalance(function(err, res){
  console.log('getBalance');
  console.log('err:', err);
  console.log('res:', res);
});


//bitcoin-cli listunspent
rpc.listUnspent(function(err, res){
  console.log('listUnspent');
  console.log('err:', err);
  console.log('res:', res);
});
