'use strict';

var bitcore = require('bitcore-lib');
var RpcClient = require('bitcoind-rpc');




var bitcoinRpc = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '10.28.149.235',
    port: '8332'
};

var rpc = new RpcClient(bitcoinRpc);

var txId = "4ff106ed6aa157b62b2779baf74ef9c98d35b5d629f604a010946ea3ca1e9d04";

rpc.getRawTransaction(txId, 1, function(err, res) {
  
  console.log('err:', err);
  console.log('res:', JSON.stringify(res));
});