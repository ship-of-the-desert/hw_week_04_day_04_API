// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



var container=document.querySelector('.container')



axios({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
  })

  .then(response => {
    for (var i=0; i<5; i++){
        console.log(response.data[i].name);
        container.innerHTML+=`<p>${response.data[i].name}</p>`
        container.innerHTML+=`<img src="${response.data[i].image}"/>`
      }
    
    
// let char1=document.querySelector('#char1')
// char1.setAttribute(response.data[0].name)
  })