const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit inside the building, the computers were so close to a melt down that you could see the electricity jumping back and forth between the monitors. :insertx: was trapped between this lightening field and the door to escape. There was only one thing to do, :inserty:. For a moment it seemed as though everything was fine, but then a shock with 300 pounds of force came straight for :insertx:. Just as Bob was able to shut down the whole network :insertx: :insertz:";

const insertX = ["Ralph the IT Genius","Susan the Receptionist","Donald the FBI Agent"];
const insertY = ["run through the room as fast as possible","sit and wait for help","shoot at the computers hoping to turn them off"];
const insertZ = ["spontaneously combusted","melted into a puddle on the ground","jumped out of the way and ran through the door"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    let temperature =  Math.round(((94-32)*5)/9);

    weight = weight + " stone";
    temperature = temperature + " centigrade";

    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}