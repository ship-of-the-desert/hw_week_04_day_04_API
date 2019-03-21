// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button





let name = document.querySelector('.num');
let pic = document.querySelector('.images');
for (var j=1 ;i<5;j++)

axios({
    method: 'GET',

    url:"https://rickandmortyapi.com/api/character/{j}",
})

"id"= 1,
    "name"= "Rick sanchez",
   .then(response => {
          let selectImage = response.data.name[1]
          let image = document.querySelector('.1')
        image.setAttribute('src', Rick sanchez)
        console.log(Rick sanchez)
   }

  "id"= 2,
  "name"= "morty smith",
  "url" ="https://rickandmortyapi.com/api/character/${j}"
  .then(response => {
      let selectImage = response.data.name[2]
      let image = document.querySelector('.2')
      image.setAttribute('src',response.data.name)
      console.log(morty smith);
  }


  
    "id"= 3,
    "name"= "summer smith",
    "url"="https://rickandmortyapi.com/api/character/${j}"
    .then(response => {
        let selectImage = response.data.name[3]
        let image = document.querySelector('.3')
        image.setAttribute('src',response.data.name)
        console.log(summer smith);
    }

    "id"= 4,
    "name"= "jerry smith",
    "url"= "https://rickandmortyapi.com/api/character/${j}"
    .then(response => {
        let selectImage = response.data.name[4]
        let image = document.querySelector('.4')
        image.setAttribute('src',response.data.name)
        console.log(jerry smith);
    }
    "id"= 5,
    "name"= "beth smith",
    "url"= "https://rickandmortyapi.com/api/character/${j}"
    .then(response => {
        let selectImage = response.data.name[5]
        let image = document.querySelector('.5')
        image.setAttribute('src',response.data.name)
        console.log(beth smith);
    }



 
   