// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
function getInfo(){
axios({
    url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5',
    method: 'get',
  })
  .then((response) => {
    
    for (var i = 0; i <= 5 ; i++){
      $(".container").append(` <br>${response.data[i].name}</br> `  ); 
      $(".container").append(`<br><img src="${response.data[i].image}"/></br>` );
      console.log(response.data) ;
    }
  }) 

  .catch((error)=>{
      console.log(error)

  }) }
$('.random').on('click',getInfo)
  