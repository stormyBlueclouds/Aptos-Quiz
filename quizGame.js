
// Firebase + Google Auth setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIFP5Wnq0CnWCHtut56xUDukI1p7OgFpQ",
  authDomain: "quizdapp-276e0.firebaseapp.com",
  projectId: "quizdapp-276e0",
  storageBucket: "quizdapp-276e0.firebasestorage.app",
  messagingSenderId: "779190281268",
  appId: "1:779190281268:web:53757e5e727af581a91661",
  measurementId: "G-46FXFBWZYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider(); //not sure if I should add this because original firebase config didn't come with it

document.getElementById("login-btn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const idToken = await user.getIdToken();

    document.getElementById("user-info").innerText = `Logged in as ${user.email}`;

    console.log("Google ID Token:", idToken);

    const aptosClient = new aptos.AptosClient("https://fullnode.testnet.aptoslabs.com/v1");

    // Simulate keyless registration placeholder
    console.log("Ready to register keyless account using ID token...");

  } catch (err) {
    console.error("Login failed:", err);
  }
});

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Quiz Selector</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    .quiz-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 30px;
    }

    .quiz-buttons button {
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #4f46e5;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    .quiz-buttons button:hover {
      background-color: #3730a3;
    }

    .question-block {
      margin-bottom: 20px;
    }

    .question-block p {
      font-weight: bold;
    }

    .question-block button {
      display: block;
      margin: 5px 0;
      padding: 6px 12px;
      border: 1px solid #ccc;
      background: #eee;
      cursor: pointer;
      width: fit-content;
    }

    #quiz-container {
      margin-top: 30px;
    }
  </style>
