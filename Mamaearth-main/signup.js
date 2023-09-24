let action=document.querySelector("#signup")
            action.addEventListener("click",getting)
            async function getting(event){
                     const email=document.getElementById("email").value;
                     const password=document.getElementById("pass").value;
                     const username=document.getElementById("user").value;
                     const mobile=document.getElementById("phone").value;
           
                   const result = await fetch(`http://localhost:5003/register`,{
                       method:'post',
                       headers : {
                                   "Content-Type": "application/json",
                          },
                          body:
                           JSON.stringify({
                              email,
                              password,
                              username,
                              mobile
                           })
                          
                     }).then((res) => res.json())
                     console.log(result)
                     if (result.message) {
				
					alert(result.message)
				} else {
					
                    window.location.href="login.html"
				}
            }



