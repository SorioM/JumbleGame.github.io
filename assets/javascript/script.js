// ----- AUTO CLEAR INPUT BOX ----- //

function clr() {
    document.getElementById("gtext").value = "";
    document.getElementById("gtext1").value = "";
    document.getElementById("gtext2").value = "";
}

// ----- ENTER KEYBOARD EVENT LISTENER ----- //

var fruitsinput = document.getElementById("gtext");
var animalsinput = document.getElementById("gtext1");
var gamesinput = document.getElementById("gtext2");

fruitsinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("enterbtn").click();
  }
});

animalsinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("enterbtn1").click();
    }
});

gamesinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("enterbtn2").click();
    }
});

// ----- FRUITS ----- //

const fruits = 
[
    {
        word:"grape",
        hint: "A small and round fruit. It can use for making wine."
        
    },
    {
        word:"banana",
        hint: "Favorite food of monkeys."
    },
    {
        word:"orange",
        hint: " it primarily refers to Citrus × sinensis."
    },
    {
        word:"lemon",
        hint: "Shaped like an oval with a bump on one end."
    },
    {
        word:"peach",
        hint: "It is a type of fruit which is botanically called drupe."
    },
]

const wordText = document.querySelector(".word"),
 hintText = document.querySelector(".hint span");
 inputField = document.querySelector("input");
skipBtn = document.querySelector(".skip-word");
enterBtn = document.querySelector(".enter-word");

let correctAnswer;

const game = () => {
    let randomObj = fruits[Math.floor(Math.random() * fruits.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length -1 ; i > 0 ; i--){
        let j = Math.floor(Math.random() * (i * 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }

    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctAnswer = randomObj.word.toLowerCase();
    console.log(randomObj);
}
game();

const inputWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert('Please enter your answer.');
    if(userWord !== correctAnswer) return alert('Your answer is incorrect.');
    alert("Wow! You're answer is correct!");
    game();
}

skipBtn.addEventListener("click", game);
enterBtn.addEventListener("click", inputWord);

// ----- ANIMALS ----- //

const animals = 
[
    {
        animalsWord:"monkey",
        animalsHint: "This mammal are really intelligent and have opposable thumbs, which makes them similar to humans."
        
    },
    {
        animalsWord:"elephant",
        animalsHint: "They are the largest land mammals on earth and have distinctly massive bodies, large ears, and long trunks."
    },
    {
        animalsWord:"turtle",
        animalsHint: "It is a reptile that has a shell covering its body. They are known for moving very slowly."
    },
    {
        animalsWord:"panda",
        animalsHint: "A black-and-white bear, has a body typical of bears. ."
    },
    {
        animalsWord:"crocodile",
        animalsHint: "It is a kind of reptile that has tough skin composed of many large plates and scales. ."
    },
]

const wordText1 = document.querySelector(".animals-word"),
 hintText1 = document.querySelector(".animals-hint span");
 inputField1 = document.querySelector("#gtext1");
skipBtn1 = document.querySelector(".skip-word1");
enterBtn1 = document.querySelector(".enter-word1");

let correctAnswer1;

const game1 = () => {
    let randomObj1 = animals[Math.floor(Math.random() * animals.length)];
    let wordArray1 = randomObj1.animalsWord.split("");
    for (let a = wordArray1.length -1 ; a > 0 ; a--){
        let b = Math.floor(Math.random() * (a * 1));
        [wordArray1[a], wordArray1[b]] = [wordArray1[b], wordArray1[a]]
    }

    wordText1.innerText = wordArray1.join("");
    hintText1.innerText = randomObj1.animalsHint;
    correctAnswer1 = randomObj1.animalsWord.toLowerCase();
    console.log(randomObj1);
}
game1();

const inputWord1 = () => {
    let userWord = inputField1.value.toLocaleLowerCase();
    if(!userWord) return alert('Please enter your answer.');
    if(userWord !== correctAnswer1) return alert('Your answer is incorrect.');
    alert("Wow! You're answer is correct!");
    game1();
}

skipBtn1.addEventListener("click", game1);
enterBtn1.addEventListener("click", inputWord1);


// ----- GAMES ----- //

const games = 
[
    {
        gamesWord:"Pokemon",
        gameshint: "A role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best."
        
    },
    {
        gamesWord:"Mobile Legend",
        gameshint: "A multiplayer online battle arena (MOBA) game designed for mobile phones. This game developed by Moonton "
    },
    {
        gamesWord:"Call of Duty",
        gameshint: "A free-to-play first-person shooter video game developed by TiMi Studio Group and published by Activision for Android and iOS."
    },
    {
        gamesWord:"Super mario",
        gameshint: "The main hero of the Mushroom Kingdom. He's a trusted friend of Princess Peach, and he and his brother Luigi are known across the land for their acts of bravery."
    },
    {
        gamesWord:"Among us",
        gameshint: "a multiplayer game where between four and 10 players are dropped onto an alien spaceship. Each player is designated a private role as a “crewmate” or “impostor.”"
    },
    {
        gamesWord:"mario",
        gamesHint: "He is the title character of the video game franchise of the same name and the mascot of Japanese video game company Nintendo."
        
    },
    {
        gamesWord:"sora",
        gamesHint: "He is the main protagonist and main playable character in most of the Kingdom Hearts series."
    },
    {
        gamesWord:"pokemon",
        gamesHint: "is a series of video games developed by Game Freak and published by Nintendo."
    },
    {
        gamesWord:"megaman",
        gamesHint: "He is known as Rockman in Japan, is a Japanese science fiction video game franchise created by Capcom."
    },
    {
        gamesWord:"klonoa",
        gamesHint: "It is a platform video game series created by Namco in 1997. It stars K _ _ N _ _ , an anthropomorphic creature who explores dream worlds."
    }
]

const wordText2 = document.querySelector(".games-word"),
 hintText2 = document.querySelector(".games-hint span");
 inputField2 = document.querySelector("#gtext2");
skipBtn2 = document.querySelector(".skip-word2");
enterBtn2 = document.querySelector(".enter-word2");

let correctAnswer2;

const game2 = () => {
    let randomObj2 = games[Math.floor(Math.random() * games.length)];
    let wordArray2 = randomObj2.gamesWord.split("");
    for (let c = wordArray2.length -1 ; c > 0 ; c--){
        let d = Math.floor(Math.random() * (c * 1));
        [wordArray2[c], wordArray2[d]] = [wordArray2[d], wordArray2[c]]
    }

    wordText2.innerText = wordArray2.join("");
    hintText2.innerText = randomObj2.gameshint;
    correctAnswer2 = randomObj2.gamesWord.toLowerCase();
    console.log(randomObj2);
}
game2();

const inputWord2 = () => {
    let userWord = inputField2.value.toLocaleLowerCase();
    if(!userWord) return alert('Please enter your answer.');
    if(userWord !== correctAnswer2) return alert('Your answer is incorrect.');
    alert("Wow! You're answer is correct!");
    game2();
}

skipBtn2.addEventListener("click", game2);
enterBtn2.addEventListener("click", inputWord2);
