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
    if(userWord !== correctAnswer) return alert('The Words that you entered is not correct.');
    alert("Wow! You're answer is correct!");
    game();
}

skipBtn.addEventListener("click", game);
enterBtn.addEventListener("click", inputWord);