function logout() {
    var request = new XMLHttpRequest();

    request.open("POST", "https://campus.csbe.ch/uek294/api/v1/unauthenticate");

    request.withCredentials = true;

    request.onload = function () {
        console.log("Logout status:", request.status);

        if (request.status === 204) {
            window.location.href = "index.php";
        } else {
            alert("Fehler beim Logout. Status: " + request.status);
        }
    };

    request.onerror = function () {
        alert("Netzwerkfehler beim Logout");
    };

    request.send();
}

document.getElementById("logoutBtn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        logout();
    });