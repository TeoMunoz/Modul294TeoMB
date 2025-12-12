//login
function onFormSubmitted(event) {
    event.preventDefault();

    //Create body to send in api
    var body = {
        username: document.getElementById("name").value,
        password: document.getElementById("password").value
    };

    //Create HTTP request
    var request = new XMLHttpRequest();

    request.open("POST", "https://campus.csbe.ch/uek294/api/v1/authenticate");

    //To save cookis
    request.withCredentials = true;

    //Show status code on the request reached the server and the server responded
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

    //Send data as JSON
    request.send(JSON.stringify(body));
}

//Conect whit the html form
document.getElementById("loginForm")
    .addEventListener("submit", onFormSubmitted);