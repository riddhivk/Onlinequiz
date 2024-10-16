// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// // Firebase Configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyChIMIOr2cS1e0ziz8rFjo1KF3LiK5wErU",
//     authDomain: "online-quiz-application-2d98e.firebaseapp.com",
//     projectId: "online-quiz-application-2d98e",
//     storageBucket: "online-quiz-application-2d98e.appspot.com",
//     messagingSenderId: "906645334685",
//     appId: "1:906645334685:web:733136451acbf7e17b8274",
//     measurementId: "G-ZR4VY0RLX8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(); // Initialize Firebase Authentication

// // UI Elements
// const quizElement = document.getElementById('quiz');
// const questionElement = document.getElementById('question');
// const choicesElement = document.getElementById('choices');
// const submitButton = document.getElementById('submit');
// const resultsElement = document.getElementById('results');
// const scoreElement = document.getElementById('score');
// const logoutButton = document.getElementById('logout');

// // Quiz Logic Variables
// let questions = [];
// let currentQuestion = 0;
// let score = 0; // Initialize score to 0

// // Helper function to shuffle an array (Fisher-Yates Shuffle)
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Fetch and shuffle quiz questions
// async function fetchQuestions() {
//     try {
//         const querySnapshot = await getDocs(collection(db, "questions"));

//         if (querySnapshot.empty) {
//             console.error("No questions found in Firestore.");
//             questionElement.textContent = "No questions found.";
//             return;
//         }

//         questions = querySnapshot.docs.map(doc => doc.data());
//         console.log("Questions fetched:", questions);

//         // Shuffle the questions array
//         questions = shuffleArray(questions);

//         showQuestion(); // Show the first shuffled question
//     } catch (error) {
//         console.error("Error fetching questions:", error);
//         questionElement.textContent = "Error loading questions.";
//     }
// }

// // Show the Current Question
// function showQuestion() {
//     const question = questions[currentQuestion];
//     questionElement.textContent = question.question;
//     choicesElement.innerHTML = '';

//     Object.keys(question.choices).forEach((key, index) => {
//         const button = document.createElement('button');
//         button.textContent = question.choices[key];
//         button.classList.add('choice');
//         button.addEventListener('click', () => handleChoiceSelection(button, index));
//         choicesElement.appendChild(button);
//     });

//     submitButton.style.display = 'block';
// }

// // Handle choice selection and apply red/green color logic
// function handleChoiceSelection(selectedButton, selectedIndex) {
//     const correctAnswer = questions[currentQuestion].correctAnswer;

//     // Check if the selected answer is correct
//     if (selectedIndex === correctAnswer) {
//         selectedButton.classList.add('correct'); // Turn green
//         score++; // Increment the score
//     } else {
//         selectedButton.classList.add('wrong'); // Turn red
//         // Highlight the correct answer as well
//         const correctButton = choicesElement.children[correctAnswer];
//         correctButton.classList.add('correct');
//     }

//     // Disable all buttons after selecting one
//     Array.from(choicesElement.children).forEach(button => button.disabled = true);

//     // Move to the next question after a short delay
//     setTimeout(() => {
//         currentQuestion++;
//         if (currentQuestion < questions.length) {
//             showQuestion();
//         } else {
//             showResults();
//             const userID = auth.currentUser.uid; // Get current user ID
//             saveScore(userID, score, questions.length); // Save score with userID
//         }
//     }, 1000);
// }

// // Display the Quiz Results
// function showResults() {
//     quizElement.style.display = 'none';
//     resultsElement.style.display = 'block';
//     scoreElement.textContent = `${score} out of ${questions.length}`;
// }

// // Save the User's Score to Firestore
// async function saveScore(userID, score, totalQuestions) {
//     try {
//         await addDoc(collection(db, "scores"), {
//             userID: userID,
//             score: score,
//             totalQuestions: totalQuestions,
//             timestamp: serverTimestamp()
//         });
//         console.log("Score saved successfully!");
//     } catch (error) {
//         console.error("Error saving score:", error);
//     }
// }

// // Logout Functionality
// logoutButton.addEventListener('click', () => {
//     signOut(auth).then(() => {
//         alert("Logged out successfully");
//         window.location.href = "login.html"; // Redirect to login
//     }).catch((error) => {
//         console.error("Logout error:", error);
//     });
// });

