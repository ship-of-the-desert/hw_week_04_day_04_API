
var allfilms = []
document.getElementById('selBreed').addEventListener('change',showInfo,false)
document.getElementById('best').addEventListener('click',getTheBest,false)
id) {
   // console.log("id "+id)
   var movieId;
   $('#box').empty();
    if(typeof(id) == 'object'){
        console.log(event.target.value)
        movieId=event.target.value
    }
    else{
        movieId=id
        console.log(id)
    }
//get the elements by the id 
    var result = allfilms.filter(obj => {
        return obj.id == movieId
      })[0]
      console.log(result)

$('#box').append(`<h3>${result.title}</h3>
<p> ${result.description} </p>
<h6>Director: ${result.director}</h6>
<h6>Producer: ${result.producer}</h6>
<h6>Release Date: ${result.release_date}</h6>
<h6>Score out off 100! : ${result.rt_score}</h6>
`)
//we can add random img !
}


listAll()

// list all movies 
function listAll() {
    // var opt = ` <option value = "random">random</option>  <option value = "other">other</option>`;
    // $('#selBreed').append(opt);
    axios({
        method: 'get',
        url: 'https://ghibliapi.herokuapp.com/films'
    }).then(response => {
        allfilms = response.data
        //list of all films!
        //when select show all info in dev 
        console.log(response.data)
        // var listOfBreeds = Object.keys(response.data.message)
        allfilms.forEach(element => {
            opt = `<option value = "${element.id}">${element.title}</option>`;
            $('#selBreed').append(opt);
        });
    }).catch(error => {
        console.log(error);
    });
}
//get best movie
function getTheBest() {

    var best;
    var bestScore = 0;
    allfilms.forEach(element => {
        var temp = Number(element.rt_score)
        console.log(temp)

        if (temp > bestScore) {
            bestScore = temp
            best = element.id}
    });

showInfo(best)

}
//get random movie
function getRandom() {
//next time!

}
