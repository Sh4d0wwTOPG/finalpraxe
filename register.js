document.addEventListener("DOMContentLoaded", function() {
    var registerForm = document.getElementById("register-form");
    registerForm.onsubmit = register;
});

function register(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Save credentials in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    alert("Registration Successful");
    window.location.href = "login.html"; 
}