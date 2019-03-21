// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
document.querySelector('#get-images').addEventListener('click', function (event) {
    event.preventDefault();

    if (document.querySelector('img') !== null) {
        document.querySelector('img').remove()
    }

    
    if (document.querySelector('h1') !== null) {
        document.querySelector('h1').remove()
    }


    for (let i = 0; i < 5; i++) {

        axios({
                method: 'GET',
                url: `https://rickandmortyapi.com/api/character/${i+1}`,
            })
            .then((response) => {
                var parent = document.querySelector('.container');
                var title = document.createElement('h3');
                title.textContent = `${response.data.name}`
                parent.appendChild(title)

                var image = document.createElement('img');
                image.setAttribute('src', response.data.image)
                parent.appendChild(image)

            })
            .catch((error) => {
                error.customError = 'error error error';
                console.log(error.customError);
            })

    }
})