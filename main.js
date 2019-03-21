// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

//create function that gets rick and morty's characters 
function getCharacter() { 

//declare variable of the class container
    var container = document.querySelector('.container');

//axios request to get the image
    axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/`
    })
//promise
        .then(response => {
//for loop for the 5 images with character name 
                for(i=0; i<5; i++)
                {
//declare 2 variable for the img and name each refered to the the tags in HTML file
                    var img= document.querySelector('img');
                    var title= document.querySelector('h5');
//set attributes for each variable
                    img.setAttribute('src', `${response.data.image}`);
                    title.setAttribute(`${response.data.name}`)
                }
        })
//catch an error 
    .catch(error => {
        console.log(error.message);
    })
}
//Once clicked on button call function
var button= document.querySelector('#random');
button.addEventListener('click', getCharacter);