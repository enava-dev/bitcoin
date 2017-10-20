

var merkletools = require('merkle-tools');


var treeOptions = {
  hashType: 'sha256'
}

var mt1 = new merkletools(treeOptions);

var mt = new merkletools();

console.log('mt1:', mt1);
console.log('mt:', mt);
