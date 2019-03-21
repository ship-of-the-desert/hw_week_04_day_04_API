// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

// name	string	The name of the character.
//image	string (url)
//Link to the character's image. 
//All images are 300x300px and most are medium shots or 
//portraits since they are intended to be used as avatars.


getCharacter()
function getCharacter() {

    axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character'
    })
        .then(response => {
            var lists = response.data.results
            var sel = $(".ricknmorty")
            // for (i =1; i<=5; i++){
                lists.forEach((list, index )=> {
                    // console.log(list[i].name)
                    // console.log(list[i].image)
                    if(index < 5){
                        sel.append(`<h3> ${list.name} </h3><img src="${list.image}" />`)

                    }
                   
                });
                

            // }
        
            console.log();

        })
        .catch(error => {
            error.customError = "there is something wrong!"
            console.log(error.customError);
        })
}
