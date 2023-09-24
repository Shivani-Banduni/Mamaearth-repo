
 let action=document.querySelector("#login")
 action.addEventListener("click",login)
 async function login(event){
const email=document.getElementById("email").value;
const password=document.getElementById("pass").value;

const result = await fetch(`http://localhost:5003/login`,{
    method:'post',
    headers:{
       'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        email,
        password
    })  
}).then((res)=>res.json())
console.log(result)
     if (result.message) {
   
    alert(result.message)
} else {
    // console.log(result.token)
    localStorage.setItem('token', result.token)
    // console.log(token)
    window.location.href="index.html"
}
}





