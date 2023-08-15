document.getElementById('login-btn').addEventListener('click', function(){
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    if(userEmail === "admin@gmail.com" && userPassword === "admin"){
        window.location.href = 'account.html';
    }else{
        alert("invalid input");
        return;  
    }
})