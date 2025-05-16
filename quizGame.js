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
   }
 ]
};


document.addEventListener("DOMContentLoaded", () => {
 const quizContainer = document.getElementById("quiz-container");


 document.querySelectorAll("button[data-quiz]").forEach(button => {
   button.addEventListener("click", () => {
     const quizKey = button.dataset.quiz;
     const questions = quizzes[quizKey];


     if (!questions) {
       quizContainer.innerHTML = "<p>Quiz not found.</p>";
       return;
     }


     // Clear previous quiz
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
});