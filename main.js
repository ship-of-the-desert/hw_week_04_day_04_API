// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


function characterOneImage(){
    axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character/1'
      }) 
      // first character image 
      .then(response => {
        console.log(response.data.image);
    
        let image = document.querySelector('.img1')
        image.setAttribute('src',response.data.image)
        return response}
        )

      .then((response) => {
        console.log(response.data.name);

        $('.name1').text(response.data.name)
         })
      .catch((error)=>{
          error.customError = "No NO No!!"
          console.log(error.customError);
      })
    }
 characterOneImage();

////////////////////////

    function characterTwoImage(){
        axios({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/character/2'
          }) 
          // first character image 
          .then(response => {
            console.log(response.data.image);
        
            let image = document.querySelector('.img2')
            image.setAttribute('src',response.data.image)
            return response}
            )
    
          .then((response) => {
            console.log(response.data.name);
    
            $('.name2').text(response.data.name)
             })
          .catch((error)=>{
              error.customError = "No NO No!!"
              console.log(error.customError);
          })
        }
characterTwoImage();


///////////////////////

function characterThreeImage(){
    axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character/3'
      }) 
      // first character image 
      .then(response => {
        console.log(response.data.image);
    
        let image = document.querySelector('.img3')
        image.setAttribute('src',response.data.image)
        return response}
        )

      .then((response) => {
        console.log(response.data.name);

        $('.name3').text(response.data.name)
         })
      .catch((error)=>{
          error.customError = "No NO No!!"
          console.log(error.customError);
      })
    }
 characterThreeImage();

 //////////////////////////

 function characterFourImage(){
    axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character/4'
      }) 
      // first character image 
      .then(response => {
        console.log(response.data.image);
    
        let image = document.querySelector('.img4')
        image.setAttribute('src',response.data.image)
        return response}
        )

      .then((response) => {
        console.log(response.data.name);

        $('.name4').text(response.data.name)
         })
      .catch((error)=>{
          error.customError = "No NO No!!"
          console.log(error.customError);
      })
    }
 characterFourImage();

 /////////////////////

 function characterFiveImage(){
    axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character/5'
      }) 
      // first character image 
      .then(response => {
        console.log(response.data.image);
    
        let image = document.querySelector('.img5')
        image.setAttribute('src',response.data.image)
        return response}
        )

      .then((response) => {
        console.log(response.data.name);

        $('.name5').text(response.data.name)
         })
      .catch((error)=>{
          error.customError = "No NO No!!"
          console.log(error.customError);
      })
    }
 characterFiveImage();


     // $('.button1').on('click', dogImage, characterTwoImage)
