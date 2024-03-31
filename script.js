'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '😎 Correct Number!';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 55;

*/
const secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;




document.querySelector('.check').addEventListener('click', function(){

	const guess = Number(document.querySelector('.guess').value);

	console.log(guess, typeof guess);

	// When there is no input
	if(!guess){

		document.querySelector('.message').textContent = '💢 No number!'

	  // WHEN A PLAYER WINS
	} else if (guess === secretNumber) {

		document.querySelector('.message').textContent = '😎 Correct Number!';
		document.querySelector('.number').textContent = secretNumber;

		document.querySelector('body').style.backgroundColor = '#60b347';

		document.querySelector('.number').style.width = '30rem';

		if(score > highscore){

			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

	};
	// 	//When guess goes wrong
	// } else if (guess != secretNumber){



	// 	if(score > 1){

	// 	// When the guess is too high
	// 	document.querySelector('.message').textContent = guess > secretNumber ?'Too high ❓' : 'Too low';
	// 	score--;

	// 	document.querySelector('.score').textContent = score;

	// 	}else {

	// 		document.querySelector('.message').textContent = '💥 You lost the game';
	// 	}

	// } 	else if (guess > secretNumber){
		

	
	// 	// When the guess is too low
	// } else if (guess < secretNumber){
	// 	if (score > 1)
	// 	document.querySelector('.message').textContent = 'Too low ❌';
	// 	score--;
	// 	document.querySelector('.score').textContent = score;

	// }

});




