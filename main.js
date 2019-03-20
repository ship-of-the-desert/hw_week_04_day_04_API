var container= document.querySelector('.container');
var click= false; //to prevent button from printing if one is already clicked once

//Rick and morty button event listener
var button= document.querySelector('#random');

button.addEventListener('click', function() {
    if (!click) {
        //Add name and photo of each character to the HTML page
        axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character/'
        })
        .then(response => {
            for (let i= 0; i < 5; i++) {
                var charName= document.createElement('p'); //The name
                var charImage= document.createElement('img'); //The image

                charName.innerHTML= `name: ${response.data.results[i].name}`; //get name
                charImage.setAttribute('src', response.data.results[i].image); //get image

                container.appendChild(charName); //append name
                container.appendChild(charImage); //append image
            }
        })
        click= true;  
    }
})

//Studio ghibli button event listener
var studioButton= document.querySelector('#movies');

studioButton.addEventListener('click', function() {
    if (!click) {
        //add every movie title and description to the HTML page
        axios({
            method: 'get',
            url: 'https://ghibliapi.herokuapp.com/films'
        })
        .then(response => {
            for (let i=0; i < response.data.length; i++) {
                var movieTitle= document.createElement('li'); //The title
                var movieDescription= document.createElement('p'); //The description

                movieTitle.innerHTML= `Title: ${response.data[i].title}`; //get title
                movieTitle.style.textAlign= "center";
                movieTitle.style.listStyle= "none"
                movieDescription.innerHTML= response.data[i].description; //get description

                movieTitle.appendChild(movieDescription); //append description
                container.appendChild(movieTitle); //append title
            }
        })
    }
    click= true;
})



