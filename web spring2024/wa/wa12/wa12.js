
const butt = document.querySelector("#js-new-object");
const backButt = document.querySelector("#js-last-object");
const endpoint = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
let totalObjects = 100;
let primaryImage = "";
let artistDisplayName = "";
let title = "";
let period = "";
let linkResource = "";

let lastTotalObjects = 0;
let lastPrimaryImage = "";
let lastArtistDisplayName = "";
let lastTitle = "";
let lastPeriod = "";
let lastLinkResource = "";


butt.addEventListener("click", getObject);
backButt.addEventListener("click", goBack);


getTotal();
getObject();

async function getTotal(){
    try {
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log("Total Objects: ")
        console.log(json['total']);
        totalObjects = json['total'];
    } catch (err){
        console.log(err);

    }
};

async function getObject(){
    lastPrimaryImage = primaryImage;
    lastArtistDisplayName = artistDisplayName;
    lastTitle = title;
    lastPeriod = period;
    lastLinkResource = linkResource;
    primaryImage = "";
    while(primaryImage == ""){
        try {
            const response = await fetch(endpoint + '/' + Math.floor(Math.random() * totalObjects));
            if (!response.ok){
                throw Error(response.statusText);
            }
            
            const json = await response.json();
            console.log(json['primaryImage']);
            primaryImage = json['primaryImage'];

            
            console.log(json['artistDisplayName']);
            artistDisplayName = json['artistDisplayName'];

            
            console.log(json['title']);
            title = json['title'];

            
            console.log(json['period']);
            period = json['period'];

            
            console.log(json['objectURL']);
            linkResource = json['objectURL'];

            
            
        } catch (err){
            console.log(err);
        }
    }
    displayObject();
};

function displayObject(){
    const image = document.querySelector("#image");
    const text = document.querySelector("#js-object-text");
    const link = document.querySelector("#link");

    image.setAttribute('src', primaryImage);
    image.setAttribute('alt', title);
    console.log(title + artistDisplayName + period);
    text.textContent = title + '\n' + artistDisplayName + '\n' + period;

    if(linkResource != ""){
        link.setAttribute('href', linkResource);
        link.setAttribute('display', 'inline');
    }
    else{
        link.setAttribute('display', 'none');
    }

};

function goBack(){
    const image = document.querySelector("#image");
    const text = document.querySelector("#js-object-text");
    const link = document.querySelector("#link");

    image.setAttribute('src', lastPrimaryImage);
    image.setAttribute('alt', lastTitle);
    console.log(lastTitle + lastArtistDisplayName + lastPeriod);
    text.textContent = lastTitle + '\n' + lastArtistDisplayName + '\n' + lastPeriod;

    if(linkResource != ""){
        link.setAttribute('href', lastLinkResource);
        link.setAttribute('display', 'inline');
    }
    else{
        link.setAttribute('display', 'none');
    }
}