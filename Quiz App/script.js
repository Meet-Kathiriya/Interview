let quizData = [
    { q: "What is the capital of INDIA?", opts: ["Gandhinagar", "Delhi", "Mumbai", "Surat"], ans: "Delhi" },
    { q: "Which planet is known as the Red Planet?", opts: ["Mars", "Saturn", "Jupitar", "Earth"], ans: "Mars" },
    { q: "Who wrote 'Gitanjali'?", opts: ["Rabindranath Tagore", "Arundhati Roy", "Vikram Seth ", "Amitav Ghosh"], ans: "Rabindranath Tagore" },
    { q: "Which is the larget Animal?", opts: ["Shark", "Elephant", "Lion", "Blue Whale"], ans: "Blue Whale" },
    { q: "What is 24 + 5?", opts: ["29", "27", "31", "25"], ans: "29" },
    { q: "Which language run in Web browser?", opts: ["Java", "Javascript", "C++", "C"], ans: "Javascript" },
    { q: "Who was the first woman Prime Minister of India?", opts: ["Indira Gandhi", "Pratibha Patil", "Draupadi Murmuu", "Sonia Gandhi"], ans: "Indira Gandhi" }
];

let current = 0;
let score = 0;
let qEl = document.getElementById("question");
let optEl = document.getElementById("options");
let nextBtn = document.getElementById("nextBtn");
let quizEl = document.getElementById("quiz");

function loadQuestion() {
    let q = quizData[current];
    qEl.textContent = q.q;
    optEl.innerHTML = "";
    nextBtn.disabled = true;

    q.opts.forEach(opt => {
        let btn = document.createElement("div");
        btn.textContent = opt;
        btn.className = "option";
        btn.onclick = () => select(btn, q.ans);
        optEl.appendChild(btn);
    });
}

function select(chosen, correct) {
    let opts = optEl.querySelectorAll(".option");
    opts.forEach(o => {
        o.style.pointerEvents = "none";
        if (o.textContent === correct) o.classList.add("correct");
    });
    if (chosen.textContent !== correct) chosen.classList.add("wrong");
    else score++;
    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    current++;
    if (current < quizData.length) loadQuestion();
    else {
        quizEl.innerHTML = `
        <div class="result">
          <h2>Quiz Finished!</h2>
          <p>Your score: ${score} / ${quizData.length}</p>
            </div>`;
    }
};

loadQuestion();