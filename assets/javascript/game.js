"use strict";

function game() {

    let add = 0;
    let loss = 0;
    let guess = 12;
    let str = " ";
    let guessed = " ";
    let arrayOne = []
    let message = " ";


    window.addEventListener("keydown", function (event) {
        const lettersPicked = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        const words = lettersPicked.length;
        const randomWordGuessed = lettersPicked[Math.floor(Math.random() * words)];
        let text = " ";
        let guessedWord;
        str = event.key;
        let winCount = function () {
            add++;
            return add;
        };

        let lossCount = function () {
            loss++;
            return loss;
        };

        let guessesLeft = function () {
            guess--;
            return guess;
        };

        function insert() {
            arrayOne.push(str);
            message = document.getElementById("guessed");
            message.innerHTML = " ";
            message.innerHTML += arrayOne.join(",");
        };

        if (str === randomWordGuessed) {
            console.log(add);
            guess = 13;
            document.getElementById("wins").innerHTML = winCount();
            arrayOne = [];
            message.innerHTML = "";
            document.getElementById("left").innerHTML = 12;
        }

        if (str !== randomWordGuessed && guess > 0) {
            document.getElementById("left").innerHTML = guessesLeft();
            insert();
        }

        if (guess === 0) {
            document.getElementById("losses").innerHTML = lossCount();
            message.innerHTML = "";
            arrayOne = [];
            guess = 13;
            document.getElementById("left").innerHTML = 12;
        }


    }, true);


    if (guess === 0) {
        game();
    }
};

game();