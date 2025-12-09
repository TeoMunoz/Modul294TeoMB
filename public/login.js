function onFormSubmitted(event) {
    event.preventDefault();

    var body = {
        username: document.getElementById("name").value,
        password: document.getElementById("password").value
    };

    var request = new XMLHttpRequest();

    request.open("POST", "https://campus.csbe.ch/uek294/api/v1/authenticate");

    request.onload = function (event) {
        console.log("Status:", request.status);

        if (request.status === 204) {
            window.location.href = "homepage.php";
        } else if (request.status === 401) {
            alert("Falsche Zugangsdaten (401)");
        } else {
            alert("Fehler beim Login. Status: " + request.status);
        }
    };

    request.onerror = function () {
        alert("Netzwerkfehler beim Login");
    };

    request.send(JSON.stringify(body));
}

document.getElementById("loginForm")
    .addEventListener("submit", onFormSubmitted);
