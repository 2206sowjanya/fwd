let button = document.getElementById('btn')
button.addEventListener('click',function() {
let url='https//jsonplaceholder.typicode.com/users'

fetch(URL).
then(Response=>Response.json()).
then(console.log(data)).
catch(console.log(err))
})

