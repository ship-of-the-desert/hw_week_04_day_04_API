
let continr = document.querySelector(".container")



axios({
    method: 'get',
    url: `https://rickandmortyapi.com/api/character/1,3,2,5,4`


})
    .then(res => {
        for ( var i = 0 ; i <5; i++){

       
        continr.innerHTML +=`<h2> ${res.data[`${i}`].name} </h2> `
    continr.innerHTML +=`<img src="${res.data[`${i}`].image}" alt="">`
}
    })


