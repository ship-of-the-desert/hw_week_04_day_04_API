// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



axios({
    method: 'GET',
    url: `https://rickandmortyapi.com/api/character/2`

})
.then( response => {
    
   let $imags = $('.img1');
   $imags.attr('src', response.data);
   var rick = await getCharacter(2);
   })

//

