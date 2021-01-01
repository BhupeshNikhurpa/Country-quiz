const question = document.querySelector(".question b");
const optionOne = document.querySelector(".option-1 p");
const optionTwo = document.querySelector(".option-2 p");
const optionThree = document.querySelector(".option-3 p");
const optionFour = document.querySelector(".option-4 p");
const choosen_option = document.querySelectorAll(".option");
const score = document.querySelector(".score");
const result = document.querySelector(".result");
const total = document.querySelector(".count");

let points = 0;
let count = 1;

function hover () {
    let flag = 0;
    choosen_option.forEach((element, index) => {

        element.classList.add("hover");

        element.addEventListener('click', () => {
            if(index === correct) {
                element.classList.add("correct");
                element.classList.remove("hover");
                console.log("correct");
                if(flag === 0) {
                    points++;
                    flag = 1;
                }
            }
            else {
                if(flag === 0) {
                    flag = 1;
                }
                element.classList.add("incorrect");
                console.log("incorrect");
                element.classList.remove("hover");
            }
        })
    })

    choosen_option.forEach(element => {
        element.classList.remove("correct");
        element.classList.remove("incorrect");
    })
}
hover();


function random_num (num) {
    return Math.floor(Math.random() * num);
}

let random = random_num(250);
let random1 = random_num(250);
let random2 = random_num(250);
let random3 = random_num(250);
let random4 = random_num(250);
let correct = random_num(4);
console.log(correct); //[0,3]




async function getData () {
    const url = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(url);
    const data = await response.json(); // 250 

    let country = data[random].name;
    let capital = data[random].capital;

    let options = [data[random1].capital, data[random2].capital, data[random3].capital, data[random4].capital];

    options[correct] = capital;

 
    question.textContent = country;
    optionOne.textContent = options[0];
    optionTwo.textContent = options[1];
    optionThree.textContent = options[2];
    optionFour.textContent = options[3];

    return capital;
}

getData();

function next_step() {
    
        random = random_num(250);
        random1 = random_num(250);
        random2 = random_num(250);
        random3 = random_num(250);
        random4 = random_num(250);
        correct = random_num(4);
        hover();
        getData();
        count++;
    
}

function show_result() {
    score.textContent = points;
    total.textContent = count;
    result.classList.add("show");
}

function playAgain() {
    points = 0;
    count = 1;
    hover();
    getData();
    result.classList.remove("show");
}