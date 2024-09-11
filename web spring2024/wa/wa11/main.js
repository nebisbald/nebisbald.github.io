const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const pics = ['pic1.JPG','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */

const altText = ['mad guy','monotype print','collage','digital collage','absence of light'];

/* Looping through images */
for (let i = 0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + pics[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(){
        changePic(i);
    });
}

function changePic(a){
    displayedImage.setAttribute('src', 'images/' + pics[a]);
    displayedImage.setAttribute('alt', altText[a]);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
    if(btn.getAttribute('class') == 'dark'){
        btn.setAttribute("class", 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else{
        btn.setAttribute("class", 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});
