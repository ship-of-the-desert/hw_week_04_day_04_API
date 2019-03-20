// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
// function getImg(){
    function getImg(){
var charName = document.querySelector('.container');

    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
      })
      .then(response => {
          for(var i =0;i<5;i++){
       charName.innerHTML+=  `<h1>${response.data[i].name}</h1>`;
       charName.innerHTML+= `<img src = "${response.data[i].image}"/>`;
          }
      })
    }
    document.querySelector("#random").addEventListener('click',getImg)