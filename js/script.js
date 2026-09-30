function validate() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let sport = document.getElementById("sport").value;
    let reason = document.getElementById("reason").value;

    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    if (email == "") {
        alert("Please enter your email");
        return false;
    }

    if (age == "") {
        alert("Please enter your age");
        return false;
    }

    if (age < 10 || age > 60) {
        alert("Age must be between 10 and 60");
        return false;
    }

    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        alert("Please select your gender");
        return false;
    }

    if (sport == "") {
        alert("Please select a sport");
        return false;
    }

    if (reason == "") {
        alert("Please enter your reason for participating");
        return false;
    }

    alert("Registration successful!");
    return true;
}
