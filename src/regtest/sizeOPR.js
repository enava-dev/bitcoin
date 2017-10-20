
var bitcore = require('bitcore-lib');
var btNode = require('./btNode');
var data = require('./data');
var Unit = bitcore.Unit;

var bcc = data.bcc;

btNode.listUnspent(bcc.add, function(res){
    var utxo = res[0];
    //console.log('utxo:', utxo);

    var utxoAmount = utxo.amount;
    console.log('utxoAmount:', utxoAmount);

    var dustAmount = bitcore.Transaction.DUST_AMOUNT;
    var feePerKb = bitcore.Transaction.FEE_PER_KB;
    var txAmount = dustAmount + feePerKb;
    console.log('txAmount:', txAmount);

    var op60 = 'Bitcoin Blockchain Globant certificate Bitcoin Blockchain 60';
    var op80 = 'Bitcoin Blockchain Globant certificate Bitcoin Blockchain Globant certificate 80';
    var op81 = 'Bitcoin Blockchain Globant certificate Bitcoin Blockchain Globant certificatee 81';
    var op120 = 'Bitcoin Blockchain Globant certificate Bitcoin Blockchain Globant certificate Bitcoin Blockchain Globant certificate 120';

    var tx = bitcore.Transaction()
        .change(bcc.add)
        .from(utxo)
        //.to('muMQmtsNpCW3TSbuNBarGo3asJF45Bxw2T', dustAmount)
        .to(data.addressSatoshis)
        .addData(op80)
        .sign(bcc.key);


    var txData = tx.toObject();

    console.log('##### tx.toObject()', tx.toObject());

    console.log('tx:', tx);

    var estimateSize = tx._estimateSize();
    console.log('estimateSize:', estimateSize);

    var estimateFee = tx.getFee();
    console.log('estimateFee:', estimateFee);

    var totalAmount = dustAmount + estimateFee;
    console.log('totalAmount:', totalAmount);

    var totalAmountBtc = Unit.fromSatoshis(totalAmount).toBTC();
    console.log('totalAmountBtc:', totalAmountBtc);

    var change = utxoAmount - totalAmountBtc;
    console.log('change:', change);

    // btNode.sendRawTransaction(tx, function(res){
    //     console.log('sendRawTransaction:', res);
    // });
});
