fetch("https://meowfacts.herokuapp.com/")
.then(response => response.json())
.then(json => console.log(json.data[0]));

//goal: fill page with meow facts

const addMeowFactsButt = document.getElementById('addMeowFacts');
addMeowFactsButt.addEventListener('click', addMeowFactsToPage)

async function addMeowFactsToPage() {
    const count = 3;
    const url = `https://meowfacts.herokuapp.com/?count=${count}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.data[0]);
    console.log(json.data[1]);
    console.log(json.data[2]);

    for(const meowfact of json.data) {
        console.log(meowfact);
       // document.body.innerHTML += `<p>${meowfact}</p>`; //big no no

        const paragraph = document.createElement('p');
        paragraph.innerText = meowfact;
        document.body.append(paragraph);
    }

};



