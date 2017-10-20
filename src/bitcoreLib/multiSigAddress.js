
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




var Bank1Person1 = {
  address: 'mm7ZdHeTpkPfzQJPA5Y75khrZXpWV4ZhnN',
  pubKey: '0228d770502d476c14e024346ef9dd349f13b04e2c8956e3c26b51a1cdd120ecc3',
  privKey: '3e5c90f7c7d8839ec8064320ae5c8899f4b3e608244f177a4da4dc79c6822712',
  privKeyWIF: 'cPfvZzRH4VACeSccFVhdTJiw8VzwvMVB63wuN8k2iKFZ5iASSGWU'
};

var Bank1Person2 = {
  address: 'myMTs53HX1AMapoFGorcNgMXznKghzvM4w',
  pubKey: '02efe291211aa0fd338a337f39b32aa614e32793588d9c2138c4ae3b957e026a3c',
  privKey: 'a1267abf5450c54479aef53dd6fdb6faee904555992ab34f21e477bbcbeca385',
  privKeyWIF: 'cSyxSt3UFFZSHRr3cihGmGfMoUp565FZoBGQiib6FFmEf75t4jJV'
};

/*{
  "address": "2NA68zdEoJAunipNmfWuTKCDTGgLCQGoEMA",
  "redeemScript": "52210228d770502d476c14e024346ef9dd349f13b04e2c8956e3c26b51a1cdd120ecc32102efe291211aa0fd338a337f39b32aa614e32793588d9c2138c4ae3b957e026a3c52ae"
}
*/

var Bank2Person1 = {
  address: 'mhY88c1cVfwG6DmiKnukkyyXPMc5GLkePo',
  pubKey: '03cb2083096ddb7f927ebd9a1f905eb68e8b20712950150a20cd1e18fde5110756',
  privKey: '0736464c0e7f212b7acb5371d48cd9058b27c30a676245f5f50407493fc43213',
  privKeyWIF: 'cMpimBJkPhiZz7rVqgaYuKPztJdJqd8L3wBFFexXdqMyFWzGvqLB'
};

var Bank2Person2 = {
  address: 'n3mzwqcMVEef3ifVC6yW17iWYoQQeV4woK',
  pubKey: '0328128ece62c71d5ddcdea9e7d6c0fcf0444aab1a68424fcd930aa57e0e96543c',
  privKey: '1a61afa7ac846c38825680d057e5f6e01fd1592a48b5b287b48a9177ba96768c',
  privKeyWIF: 'cNTz2RKrqQ82vG7pEodWjMqRFhxDwUeCE5Fxxd4exruRxTzV3BSc'
};


/*{
  "address": "2N7qT9UVyKNeVJmZn13amLpjPjzndxk6Hfo",
  "redeemScript": "522103cb2083096ddb7f927ebd9a1f905eb68e8b20712950150a20cd1e18fde5110756210328128ece62c71d5ddcdea9e7d6c0fcf0444aab1a68424fcd930aa57e0e96543c52ae"
}
*/


/*function createMultiSigAddress(addresses, cb){
  console.log('addresses:', addresses);
  console.log('addresses.length:', addresses.length);
  rpc.createMultiSig(addresses.length, addresses, function(err, res){
    console.log('rpc.createMultiSig');
    console.log('res:', res);
    cb(res.result);
  });
}


// [Bank1Person1.address, Bank1Person2.address]

createMultiSigAddress(["mm7ZdHeTpkPfzQJPA5Y75khrZXpWV4ZhnN","myMTs53HX1AMapoFGorcNgMXznKghzvM4w"], function(address){
  console.log('address:', address);
});*/

var nRequired = 2;
var addresses = ['mm7ZdHeTpkPfzQJPA5Y75khrZXpWV4ZhnN','myMTs53HX1AMapoFGorcNgMXznKghzvM4w'];
var pubKeys = ['0228d770502d476c14e024346ef9dd349f13b04e2c8956e3c26b51a1cdd120ecc3',
'02efe291211aa0fd338a337f39b32aa614e32793588d9c2138c4ae3b957e026a3c'];


//bitcoin-cli createmultisig 2 "[\"mhY88c1cVfwG6DmiKnukkyyXPMc5GLkePo\",\"n3mzwqcMVEef3ifVC6yW17iWYoQQeV4woK\"]"

/*rpc.createMultiSig( 1, ['mm7ZdHeTpkPfzQJPA5Y75khrZXpWV4ZhnN', function(err, res){
  console.log('rpc.createMultiSig');
  //console.log('nRequired:', nRequired);
  //console.log('pubKeys:', pubKeys);
  console.log('err:', err);
  console.log('res:', res);
});*/




var address = new bitcore.Address(pubKeys, nRequired, 'testnet');
console.log('address:', address);
console.log('address.isPayToPublicKeyHash():', address.isPayToPublicKeyHash());
console.log('address.isPayToScriptHash():', address.isPayToScriptHash());
console.log('address.inspect():', address.inspect());
