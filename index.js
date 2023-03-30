// Add your code here
function submitData(name,email){
    return fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({name,email})
    })
    .then(res=>res.json())
    .then(object=>{
        let pElement = document.createElement('p');
      pElement.textContent = object.id;
      document.body.appendChild(pElement);
    })
    .catch(error=>{
        alert("Si kuzuri BOSS!")
        document.body.innerHTML = error.message
    })
}