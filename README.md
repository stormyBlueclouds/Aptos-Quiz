# Aptos-Quiz
This is a project that uses the Aptos blockchain to make a quiz game.

- Develop a quiz game where users can participate and earn tokens for correct answers. This project involves creating a smart contract for managing the quiz, rewarding players with tokens, and integrating with a front-end for user interaction.
    - If we have time we can create a AI aspect to this that reads in users notes and quizzes them on that (check how people build AI projects thats reliant on chatGPT)
    - Project Breakdown
        - Users use their Aptos wallets to sign in to the application
        - Users upload a PDF and the application converts the PDF into a quiz
            - We will store the data regarding the original PDF and quiz on chain (as seen in the EasyA crash course)
        - We will have our own in house currency (We will have to mint tokens | use code seen on EasyA)
            - When users successfully answer quiz questions tokens are added to their wallets
            - These tokens can be used for . . .
                - Maybe taking care of a pet or some sort of fun online thing to keep them engaged that has to do with sustaining a society (exp. raising an aquarium of fish)
                - Fish ecosystem (if your actions have led you to feel like a clown dw the clownfish is clowned)
        - Past quizzes are stored on chain and linked to the users account so that they can see this when they sign in
        - We have to incorporate Aptos Keyless Authentication  (this will make it easier for non crypto bros to use the application)
        - Touch on the crypto space being saturated Thus popularizing thr chain more beyond the crypto space
        - If we have time: We should make a
    - Basic project
        - The user logs in using Google. Makes an account and plays a quiz.
        - They get tokens for completing a quiz and answering questions correctly
        - They can use these tokens to buy fish
    - Hackathon presentation should be a pitchathon that describes the project but outlines that we are suffering from bugs that are making it hard to put the project on chain and connect certain parts of it despite it being built out
    - Who are we building for? / benefit of using the application?
        - Our application is targeted towards students looking to procrastinate effectively (this is a joke, build out the punchline more)
            - Essentially this application helps students study more effectively than simply rereading notes would while also gaining tokens.
