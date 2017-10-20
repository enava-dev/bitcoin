
var bitcore = require('bitcore-lib');
var btNode = require('./btNode');
var data = require('./data');


var Unit = bitcore.Unit;




var bcc = data.bcc;

btNode.getBalance(bcc.add, function(res){
    //console.log('balance bcc', res);

    btNode.listUnspent(bcc.add, function(res){
        //console.log('unspent bcc:', res);

        var utxo = res[0];
        console.log('utxo:', utxo);

        var FEE_PER_KB = bitcore.Transaction.FEE_PER_KB;
        var FEE_SECURITY_WARNING = bitcore.Transaction.FEE_SECURITY_WARNING;
        var DUST_AMOUNT = bitcore.Transaction.DUST_AMOUNT;
        var MAXIMUM_EXTRA_SIZE = bitcore.Transaction.MAXIMUM_EXTRA_SIZE


        var amount = bitcore.Transaction.FEE_PER_KB + bitcore.Transaction.DUST_AMOUNT;
        console.log('FEE_PER_KB:', FEE_PER_KB);
        console.log('FEE_SECURITY_WARNING:', FEE_SECURITY_WARNING);
        console.log('DUST_AMOUNT:', DUST_AMOUNT);
        console.log('MAXIMUM_EXTRA_SIZE:', MAXIMUM_EXTRA_SIZE);
        console.log('amount:', amount);


        var tx1 = new bitcore.Transaction()
            .change(bcc.add)
            .from(utxo)
            .to('muMQmtsNpCW3TSbuNBarGo3asJF45Bxw2T', amount)
            .addData('Bitcoin Blockchain Globant certificate')
            .sign(bcc.key);
        //console.log('tx1:', tx1);
        //console.log('tx1.getFee():', tx1.getFee());
        var tx1Size = tx1._estimateSize();
        console.log('tx1Size:', tx1Size);


        var tx2 = new bitcore.Transaction()
            .change(bcc.add)
            .from(utxo)
            .to(data.addressSatoshis)
            .addData('Bitcoin Blockchain Globant certificate')
            .sign(bcc.key);
        //console.log('tx2:', tx2);
        var amountToSend_satoshis = 6552;
        console.log('amountToSend_satoshis:', amountToSend_satoshis)
        var fee_satoshis = tx2.getFee();
        console.log('fee_satoshis:', fee_satoshis);
        var totalAmount_satoshis = amountToSend_satoshis + fee_satoshis;
        console.log('totalAmount_satoshis:', totalAmount_satoshis);

        var totalAmount_btc = Unit.fromSatoshis(totalAmount_satoshis).toBTC();
        console.log('totalAmount_btc:', totalAmount_btc);

        console.log('utxo.amount_btc:', utxo.amount);
        var change = utxo.amount - totalAmount_btc;
        console.log('change:', change);


        //amountToSend_satoshis: 6552
        //fee_satoshis: 10000
        //totalAmount_satoshis: 16552
        //totalAmount_btc: 0.00016552
        //utxo.amount_btc: 50
        //change: 49.99983448




        var tx2Size = tx2._estimateSize();
        console.log('tx2Size:', tx2Size);
        //_estimateFee


        btNode.sendRawTransaction(tx2, function(res){
            console.log('sendRawTransaction:', res);

            //a80f372a9c950735cd05adfe3cba90f2fbdfe0529251312beae0c7c3dcc9ecfb
            //d5c3382a0707aae938f0328787e101bf85f81ca3a22d910cc0b6255e14a0f6e1
        });

        // 0.0001 BTC per 1000 bytes
        //each 1000 bytes cost 10000 satoshis
        //1000 bytes approximately 24 outputs plus op_return
        //1000 bytes approximately 20 outputs plus op_return with 80 bytes

        //block = 1Mb
        //tx promedio = 440 bytes
        //1.5 tx/segundo

    });

});
