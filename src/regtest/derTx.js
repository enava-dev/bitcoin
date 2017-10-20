
var bitcore = require('bitcore-lib'),
    data = require('./data'),
    btNode = require('./btNode'),
    Unit = bitcore.Unit;



var system = {
  hdPrivKey: new bitcore.HDPrivateKey(data.hd.system.xprivkey),
  hdPubKey: new bitcore.HDPublicKey(data.hd.system.xpubkey)
}

var institute = {
  hdPrivKey: new bitcore.HDPrivateKey(data.hd.institute.xprivkey),
  hdPubKey: new bitcore.HDPublicKey(data.hd.institute.xpubkey)
}

//("m/44'/0'/0'/0/1337")



var privDer_0 = system.hdPrivKey.derive("m/0");
//n31r3EBUKQpbv3m8j6wT6ECAjwyTRS2CSi
var privDer_0_0 = system.hdPrivKey.derive("m/0/0");

// console.log('system.hdPrivKey.privateKey.toWIF()', system.hdPrivKey.privateKey.toWIF());
// console.log('system.hdPrivKey.privateKey.toAddress()', system.hdPrivKey.privateKey.toAddress());
//
// console.log('privDer_0.privateKey.toWIF()', privDer_0.privateKey.toWIF());
// console.log('privDer_0.privateKey.toAddress()', privDer_0.privateKey.toAddress());
//
// console.log('privDer_0_0.privateKey.toWIF()', privDer_0_0.privateKey.toWIF());
// console.log('privDer_0_0.privateKey.toAddress()', privDer_0_0.privateKey.toAddress());






var pubDer_0 = system.hdPubKey.derive("m/0");
var pubDer_0_0 = system.hdPubKey.derive("m/0/0");


// console.log('####');
// console.log('system.hdPubKey.publicKey.toAddress()', system.hdPubKey.publicKey.toAddress());
//
// console.log('pubDer_0.publicKey.toAddress()', pubDer_0.publicKey.toAddress());
//
// console.log('pubDer_0_0.publicKey.toAddress()', pubDer_0_0.publicKey.toAddress());



// btNode.listUnspent(data.bcc.add, function(utxos){
//   // console.log('utxos[0]:', utxos[0]);
//   // console.log('utxos[1]:', utxos[1]);
//
//   var txData1 = {
//     utxos: utxos[0],
//     to: pubDer_0.publicKey.toAddress(),
//     amount: 10546,
//     opReturn: 'test tx',
//     change: data.bcc.add,
//     sign: data.bcc.key
//   };
//
//   // console.log('txData1:', txData1);
//
//   btNode.getNewTransaction(txData1, function(txObj){
//     console.log('txObj:', txObj);
//
//     btNode.sendRawTransaction(txObj, function(txId){
//       console.log('txId:', txId);
//       //156d2e81a4797dbf6f0835ffd8d9608dfb1770f4e189b007cf91a6aefca544a4
//     });
//
//   });
//
//
// });



   var txId = '156d2e81a4797dbf6f0835ffd8d9608dfb1770f4e189b007cf91a6aefca544a4';
  btNode.getRawTransaction(txId, function(rawTx){
    btNode.createUnspentOutput(rawTx, 0, function(utxo){

      var rootPrivKey = system.hdPrivKey.privateKey.toWIF();
      var derPrivKey = privDer_0.privateKey.toWIF();

      console.log('rootPrivKey:', rootPrivKey);
      console.log('derPrivKey:', derPrivKey);



        var txData1 = {
          utxos: utxo,
          to: data.bcc.add,
          amount: 546,
          opReturn: 'test tx go back',
          change: data.bcc.add,
          sign: derPrivKey
        };

        btNode.getNewTransaction(txData1, function(txObj){
          //console.log('txObj:', txObj);

          if (txObj.isFullySigned()){
            console.log('Transaction fully signed');
            btNode.sendRawTransaction(txObj, function(txId){
              console.log('txId:', txId);
              //fefa448128ad178f3b2af990e5048247386cce146f266c2c5236fd2253f4ed9a
            });
          } else {
            console.log('Transaction NOT fully signed');
          }

        });
    });
  });
