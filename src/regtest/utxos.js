
var bitcore = require('bitcore-lib');
var btNode = require('./btNode');
var data = require('./data');
var Unit = bitcore.Unit;



var add = [
  'n4psvTWXg98zJu39tHL8JB88enqwr4siCf',
  data.bcc.add
];


var key = [
  'cV6MP5mAm78sqALnVEnNzNXYy55RM6B22pXntcTWsTWFj81qJtxy',
  data.bcc.key
];


btNode.listUnspent(add, function(utxos){
    // console.log('listUnspent:', utxos);


    getUtxosToUse(utxos, function(utxosToUse){
      // console.log('listUnspent:', utxosToUse);




      btNode.getTotalAmount(utxosToUse, function(amount){
        console.log('amount:', amount);

        var DUST_AMOUNT = Unit.fromSatoshis(bitcore.Transaction.DUST_AMOUNT).toBTC();
        var FEE_PER_KB = Unit.fromSatoshis(bitcore.Transaction.FEE_PER_KB).toBTC();
        // console.log('DUST_AMOUNT:', DUST_AMOUNT);
        // console.log('FEE_PER_KB:', FEE_PER_KB);


        // console.log('amount:', amount);
        // amount -= FEE_PER_KB;
        // amount =  Unit.fromBTC(amount.toFixed(8)).toSatoshis();
        // console.log('amount:', amount);



        var txData = {
            // utxos: utxos,
            utxos: utxosToUse,
            to: data.certifier.add,
            // amount: amount,
            amount: 1092,
            opReturn: 'merkle root',
            change: data.bcc.add,
            sign: key
        };
        // console.log('txData:', txData);

        btNode.getNewTransaction(txData, function(tx){
        // console.log('tx obj:', tx);

          btNode.sendRawTransaction(tx, function(txId){
            console.log('txId:', txId);
            // be6084109db4d1b3bc405799b8954cdccfd5a433ac1f61d628c99ad8422aa8f3
          });

        });

      });

    });

});



function getUtxosToUse(utxos, cb){
  var utxosToUse = [];
  var fee = null;
  utxos.forEach(function(utxo){
    if(utxo.address === 'n4psvTWXg98zJu39tHL8JB88enqwr4siCf'){
      utxosToUse.push(utxo);
    } else if(!fee){
      utxosToUse.push(utxo);
      fee = true;
    }
  });
  cb(utxosToUse);
}
