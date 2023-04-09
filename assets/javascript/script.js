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

//Animals Script
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
