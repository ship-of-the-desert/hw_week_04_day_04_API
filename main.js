// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

function rAndM() {
    axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5',
    })

        .then(response => {
            console.log(response);
            for(let i in response.data){
                $('.row').append(
                    `
                    <div class="col">
                    <h2> ${response.data[i].name} </h2>
                    <img src=${response.data[i].image}>
                    </div> `)
            }
        })

        .catch(error => {
            error.customError = 'error'
            console.log(error.customError);

        })
}

$('#random').on('click',rAndM)
