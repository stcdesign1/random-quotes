import quotes from "./data.js";

const container = document.querySelector('.container');
const quoteBox = document.querySelector('#quote-box');
const text = document.querySelector('#text');
const button = document.querySelector('#new-quote');
const author = document.querySelector('#author__text h3');
const profession = document.querySelector('#author__text p');
const image = document.querySelector('.author__image');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const fbIcon = document.querySelector('.fab');

let lastNum;

function getRandomInt() {
    let randInt = Math.floor(Math.random() * 23 + 1);
    if (lastNum === randInt) {
        return getRandomInt();
    }
    lastNum = randInt;
    return randInt;
}

function nextQuote() {
    if (event.type == 'click') {
        quoteBox.classList.add('animate');
        setTimeout(() => {
            quoteBox.classList.remove('animate');
        }, 1200);
    }   
    setTimeout(() => {
        const number = getRandomInt();
        text.innerHTML = quotes[number].quote;
        author.innerHTML = quotes[number].author;
        profession.innerHTML = quotes[number].profession;
        image.style = `background: ${quotes[number].image};
                       background-size: cover`;
        }, 600);
}

function colorChange() {
    setTimeout(() => {
        const hueNum = Math.floor(360 * Math.random());
        const color = `hsla( ${hueNum}, 50%, 50%, `;
        const complementary = `hsla( ${hueNum + 180}, 50%, 50%, `;
        container.style.backgroundColor = color + '.2 )';
        circle1.style.backgroundColor = color  + '1 )';
        circle2.style.backgroundColor = color + '.6 )';
        button.style.backgroundColor = complementary + ' 1 )';
        fbIcon.style.color = complementary + '.6 )';
    }, 600);
}


button.addEventListener('click', nextQuote);
button.addEventListener('click', colorChange);    
window.addEventListener('load', nextQuote);
window.addEventListener('load', colorChange);