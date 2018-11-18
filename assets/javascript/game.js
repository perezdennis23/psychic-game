
		
		 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var guessLeft = 9;
		 var guessChoices = [];

		 document.onkeyup = function(event) {

            var playerStats = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of:</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessLeft + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = playerStats;


		 	var playerGuess = event.key;

             var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
             console.log(computerGuess);

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(playerGuess) > -1) {

				if (playerGuess === computerGuess) {
					wins++;
					guessLeft = 9;
					guessChoices = [];
				}

				if (playerGuess != computerGuess) {
					guessLeft --;
					guessChoices.push(playerGuess);
				}

				if (guessLeft === 0) {

				guessLeft = 9;
				losses ++;
                guessChoices = [];
                }
        }
    };
