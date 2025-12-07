let playerScore = 0;
      let computerScore = 0;

      function getComputerChoice() {
        const choices = ["камень", "ножницы", "бумага"];
        return choices[Math.floor(Math.random() * 3)];
      }

      function play(playerChoice) {
        const computerChoice = getComputerChoice();

        document.getElementById("you").innerHTML =
          "Выбор игрока: <span class='highlight'>" + playerChoice + "</span>";
        document.getElementById("cpu").innerHTML =
          "Выбор компьютера: <span class='highlight'>" +
          computerChoice +
          "</span>";

        let result = "";

        if (playerChoice === computerChoice) {
          result = "Ничья!";
        } else if (
          (playerChoice === "камень" && computerChoice === "ножницы") ||
          (playerChoice === "ножницы" && computerChoice === "бумага") ||
          (playerChoice === "бумага" && computerChoice === "камень")
        ) {
          result = "Вы выиграли!";
          playerScore++;
        } else {
          result = "Вы проиграли!";
          computerScore++;
        }

        document.getElementById("result").innerHTML = result;
        document.getElementById(
          "score"
        ).innerHTML = `Счёт: ${playerScore} : ${computerScore}`;
      }