function validateLogin() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.length < 5) {
        alert("Username must be at least 5 characters");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Login Successful");
    window.location.href = "home.html";
    return false;
}
