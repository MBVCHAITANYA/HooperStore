function validateRegister() {

    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (uname.length < 6) {
        alert("Username must be at least 6 characters");
        return false;
    }

    var pwdPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!pwdPattern.test(pwd)) {
        alert("Password must be at least 8 characters with uppercase, lowercase and number");
        return false;
    }

    if (pwd !== cpwd) {
        alert("Passwords do not match");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid Email Format");
        return false;
    }

    var mobilePattern = /^[6-9]\d{9}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Mobile must be 10 digits and start with 6-9");
        return false;
    }

    alert("Registration Successful");
    window.location.href = "home.html";
    return false;
}