// // Ensure User is Logged In
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("User is logged in:", user.uid);
//         fetchQuestions(); // Fetch and shuffle quiz questions
//         document.getElementById('logout').style.display = 'block'; // Show logout button
//     } else {
//         window.location.href = "login.html"; // Redirect to login if not logged in
//     }
// });

// // Submit Answer Event Listener
// submitButton.addEventListener('click', submitAnswer);

// // Initial fetch of questions when the page loads
// fetchQuestions();





// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// // Firebase Configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyChIMIOr2cS1e0ziz8rFjo1KF3LiK5wErU",
//     authDomain: "online-quiz-application-2d98e.firebaseapp.com",
//     projectId: "online-quiz-application-2d98e",
//     storageBucket: "online-quiz-application-2d98e.appspot.com",
//     messagingSenderId: "906645334685",
//     appId: "1:906645334685:web:733136451acbf7e17b8274",
//     measurementId: "G-ZR4VY0RLX8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(); // Initialize Firebase Authentication

// // UI Elements
// const quizElement = document.getElementById('quiz');
// const questionElement = document.getElementById('question');
// const choicesElement = document.getElementById('choices');
// const submitButton = document.getElementById('submit');
// const resultsElement = document.getElementById('results');
// const scoreElement = document.getElementById('score');
// const logoutButton = document.getElementById('logout');

// // Quiz Logic Variables
// let questions = [];
// let currentQuestion = 0;
// let score = 0; // Initialize score to 0

// // Helper function to shuffle an array (Fisher-Yates Shuffle)
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Fetch and shuffle quiz questions
// async function fetchQuestions() {
//     try {
//         const querySnapshot = await getDocs(collection(db, "questions"));

//         if (querySnapshot.empty) {
//             console.error("No questions found in Firestore.");
//             questionElement.textContent = "No questions found.";
//             return;
//         }

//         questions = querySnapshot.docs.map(doc => doc.data());
//         console.log("Questions fetched:", questions);

//         // Shuffle the questions array
//         questions = shuffleArray(questions);

//         showQuestion(); // Show the first shuffled question
//     } catch (error) {
//         console.error("Error fetching questions:", error);
//         questionElement.textContent = "Error loading questions.";
//     }
// }

// // Show the Current Question
// function showQuestion() {
//     const question = questions[currentQuestion];
//     questionElement.textContent = question.question;
//     choicesElement.innerHTML = '';

//     Object.keys(question.choices).forEach((key, index) => {
//         const button = document.createElement('button');
//         button.textContent = question.choices[key];
//         button.classList.add('choice');
//         button.addEventListener('click', () => selectChoice(index));
//         choicesElement.appendChild(button);
//     });

//     submitButton.style.display = 'block';
// }

// // Highlight the Selected Choice
// function selectChoice(index) {
//     const choices = choicesElement.getElementsByClassName('choice');
//     for (let i = 0; i < choices.length; i++) {
//         choices[i].classList.remove('selected');
//     }
//     choices[index].classList.add('selected');
// }

// // Handle Submission of the Selected Answer
// function submitAnswer() {
//     const selectedChoice = choicesElement.querySelector('.choice.selected');
//     if (!selectedChoice) {
//         alert("Please select an option!");
//         return;
//     }

//     const answer = Array.from(choicesElement.children).indexOf(selectedChoice); // 0-based index
//     if (answer === questions[currentQuestion].correctAnswer) {
//         score++;
//     }

//     currentQuestion++;

//     if (currentQuestion < questions.length) {
//         showQuestion();
//     } else {
//         showResults();
//         const userID = auth.currentUser.uid; // Get current user ID
//         saveScore(userID, score, questions.length); // Save score with userID
//     }
// }

// // Display the Quiz Results
// function showResults() {
//     quizElement.style.display = 'none';
//     resultsElement.style.display = 'block';
//     scoreElement.textContent = `${score} out of ${questions.length}`;
// }

// // Save the User's Score to Firestore
// async function saveScore(userID, score, totalQuestions) {
//     try {
//         await addDoc(collection(db, "scores"), {
//             userID: userID,
//             score: score,
//             totalQuestions: totalQuestions,
//             timestamp: serverTimestamp()
//         });
//         console.log("Score saved successfully!");
//     } catch (error) {
//         console.error("Error saving score:", error);
//     }
// }

