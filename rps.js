const gameInfo =
{
    playerScore: 0,
    computerScore: 0,
};

const computerChoice = () =>{
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNUmber = Math.floor(Math.random() * 3)

    return choices[randomNUmber];
};


let score;
const conditionals = (playerChoice, computerChoices) => {

    if (playerChoice == computerChoices)
    {
        score = 0;
    }
    else if (playerChoice == 'Rock' && computerChoices == 'Scissors')
    {
        score = 1;
    }
    else if (playerChoice == 'Paper' && computerChoices == 'Rock')
    {
        score = 1;
    }
    else if (playerChoice == 'Scissors' && computerChoices == 'Paper')
    {
        score = 1;
    }
    else
    {
        score = -1;
    }

    return score;

}


const roundUp = (score, playerScore, computerScore) => {
    let gameResult = document.getElementById('gameResult');
    let gameHand = document.getElementById('gameHand');
    let gameScore = document.getElementById('gameScore');


    if (score == -1)
    {
        gameResult.innerText = 'You Lose';
    }
    else if (score == 0)
    {
        gameResult.innerText = "it's a Tie";
    }
    else
    {
        gameResult.innerText = "You Won";
    }

   /*  const {playeScore: Pscore, computerScore: Cscore} = gameHand.innerText;
    const hand = gameHand.innerText;
    console.log(gameHand.innerText); */

    gameHand.innerText = `${playerScore} vs ${computerScore}`;
    gameScore.innerText = `${gameInfo['playerScore']} : ${gameInfo['computerScore']}`
}


const onClickRPS = (playerChoice) => {
   /*  console.log({playerChoice});
 */
    const computerChoices = computerChoice ();
/*     console.log({computerChoices}); */

    const conditional = conditionals (playerChoice, computerChoices);
    gameInfo['playerScore'] += conditional;
    /* console.log({conditional});
    console.log({gameInfo}); */

    roundUp(conditional, playerChoice, computerChoices)
}

const playerChoice = () => {
    let buttons = document.querySelectorAll('.rpsButton');

   buttons.forEach(btn => {
    btn.onclick = () => onClickRPS(btn.value)
   });

  const clear = document.getElementById('clearGame')
  clear.onclick = () => clearGame (gameInfo)
}

playerChoice ()




const clearGame = (gameInfo) => {
    gameInfo.playerScore = 0;
    gameInfo.computerScore = 0;


    let gameResult = document.getElementById('gameResult');
    let gameHand = document.getElementById('gameHand');
    let gameScore = document.getElementById('gameScore');

    gameScore.innerText = '';
    gameHand.innerText = "";
    gameResult.innerText = '';
}