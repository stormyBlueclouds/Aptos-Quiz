module 0x671e0845b5e273d28da8b16a84571cf7107001b3fdf759e80845a1d264da23a2::quiz_coin{
    struct QuizCoin has store, copy, drop {}

    fun init_module(sender: &signer){
        aptos_framework::managed_coin::initialize<QuizCoin>(sender,b"Quiz Coin",b"QZCN",3,false,);
    }

    //Front-end stuff for testing the code
    // const alice: Account = Account.generate();
    // const transaction = await aptos.transferCoinTransaction({sender: alice, recipient: bob.accountAddress, amount: 100,});
}