
transaction

2NA68zdEoJAunipNmfWuTKCDTGgLCQGoEMA



var addresses = ['mm7ZdHeTpkPfzQJPA5Y75khrZXpWV4ZhnN','myMTs53HX1AMapoFGorcNgMXznKghzvM4w'];
var pubKeys = ['0228d770502d476c14e024346ef9dd349f13b04e2c8956e3c26b51a1cdd120ecc3',
'02efe291211aa0fd338a337f39b32aa614e32793588d9c2138c4ae3b957e026a3c'];

bitcoin-cli createmultisig 2 "[\"mm7ZdHeTpkPfzQJPA5Y75khrZXpWV4ZhnN\",\"myMTs53HX1AMapoFGorcNgMXznKghzvM4w\"]"


bitcoin-cli sendtoaddress 2NA68zdEoJAunipNmfWuTKCDTGgLCQGoEMA 40.0

5487318c92caaa6b3d937fd3c22468dfd8188266bbecfa8461c75b6ddee07dcf


bitcoin-cli listunspent 0 9999999 "[\"2NA68zdEoJAunipNmfWuTKCDTGgLCQGoEMA\"]"

bitcoin-cli getrawtransaction 5487318c92caaa6b3d937fd3c22468dfd8188266bbecfa8461c75b6ddee07dcf

bitcoin-cli getrawtransaction 5487318c92caaa6b3d937fd3c22468dfd8188266bbecfa8461c75b6ddee07dcf 1

bitcoin-cli decoderawtransaction 0100000001158d66d52fca4530e6f009f9fb26f5c95778b4a1c3fb0a7d1d5f765c7e5f9a93000000004847304402202e8ecc92829172b4c6c975926eb06bf1bab10859389dc57c6bf13ea41f0e0da10220156dc1e248a9089986586b4e5fdf0f0475c504cc69c39a6effff14ab7688431c01feffffff0228bb9a3b000000001976a9142f6b9af7105a19b15226a107022274e6191fb45588ac00286bee0000000017a914b8c239cdbca34e3288556ea86540eb10938a3b678765000000
