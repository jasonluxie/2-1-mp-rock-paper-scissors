let gameStatus = 0;
let winVar = 0;
let loseVar = 0;
let tieVar = 0;

do {
    let userVar = prompt(
        "Would you like to play Rock(R), Paper(P), or Scissors(S)? Please type R for rock, P for paper, and S for scissors"
    );

    let compHand = ["R", "P", "S"];

    function randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let compVar = compHand[randomInt(3)];
    alert("Computer chose " + compVar);
    const OPTIONVAR = {
        R: { win: "S", lose: "P" },
        S: { win: "P", lose: "R" },
        P: { win: "R", lose: "S" },
    };

    if (OPTIONVAR[userVar].win == compVar) {
        winVar++;
        alert(
            "You win! " +
                "Your wins: " +
                winVar +
                ", your losses: " +
                loseVar +
                ", ties: " +
                tieVar
        );
    } else if (OPTIONVAR[userVar].lose == compVar) {
        loseVar++;
        alert(
            "You lose! " +
                "Your wins: " +
                winVar +
                ", your losses: " +
                loseVar +
                ", ties: " +
                tieVar
        );
    } else {
        tieVar++;
        alert(
            "You tied! " +
                "Your wins: " +
                winVar +
                ", your losses: " +
                loseVar +
                ", ties: " +
                tieVar
        );
    }

    if (!window.confirm("Press Ok to play again")) {
        gameStatus = gameStatus + 1;
    }
} while (gameStatus < 1);

//Exit message
if (gameStatus == 1) {
    alert("Thanks for playing!");
}
