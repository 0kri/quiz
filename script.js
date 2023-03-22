let question = document.querySelector(".question")
let answer1 = document.querySelector("#answer-1")
let answer2 = document.querySelector("#answer-2")
let answer3 = document.querySelector("#answer-3")
let answer4 = document.querySelector("#answer-4")
let count = document.querySelector("#count")
let btn = document.querySelector("#btn")
let index = 0
let countIndex = 1
let totalPoints = 100
let loadingPart1 = document.querySelector(".loading-part1")
let loadingPart2 = document.querySelector(".loading-part2")
let loadingPart3 = document.querySelector(".loading-part3")
let loadingPart4 = document.querySelector(".loading-part4")
let loadingPart5 = document.querySelector(".loading-part5")
let loading = [loadingPart1, loadingPart2, loadingPart3, loadingPart4, loadingPart5]
//

let questions = [
    {
        question: "What was the first sport to be televised in the US?",
        correct_answer: "Baseball",
        choices: ["Basketball", "Football", "Baseball", "tennis"]
    },
    {
        question: "While in play how many players are on a water polo team?",
        correct_answer:  7,
        choices: [5, 7, 11, 9]
    },
    {
        question: "What sport would you be playing if the score was deuce?",
        correct_answer:  "Tennis",
        choices: ["Tennis", "Rugby", "Curling", "Ice Hockey"]
    },
    {
        question: "How many pieces of bun are in a Mcdonald's Big Mac?",
        correct_answer: 3,
        choices: [1, 2, 3, 4]
    },
    {
        question: "If you want to raise Thor's hammer what must you be?",
        correct_answer:  "Worthy",
        choices: ["Almighty", "Worthy", "Brave", "Strong"]
    }
]

question.innerHTML = questions[index].question
answer1.innerHTML = questions[index].choices[0]
answer2.innerHTML = questions[index].choices[1]
answer3.innerHTML = questions[index].choices[2]
answer4.innerHTML = questions[index].choices[3]
count.innerHTML = `Question ${countIndex} / 5`
loadingPart1.style.opacity = "1"

//

function next(){
    index++
    countIndex++
    question.innerHTML = questions[index].question
    answer1.innerHTML = questions[index].choices[0]
    answer2.innerHTML = questions[index].choices[1]
    answer3.innerHTML = questions[index].choices[2]
    answer4.innerHTML = questions[index].choices[3]
    count.innerHTML = `Question ${countIndex} / 5`
    loading[index].style.opacity = "1"
}

