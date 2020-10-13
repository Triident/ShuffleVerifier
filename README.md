# ShuffleVerifier
Verify that your shuffled deck on @BlackjackCasinoBot was generated fairly.

<hr>

## Getting Started 
In order to verify your deck shuffle, you must obtain both the `Client Seed` and `Server Seed` from [the bot](https://t.me/BlackjackCasinoBot ). Your client seed is always available, however revealing the Server Seed will generate a new seed for future games.

As a demonstration, we will use the following seed pair when verifying the shuffle.

> Client: able able able able able able able able able able able able 

>Server: abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon

Along with these seeds, each shuffle has a `nonce`. This nonce is a number that is used to determine how many times the deck has been shuffled, and changing the nonce will result in a unique shuffled deck. For this demonstration, we will be using `nonce 0`, meaning this is the first shuffle that the bot has preformed using this seed pair.

## Preforming a verification
In order to verify that your deck was legitimately generated, please navigate to the [repl.it](https://repl.it/@Triident/ShuffleVerifier#index.js) project, where you can both verify the code behind the shuffle function, as well as preform a deck verification.

To preform a verification on the information above, we filled in the `clientSeed`, `serverSeed`, `nonce` as requested.

##### Example:

```
var clientSeed = "able able able able able able able able able able able able";
var serverSeed = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon";
var nonce = 0;
```

After inputting the required seeds & nonce, all that's left to do is see the resulting shuffled deck. You can do this by clicking the run button. After a moment, the result will appear in the console tab on the right. You may use this data to verify that your games were played correctly and legitimately, without alteration on our part.

Going back to our example, you can see that with the given `clientSeed`, `serverSeed`, and `nonce`, we are given the shuffled deck below.

```
[
  '2 of Diamonds',    '10 of Clubs',       'Queen of Clubs',
  '10 of Hearts',     'King of Diamonds',  '6 of Diamonds',
  'Ace of Spades',    '8 of Hearts',       '2 of Diamonds',
  '2 of Diamonds',    'King of Hearts',    '4 of Hearts',
  '5 of Spades',      '5 of Clubs',        'Queen of Clubs',
  '3 of Spades',      '8 of Diamonds',     'King of Spades',
  '10 of Diamonds',   '10 of Spades',      '10 of Spades',
  'Ace of Diamonds',  '2 of Spades',       '8 of Diamonds',
  'King of Clubs',    'Ace of Hearts',     'Ace of Clubs',
  '5 of Clubs',       '7 of Diamonds',     '3 of Spades',
  '9 of Clubs',       '6 of Spades',       '3 of Diamonds',
  '2 of Diamonds',    '9 of Diamonds',     '4 of Diamonds',
  '7 of Hearts',      'King of Diamonds',  '6 of Clubs',
  '2 of Clubs',       'King of Hearts',    '8 of Spades',
  '10 of Clubs',      '10 of Diamonds',    '9 of Diamonds',
  'Jack of Hearts',   '2 of Spades',       '3 of Spades',
  '2 of Hearts',      '9 of Hearts',       '4 of Spades',
  '8 of Hearts',      'King of Hearts',    '4 of Diamonds',
  '5 of Clubs',       '7 of Spades',       '5 of Spades',
  '5 of Spades',      'Queen of Diamonds', '8 of Hearts',
  '10 of Hearts',     '3 of Clubs',        'King of Spades',
  'King of Diamonds', 'Jack of Hearts',    '8 of Spades',
  '4 of Diamonds',    '6 of Diamonds',     '6 of Clubs',
  '9 of Clubs',       '9 of Diamonds',     'Ace of Spades',
  'Ace of Clubs',     'King of Spades',    'Ace of Hearts',
  '10 of Clubs',      '8 of Diamonds',     '5 of Clubs',
  '2 of Spades',      '2 of Hearts',       'Jack of Spades',
  '10 of Spades',     'Ace of Clubs',      '10 of Hearts',
  '9 of Spades',      '9 of Clubs',        '9 of Spades',
  '3 of Diamonds',    '8 of Clubs',        '8 of Spades',
  '6 of Spades',      '5 of Hearts',       'Jack of Clubs',
  '5 of Clubs',       'King of Hearts',    'Jack of Clubs',
  '4 of Hearts',      '3 of Hearts',       '5 of Diamonds',
  '4 of Spades',
  ... 212 more items
]
```

## Credits
All credits go to [Trident](https://t.me/tridents), who developed this bot and verifier in its entirety.
