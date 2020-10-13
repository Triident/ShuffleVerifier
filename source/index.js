var functions = require("./functions.js");

//Please fill in these variables with the information you recieved from the bot.
var clientSeed = "able able able able able able able able able able able able";
var serverSeed = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon";
var nonce = 0;

var deck = functions.shuffle(clientSeed, serverSeed, nonce);
var shuffle = [];
for(var i = 0; i < deck.length; i++){
  shuffle.push(functions.numberToCardString(deck[i]));
}

console.log(shuffle);
