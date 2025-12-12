// Переменные состояния
let p1Score = 0;
let p2Score = 0;
let p1Choice = "";
let p2Choice = "";
let currentPlayer = 1;

// Элементы DOM
const introScreen = document.getElementById("introScreen");
const gameScreen = document.getElementById("gameScreen");
const statusTitle = document.getElementById("statusTitle");
const instructionText = document.getElementById("instructionText");
const choiceButtons = document.getElementById("choiceButtons");
const nextPlayerArea = document.getElementById("nextPlayerArea");
const resultArea = document.getElementById("resultArea");
const resultMessage = document.getElementById("resultMessage");
const scoreDisplay = document.getElementById("scoreDisplay");

// Запуск игры
function startGame() {
    introScreen.classList.add("hidden");
    gameScreen.style.display = "block";
}

// Обработка выбора
function makeChoice(choice) {
    if (currentPlayer === 1) {
        p1Choice = choice;
        // Переход к экрану ожидания второго игрока
        statusTitle.innerText = "Игрок 1 сделал выбор";
        instructionText.innerText = "Передайте устройство Игроку 2";
        choiceButtons.classList.add("hidden");
        nextPlayerArea.classList.remove("hidden");
    } else {
        p2Choice = choice;
        calculateWinner();
    }
}

// Начало хода второго игрока
function startPlayerTwo() {
    currentPlayer = 2;
    statusTitle.innerText = "Ход Игрока 2";
    instructionText.innerText =
        "Выберите оружие (Игрок 1 не подсматривает!)";
    nextPlayerArea.classList.add("hidden");
    choiceButtons.classList.remove("hidden");
}

// Логика победы
function calculateWinner() {
    choiceButtons.classList.add("hidden");
    resultArea.classList.remove("hidden");
    statusTitle.innerText = "Результат раунда";
    instructionText.innerText = "";

    let winner = "";

    // Перевод для отображения
    const names = { rock: "Камень", scissors: "Ножницы", paper: "Бумага" };
    const p1Name = names[p1Choice];
    const p2Name = names[p2Choice];

    if (p1Choice === p2Choice) {
        winner = "draw";
        resultMessage.innerHTML = `Ничья!<br><span class="highlight">${p1Name}</span> vs <span class="highlight">${p2Name}</span>`;
    } else if (
        (p1Choice === "rock" && p2Choice === "scissors") ||
        (p1Choice === "scissors" && p2Choice === "paper") ||
        (p1Choice === "paper" && p2Choice === "rock")
    ) {
        winner = "p1";
        p1Score++;
        resultMessage.innerHTML = `Победил Игрок 1!<br><span class="highlight">${p1Name}</span> бьет <span class="highlight">${p2Name}</span>`;
    } else {
        winner = "p2";
        p2Score++;
        resultMessage.innerHTML = `Победил Игрок 2!<br><span class="highlight">${p2Name}</span> бьет <span class="highlight">${p1Name}</span>`;
    }

    updateScore();
}

// Обновление счета
function updateScore() {
    scoreDisplay.innerText = `${p1Score} : ${p2Score}`;
}

// Сброс для следующего раунда
function nextRound() {
    currentPlayer = 1;
    p1Choice = "";
    p2Choice = "";

    resultArea.classList.add("hidden");
    choiceButtons.classList.remove("hidden");

    statusTitle.innerText = "Ход Игрока 1";
    instructionText.innerText = "Выберите оружие, пока соперник не видит";
}