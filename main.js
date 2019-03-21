// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button




function rickandmortyapi(){
axios({
    method: 'GET',
    url: `https://rickandmortyapi.com/api/character/1,2,3,4,5`,
})

    .then(response => {
        for(var i = 0 ; i < 5 ; i++){
            document.querySelector(`#image${i}`).setAttribute('src',response.data[i].image)  
            document.querySelector(`#head${i}`).textContent=response.data[i].name 

        }
    })
}
 