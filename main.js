// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
let h1s=document.querySelectorAll('h1');
let imgs=document.querySelectorAll('img');
let api="https://api.thecatapi.com/v1/images/search?api_key=fd5d768b-b19d-451e-8a01-c85ead96968a?breed_id="
let ids=['beng','aege','abob','acur','amau'];
let names=['Bengal Cat','Aegean cat','American Bobtail cat','American Curl','Arabian Mau'];
let setter = (ids,names)=>{
    for (let k=0;k<5;k++){
        axios.get(api+ids[k])
        .then((response) => {
        imgs[k].setAttribute('src',response.data[0].url);
        h1s[k].innerText=names[k];
        })
    }
}

document.querySelector('button').addEventListener('click',function(){
    for (let i=0;i<5;i++){
        h1s[i].style.display='block';
        imgs[i].style.display='block';
    }
    setter(ids,names)
})
