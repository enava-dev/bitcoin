
var index = require('bitcore-node');

//Services
var Bitcoin = index.services.Bitcoin;

//Nodes
var Node = index.Node;

var configuration = {
    datadir: '/home/emmanuel/.bitcorenode',
    network: 'testnet',
    services: [
        {
            name: 'bitcoind',
            module: Bitcoin,
            config: {
                    connect: [
                        {
                          rpchost: '10.28.149.235',
                          rpcport: 8332,
                          rpcuser: 'bitcoinrpc',
                          rpcpassword: 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
                          zmqpubrawtx: 'tcp://127.0.0.1:30611'
                        }
                    ]
            }
        }
    ]
};



var bitcoreNodeConfig = {
    network: 'testnet',
    services: [
        {
            name: 'bitcoind',
            module: Bitcoin,
            config: {
                    connect: [
                        {
                          rpchost: '10.28.149.235',
                          rpcport: 8332,
                          rpcuser: 'bitcoinrpc',
                          rpcpassword: 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
                          zmqpubrawtx: 'tcp://127.0.0.1:30611'
                        }
                    ]
            }
        }
    ]
};


var nodeBCC = {
  datadir: '/home/user/.bitcoin',
  network: 'testnet',
  services: ['bitcoind'],
  servicesConfig: {
    bitcoind: {
        connect: [
            {
              rpchost: '10.28.149.235',
              rpcport: 8332,
              rpcuser: 'bitcoinrpc',
              rpcpassword: 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
              zmqpubrawtx: 'tcp://127.0.0.1:30611'
            }
        ]
    }
  }
};


var configurationByFile = {
    datadir: '/home/emmanuel/.bitcorenode',
    network: 'testnet',
    services: [
        {
            name: 'bitcoind',
            module: Bitcoin,
            config: {}
        }
    ]
};


var configNode = {
    network: 'testnet',
    services: ['bitcoind'],
    servicesConfig: {
        bitcoind: {
            datadir: '/home/emmanuel/.bitcorenode',
            rpchost: '10.28.149.235',
            rpcport: 8332,
            rpcuser: 'bitcoinrpc',
            rpcpassword: 'GLQMan2yXN1GvSDkVo39bCK2sC26RkXpGCd8WrPGHeFZ',
            zmqpubrawtx: 'tcp://127.0.0.1:30611'
        }
    }
};





//var node = new Node(configuration);
//var node = new Node(configurationByFile);
//var node = new Node(configNode);
//var node = new Node(nodeBCC);
var node = new Node(bitcoreNodeConfig);

node.start(function() {
  //start the node so the node.on('ready') is actually called.
  console.log('start');

});

node.on('ready', function() {
  console.log('Bitcoin Node Ready');

  // var txid = '7426c707d0e9705bdd8158e60983e37d0f5d63529086d6672b07d9238d5aa623';
  // console.log('txid:', txid);
  // // get a bitcore object of the transaction (as above)
  // node.services.bitcoind.getTransaction(txid, function(err, transaction) {
  //   console.log('transaction:', transaction);
  // });


    node.services.bitcoind.isSynced(function(err, synced){
        console.log('isSynced');
        console.log('err:', err);
        console.log('synced:', synced);
    });




    // gives the current estimate of blockchain download as a percentage
    node.services.bitcoind.syncPercentage(function(err, percent) {
        console.log('syncPercentage');
        console.log('err:', err);
        console.log('percent:', percent);
    });

    node.services.bitcoind.getInfo(function(err, info){
        console.log('getInfo');
        console.log('err:', err);
        console.log('info:', info);
    });




    var address = 'mgtu9mhJzyf5Es4C8AF1QbJEmRCPnAyrES';
    var options = false;
    node.services.bitcoind.getAddressUnspentOutputs(address, options, function(err, unspentOutputs) {
      console.log('getAddressUnspentOutputs');
      console.log('err:', err);
      console.log('unspentOutputs:', unspentOutputs);
    });


});

// node.on('error', function(err) {
//   console.error(err);
// });



// // shutdown the node
// node.stop(function() {
//   // the shutdown is complete
//   console.log('stop');
// });
