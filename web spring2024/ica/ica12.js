
const butt = document.querySelector("#js-new-quote");
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

const answerButt = document.querySelector("#js-tweet");
answerButt.addEventListener("click", getAnswer);

const answerText = document.querySelector("#js-answer-text");

butt.addEventListener("click", getQuote);

let answer = '';
getQuote();
async function getQuote(){

    try {
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json['question']);
        displayQuote(json['question']);
        console.log(json['answer']);
        answer = json['answer'];
        answerText.textContent = '';
      } catch (err){
        console.log(err);
        alert('Failed to fetch new quote');
      }
};

function displayQuote(text){
    const quoteText = document.querySelector("#js-quote-text");

    quoteText.textContent = text;
};

function getAnswer(){
    answerText.textContent = answer;
};