// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

function displayInof(){
// select container from html
let container=document.querySelector(".container");

axios({
method:'GET',
url:'https://rickandmortyapi.com/api/character/[1,2,3,4,5]'//use basic url and get first 5 char
})
.then(response=>{
    for (let i=0;i<5;i++){//to display info of 5 char
        container.innerHTML+=`<p>${response.data[i].name}</p>`//display char name in p 
        container.innerHTML+=`<img src="${response.data[i].image}">`//display char name in img
    } 
})
}
//call fun after click on the button from html
document.querySelector("#random").onclick=displayInof;
