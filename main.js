// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
let continr = document.querySelector(".container")

axios({
    method : 'get',
url : 'https://ghibliapi.herokuapp.com/films'


})
.then(res =>{
    // for ( var i =0 ;  i < res.data.length ; i++ ){
    // continr.innerHTML +=`<h2> ${res.data[i].title} </h2> `
    // continr.innerHTML +=`<p> ${res.data[i].description} </p> `

    // }
console.log(res)
})
