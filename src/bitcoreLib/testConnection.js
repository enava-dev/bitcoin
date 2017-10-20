var RpcClient = require('bitcoind-rpc');


  var config = {
    protocol : 'http',
    user: 'bitcoinrpc',
    pass : 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
    host: '127.0.0.1',
    port: '8332'
};


var rpc = new RpcClient(config);



// rpc.getBalance(function (err, res) {
//        console.log('getBalance');
//        console.log('err:', err);
//        console.log('res:', res);
// });
//
// rpc.listUnspent(function (err, res) {
//        console.log('listUnspent');
//        console.log('err:', err);
//        console.log('res:', res);
// });


// mqFErZC5amj3qJcvgLDrhDfVbtFrAMUNq8


rpc.getBalance('mqFErZC5amj3qJcvgLDrhDfVbtFrAMUNq8', function (err, res) {
       console.log('getBalance');
       console.log('err:', err);
       console.log('res:', res);
});

rpc.listUnspent(1,9999999,['mqFErZC5amj3qJcvgLDrhDfVbtFrAMUNq8'], function (err, res) {
       console.log('listUnspent');
       console.log('err:', err);
       console.log('res:', res);
});
