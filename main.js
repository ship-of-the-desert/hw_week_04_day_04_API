// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

// function getChar(){


// axios({
//     method: 'get',
//     url: `https://rickandmortyapi.com/api/character/1,2,3,4,5`
// })
// .then(response => {
//     console.log(response)
//     for (let i = 0; i < 5; i++){
//         $(".container").append(
//         `<h1>${response.data[i].name}</h1>
//         <img src="${response.data[i].image}">`
//         );
//     }
// })

// }
    axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/1,2,3,4,5`
    })
        .then(response => {
            console.log(response.data)
            response.data.forEach(Element => {
                $(".container").append(
                    `<h1>${Element.name}</h1>
        <img src="${Element.image}">`
                );
            });
        });

