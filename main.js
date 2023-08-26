
document.querySelector('button').addEventListener('click', Cat)


function Cat(){

fetch('https://meowfacts.herokuapp.com/')
    .then(res =>res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.data
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
        
}   
