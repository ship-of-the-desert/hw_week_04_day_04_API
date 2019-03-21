// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
function getImage(){
    axios({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5',
    
        })
    .then(response => {
        for (let i=0 ;i<6 ;i++){
        $('.container').append(`<p>${response.data[i].name}</p>`)
        $('.container').append(`<img src ='${response.data[i].image}'/>`)}
       
    }) 
    .catch(error=>{
        error.customError = 'Error'
        console.log(error.customError)
    }) 

}
$('#random').on('click',getImage)