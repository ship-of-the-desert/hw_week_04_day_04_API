// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

//create function
function getImage() {   
 //must 
    axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/`
    })
        .then(response => {
                for(i=0; i<5; i++)
                {
                    var img= document.querySelector('img');
                    var title= document.querySelector('h5')
                    img.setAttribute('src', `${response.data.message}`);
                    title.setAttribute(`${response.data.name}`)
                }
        })
    .catch(error => {
        console.log(error.message);
    })
}
var button= document.querySelector('#random');
button.addEventListener('click', getImage);