// // Logout Functionality
// logoutButton.addEventListener('click', () => {
//     signOut(auth).then(() => {
//         alert("Logged out successfully");
//         window.location.href = "login.html"; // Redirect to login
//     }).catch((error) => {
//         console.error("Logout error:", error);
//     });
// });

// // Ensure User is Logged In
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("User is logged in:", user.uid);
//         fetchQuestions(); // Fetch and shuffle quiz questions
//         document.getElementById('logout').style.display = 'block'; // Show logout button
//     } else {
//         window.location.href = "login.html"; // Redirect to login if not logged in
//     }
// });

// // Submit Answer Event Listener
// submitButton.addEventListener('click', submitAnswer);

// // Initial fetch of questions when the page loads
// fetchQuestions();


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyChIMIOr2cS1e0ziz8rFjo1KF3LiK5wErU",
    authDomain: "online-quiz-application-2d98e.firebaseapp.com",
    projectId: "online-quiz-application-2d98e",
    storageBucket: "online-quiz-application-2d98e.appspot.com",
    messagingSenderId: "906645334685",
    appId: "1:906645334685:web:733136451acbf7e17b8274",
    measurementId: "G-ZR4VY0RLX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(); // Initialize Firebase Authentication

// UI Elements
const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const logoutButton = document.getElementById('logout');

// Quiz Logic Variables
let questions = [];
let currentQuestion = 0;
let score = 0; // Initialize score to 0

// Helper function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fetch and shuffle quiz questions
async function fetchQuestions() {
    try {
        const querySnapshot = await getDocs(collection(db, "questions"));

        if (querySnapshot.empty) {
            console.error("No questions found in Firestore.");
            questionElement.textContent = "No questions found.";
            return;
        }

        questions = querySnapshot.docs.map(doc => doc.data());
        console.log("Questions fetched:", questions);

        // Shuffle the questions array
        questions = shuffleArray(questions);

        showQuestion(); // Show the first shuffled question
    } catch (error) {
        console.error("Error fetching questions:", error);
        questionElement.textContent = "Error loading questions.";
    }
}

// Update the progress bar based on the current question
function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Show the Current Question
function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = '';

    Object.keys(question.choices).forEach((key, index) => {
        const button = document.createElement('button');
        button.textContent = question.choices[key];
        button.classList.add('choice');
        button.addEventListener('click', () => handleChoiceSelection(button, index));
        choicesElement.appendChild(button);
    });

    submitButton.style.display = 'block';
    updateProgressBar(); // Update the progress bar
}

// Handle choice selection and apply red/green color logic
function handleChoiceSelection(selectedButton, selectedIndex) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    // Check if the selected answer is correct
    if (selectedIndex === correctAnswer) {
        selectedButton.classList.add('correct'); // Turn green
        score++; // Increment the score
    } else {
        selectedButton.classList.add('wrong'); // Turn red
        const correctButton = choicesElement.children[correctAnswer];
        correctButton.classList.add('correct');
    }

    // Disable all buttons after selecting one
    Array.from(choicesElement.children).forEach(button => button.disabled = true);

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
            const userID = auth.currentUser.uid; // Get current user ID
            saveScore(userID, score, questions.length); // Save score with userID
        }
    }, 1000);
}

// Display the Quiz Results
function showResults() {
    quizElement.style.display = 'none';
    resultsElement.style.display = 'block';
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

// Save the User's Score to Firestore
async function saveScore(userID, score, totalQuestions) {
    try {
        await addDoc(collection(db, "scores"), {
            userID: userID,
            score: score,
            totalQuestions: totalQuestions,
            timestamp: serverTimestamp()
        });
        console.log("Score saved successfully!");
    } catch (error) {
        console.error("Error saving score:", error);
    }
}

// Logout Functionality
logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert("Logged out successfully");
        window.location.href = "login.html"; // Redirect to login
    }).catch((error) => {
        console.error("Logout error:", error);
    });
});

// Ensure User is Logged In
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user.uid);
        fetchQuestions(); // Fetch and shuffle quiz questions
        document.getElementById('logout').style.display = 'block'; // Show logout button
    } else {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
});

// Initial fetch of questions when the page loads
fetchQuestions();
