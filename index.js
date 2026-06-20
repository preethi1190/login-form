let savedUsername = "admin";
let savedPassword = "1234";

document.getElementById("mySubmit").onclick = function(){

    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if(username === savedUsername &&
       password === savedPassword){

        document.getElementById("demo").textContent =
        "Welcome Back " + username;
    }
    else{
        document.getElementById("demo").textContent =
        "Wrong Username or Password";
    }
}