</head>
<body>

  <h1>Select a Quiz</h1>

  <div class="quiz-buttons">
    <button data-quiz="pop">Pop Culture</button>
    <button data-quiz="sports">Sports</button>
    <button data-quiz="history">U.S. History</button>
    <button data-quiz="geo">Geography</button>
    <button data-quiz="random">Random Facts</button>
  </div>

  <div id="quiz-container"></div>

  <script>
    // Your quizzes object
    const quizzes = {
      pop: [
        {
      q: "Who played the character of Eleven in Stranger Things?",
      options: ["Millie Bobby Brown", "Sadie Sink", "Natalia Dyer"],
      answer: "Millie Bobby Brown"
    },
    {
      q: "Which singer released the hit single Anti-Hero in 2022?",
      options: ["Olivia Rodrigo", "Taylor Swift", "Billie Eilish"],
      answer: "Taylor Swift"
    },
    {
      q: "What movie won Best Picture at the 2023 Oscars?",
      options: ["Everything Everywhere All At Once", "Top Gun: Maverick", "The Banshees of Inisherin"],
      answer: "Everything Everywhere All At Once"
    },
    {
      q: "Which video game franchise includes the locations of Hyrule and Termina?",
      options: ["Final Fantasy", "The Legend of Zelda", "Elder Scrolls"],
      answer: "The Legend of Zelda"
    },
    {
      q: "Who was the original host of The Daily Show",
      options: ["Jon Stewart", "Craig Kilborn", "Trevor Noah"],
      answer: "Craig Kilborn"
    },
    {
      q: "What K-pop group released Butter and Dynamite?",
      options: ["EXO", "BLACKPINK", "BTS"],
      answer: "BTS"
    },
    {
      q: "What fictional continent is Game of Thrones mainly set in?",
      options: ["Middle-earth", "Valyria", "Westeros"],
      answer: "Westeros"
    }
      ],
      sports: [ 
        {
      q: "How many players are on the field per team in soccer?",
      options: ["9", "11", "13"],
      answer: "11"
    },
    {
      q: "Who holds the record for most career NBA points?",
      options: ["LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan"],
      answer: "LeBron James"
    },
    {
      q: "Which country hosted the 2022 FIFA World Cup?",
      options: ["Brazil", "Russia", "Qatar"],
      answer: "Qatar"
    },
    {
      q: "What is the maximum score in a single frame of bowling?",
      options: ["30", "20", "15"],
      answer: "30"
    },
    {
      q: "What sport uses the term “love” for a score of zero?",
      options: ["Badminton", "Cricket", "Tennis"],
      answer: "Tennis"
    },
    {
      q: "In baseball, how many strikes make an out?",
      options: ["2", "3", "4"],
      answer: "3"
    },
    {
      q: "Simone Biles is known for her success in what sport?",
      options: ["Swimming", "Track and Field", "Gymnastics"],
      answer: "Gymnastics"
    }
      ],
      history: [ 
        {
      q: "Who was the 16th President of the United States?",
      options: ["Abraham Lincoln", "Andrew Jackson", "Thomas Jefferson"],
      answer: "Abraham Lincoln"
    },
    {
      q: "What year did the United States declare independence?",
      options: ["1789", "1776", "1789"],
      answer: "1776"
    },
    {
      q: "What war was fought between the North and South in the U.S.?",
      options: ["Revolutionary War", "Civil War", "War of 1812"],
      answer: "Civil War"
    },
    {
      q: "Who wrote the Declaration of Independence?",
      options: ["George Washington", "James Madison", "Thomas Jefferson"],
      answer: "Thomas Jefferson"
    },
    {
      q: "What was the movement to end racial segregation called?",
      options: ["Civil Rights Movement", "Suffrage Movement", "Abolitionist Movement"],
      answer: "Civil Rights Movement"
    },
    {
      q: "Who was president during World War II (most of it)?",
      options: ["Franklin D. Roosevelt", "Harry Truman", "Dwight Eisenhower"],
      answer: "Franklin D. Roosevelt"
    },
    {
      q: "What territory did the U.S. buy from France in 1803?",
      options: ["Alaska", "The Oregon Trail", "The Louisiana Territory"],
      answer: "The Louisiana Territory"
    }
       ],
      geo: [
        {
      q: "What is the longest river in the world?",
      options: ["Amazon River", "Mississippi River", "Nile River"],
      answer: "Nile River"
    },
    {
      q: "Which country has the most people?",
      options: ["India", "China", "United States"],
      answer: "India"
    },
    {
      q: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa"],
      answer: "Ottawa"
    },
    {
      q: "Which U.S. state has the most volcanoes?",
      options: ["California", "Hawaii", "Alaska"],
      answer: "Alaska"
    },
    {
      q: "What continent is the Sahara Desert located on?",
      options: ["Asia", "Africa", "South Africa"],
      answer: "Africa"
    },
    {
      q: "What ocean is on the East Coast of the U.S.?",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
      answer: "Atlantic Ocean"
    }
      ],
      random: [
      {
      q: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Go"],
      answer: "Au"
    },
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      q: "How many hearts does an octopus have?",
      options: ["1", "2", "3"],
      answer: "3"
    },
    {
      q: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe"],
      answer: "Blue Whale"
    },
    {
      q: "What is the main ingredient in guacamole?",
      options: ["Cucumber", "Avocado", "Zucchini"],
      answer: "Avocado"
    },
    {
      q: "What is the hardest natural substance on Earth?",
      options: ["Diamond", "Quartz", "Obsidian"],
      answer: "Diamond"
    },
    {
      q: "What is the freezing point of water in Fahrenheit?",
      options: ["100°F", "0°F", "32°F"],
      answer: "32°F"
    }];

    // Place your full quizzes here (copy-paste what you sent)
    // For brevity, I won't re-paste it here

    // Load the quiz on button click
    document.querySelectorAll("button[data-quiz]").forEach(button => {
      button.addEventListener("click", () => {
        const quizKey = button.dataset.quiz;
        const questions = quizzes[quizKey];
        const quizContainer = document.getElementById("quiz-container");

        if (!questions) {
          quizContainer.innerHTML = "<p>Quiz not found.</p>";
          return;
        }

        // Render quiz
        quizContainer.innerHTML = `<h2>${button.textContent} Quiz</h2>`;
        questions.forEach((item, index) => {
          const block = document.createElement("div");
          block.className = "question-block";

          block.innerHTML = `
            <p>Q${index + 1}: ${item.q}</p>
            ${item.options.map(opt =>
              `<button onclick="alert('${opt === item.answer ? 'Correct!' : 'Wrong!'}')">${opt}</button>`
            ).join("")}
          `;

          quizContainer.appendChild(block);
        });
      });
    });
  </script>

</body>
</html>
