'use strict';

var bitcore = require('bitcore-lib');

var hdPrivateKeyService = {};

hdPrivateKeyService.createHD = function(xprivkeyDB){
  
  console.log('##########');
  var hdPriv = new bitcore.HDPrivateKey(xprivkeyDB);
  var xprivkey = hdPriv.xprivkey;
  var xpubkey = hdPriv.hdPublicKey.xpubkey;
  


  var query = "update institute set hd_public_key = '" +  xpubkey + "' where hd_public_key = '" + xprivkeyDB +"';";


//   console.log();
  console.log('xprivkeyDB :', xprivkeyDB);
  console.log('xprivkey   :', xprivkey);
  console.log('xpubkey    :', xpubkey);
  console.log(query);
  console.log('##########');

}


module.exports = hdPrivateKeyService;

