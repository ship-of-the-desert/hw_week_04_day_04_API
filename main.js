// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


//character(id: 1) {
 //   id
  //}
let rickandmorty = document.querySelector(".container")

//.addEventListener('click',imagess);
axios({
    method: 'GET',
    url: `https://rickandmortyapi.com/api/character/1,2,3,4,5`
  })
  .then(response => {
     console.log(response.data)
     //function imagess(){

     
     for ( let i =0; i <= 5; i++ ){
     //} 
      rickandmorty.innerHTML += `<img src="${response.data[`${i}`].image}">`
      rickandmorty.innerHTML +=`<h2> ${response.data[`${i}`].name} </h2> `
  }
      })
  
     