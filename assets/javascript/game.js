var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var numGuesses = 10;
		 var guessChoices = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 10;
					guessChoices = [];
				}

				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}

				if (numGuesses === 0) {

				numGuesses = 10;
				losses ++;
				guessChoices = [];

				
			}
			
			var html  = 
			"<h1> The Guessing Game </h1>" +
			"<p><strong>10 tries to guess the same letter as me!</strong></p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Number of guesses left: " + numGuesses + "</p>" +
			"<p>Letters you've guessed wrong: " + guessChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;
			

			
			}
		};