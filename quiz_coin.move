// module MyAddress::MyContract {
//     public entry fun hello(): u64 {
//         42
//     }
// }
module 0xfb91e039273777f65b0102bc64405746076c50d8e240090f6cc03601df102172::quiz_coin{
    struct QuizCoin has store, copy, drop {}

    public entry fun init_module(sender: &signer){
        aptos_framework::managed_coin::initialize<QuizCoin>(sender,b"Quiz Coin",b"QZCN",3,false,);
    }

    //Front-end stuff for testing the code
    // const alice: Account = Account.generate();
    // const transaction = await aptos.transferCoinTransaction({sender: alice, recipient: bob.accountAddress, amount: 100,});
}

