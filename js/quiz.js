// Données du Quiz
const quizData = [
    {
        question: "En quelle année la première PlayStation a-t-elle été lancée ?",
        answers: {
            a: "1994",
            b: "1996",
            c: "1998"
        },
        correct: "a"
    },
    {
        question: "Quel est le nom du personnage principal dans 'The Legend of Zelda' ?",
        answers: {
            a: "Zelda",
            b: "Link",
            c: "Ganondorf"
        },
        correct: "b"
    },
    {
        question: "Quel jeu se déroule dans la région de 'San Andreas' ?",
        answers: {
            a: "Grand Theft Auto",
            b: "Call of Duty",
            c: "Minecraft"
        },
        correct: "a"
    },
    {
        question: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
        answers: {
            a: "Minecraft",
            b: "Tetris",
            c: "Grand Theft Auto V"
        },
        correct: "a"
    },
    {
        question: "Quelle franchise de jeux comprend la série 'Black Ops' ?",
        answers: {
            a: "Battlefield",
            b: "Call of Duty",
            c: "Fortnite"
        },
        correct: "b"
    },
    {
        question: "Dans quel jeu vidéo trouve-t-on le personnage 'Pikachu' ?",
        answers: {
            a: "Digimon",
            b: "Pokémon",
            c: "Monster Hunter"
        },
        correct: "b"
    },
    {
        question: "Quel jeu inclut un mode 'Battle Royale' très populaire ?",
        answers: {
            a: "Fortnite",
            b: "Overwatch",
            c: "League of Legends"
        },
        correct: "a"
    },
    {
        question: "Qui est le développeur du jeu 'Super Mario Bros.' ?",
        answers: {
            a: "Nintendo",
            b: "Sega",
            c: "Sony"
        },
        correct: "a"
    },
    {
        question: "Dans 'Pac-Man', quel est l'objectif principal du joueur ?",
        answers: {
            a: "Manger toutes les pastilles",
            b: "Éviter les fantômes",
            c: "Les deux"
        },
        correct: "c"
    },
    {
        question: "Quelle console a introduit le jeu 'Halo' ?",
        answers: {
            a: "PlayStation 2",
            b: "Xbox",
            c: "GameCube"
        },
        correct: "b"
    },
    {
        question: "Quel jeu se déroule dans une ville appelée 'Rapture' ?",
        answers: {
            a: "BioShock",
            b: "Fallout",
            c: "Far Cry"
        },
        correct: "a"
    },
    {
        question: "Dans quel jeu contrôle-t-on un chasseur de primes nommé Samus Aran ?",
        answers: {
            a: "Metroid",
            b: "Star Fox",
            c: "Mass Effect"
        },
        correct: "a"
    },
    {
        question: "Quel jeu vidéo met en scène des blocs tombants que le joueur doit aligner ?",
        answers: {
            a: "Tetris",
            b: "Minecraft",
            c: "Candy Crush"
        },
        correct: "a"
    },
    {
        question: "Dans 'The Elder Scrolls V: Skyrim', quel dragon apprend au joueur le 'Thu'um' ?",
        answers: {
            a: "Alduin",
            b: "Paarthurnax",
            c: "Odahviing"
        },
        correct: "b"
    },
    {
        question: "Dans 'Portal', quel est le nom de l'IA antagoniste ?",
        answers: {
            a: "Cortana",
            b: "GLaDOS",
            c: "SHODAN"
        },
        correct: "b"
    }
];


// Références
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Générer le Quiz
function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (const letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
             <div class="answers">${answers.join("")}</div>`
        );
    });

    quizContainer.innerHTML = output.join("");
}

// Afficher les Résultats
function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let score = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            score++;
            answerContainer.style.color = "green";
        } else {
            answerContainer.style.color = "red";
        }
    });

    resultsContainer.innerHTML = `Votre score est ${score} sur ${quizData.length}`;
}

// Écouteurs d'événements
buildQuiz();
submitButton.addEventListener("click", showResults);
