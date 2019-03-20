// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

document.querySelector('#random').addEventListener('click', showPic);

let name = document.querySelector('h1');
let pic = document.querySelector('.images');
function showPic(){
for (var i=1 ; i<= 5 ; i++)
{
    
  axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/${i}`
    })
    .then(response => {
    name.innerHTML+=response.data.name+"</br>";
    pic.innerHTML+=`<img src="${response.data.image}">`+"</br>";
    })
    .catch(error => {
      error.customError = "Error!"
      console.log(error.customError);
    })
}}