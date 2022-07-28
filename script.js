const handOptions = {
  rock: 'assets/rock.svg',
  paper: 'assets/paper.svg',
  scissors: 'assets/scissors.svg',
};

let SCORE = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector('.Hand');
  hands.style.display = 'none';

  let contest = document.querySelector('.contest');
  contest.style.display = 'flex';

  // set user Image
  document.getElementById('userChoiceimage').src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ['rock', 'paper', 'scissors'];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  // set computer image
  document.getElementById('computerPickImage').src = handOptions[cpHand];

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  let userrockbackcolor = document.querySelector('.gameuserrock');
  let userpaperbackcolor = document.querySelector('.gameuserrock');
  let userscissorsbackcolor = document.querySelector('.gameuserrock');
  let comprockbackcolor = document.querySelector('.gamecomprock');
  let comppaperbackcolor = document.querySelector('.gamecomprock');
  let compscissorsbackcolor = document.querySelector('.gamecomprock');

  if (userHand == 'paper' && cpHand == 'scissors') {
    userpaperbackcolor.style.backgroundColor = 'rgb(25, 0, 255)';
    compscissorsbackcolor.style.backgroundColor = 'rgb(255, 217, 0)';
    setDecision('YOU LOSE!');
  }
  if (userHand == 'paper' && cpHand == 'rock') {
    userpaperbackcolor.style.backgroundColor = 'rgb(25, 0, 255)';
    comprockbackcolor.style.backgroundColor = 'rgb(255, 0, 0)';
    setDecision('YOU WIN!');
    setScore(SCORE + 1);
  }
  if (userHand == 'paper' && cpHand == 'paper') {
    userpaperbackcolor.style.backgroundColor = 'rgb(25, 0, 255)';
    comppaperbackcolor.style.backgroundColor = 'rgb(25, 0, 255)';
    setDecision("It's a tie!");
  }
  if (userHand == 'rock' && cpHand == 'scissors') {
    userrockbackcolor.style.backgroundColor = 'rgb(255, 0, 0)';
    compscissorsbackcolor.style.backgroundColor = 'rgb(255, 217, 0)';
    setDecision('YOU WIN!');
    setScore(SCORE + 1);
  }
  if (userHand == 'rock' && cpHand == 'paper') {
    userrockbackcolor.style.backgroundColor = 'rgb(255, 0, 0)';
    comppaperbackcolor.style.backgroundColor = 'rgb(25, 0, 255)';
    setDecision('YOU LOSE!');
  }
  if (userHand == 'rock' && cpHand == 'rock') {
    userrockbackcolor.style.backgroundColor = 'rgb(255, 0, 0)';
    comprockbackcolor.style.backgroundColor = 'rgb(255, 0, 0)';
    setDecision("It's a tie!");
  }
  if (userHand == 'scissors' && cpHand == 'scissors') {
    userscissorsbackcolor.style.backgroundColor = 'rgb(255, 217, 0)';
    compscissorsbackcolor.style.backgroundColor = 'rgb(255, 217, 0)';
    setDecision("It's a tie!");
  }
  if (userHand == 'scissors' && cpHand == 'rock') {
    userscissorsbackcolor.style.backgroundColor = 'rgb(255, 217, 0)';
    comprockbackcolor.style.backgroundColor = 'rgb(255, 0, 0)';
    setDecision('YOU LOSE!');
  }
  if (userHand == 'scissors' && cpHand == 'paper') {
    userscissorsbackcolor.style.backgroundColor = 'rgb(255, 217, 0)';
    comppaperbackcolor.style.backgroundColor = 'rgb(25, 0, 255)';
    setDecision('YOU WIN!');
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector('.contest');
  contest.style.display = 'none';

  let hands = document.querySelector('.Hand');
  hands.style.display = 'flex';
};

const setDecision = (decision) => {
  document.querySelector('.decision h1').innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector('.score h1').innerText = newScore;
};
