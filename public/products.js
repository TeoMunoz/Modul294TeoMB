function loadProducts() {
    var request = new XMLHttpRequest();

    request.open("GET", "https://campus.csbe.ch/uek294/api/v1/products");

    request.withCredentials = true;

    request.onload = function () {
        console.log("Status (products):", request.status);

        if (request.status === 200) {
            var products = JSON.parse(request.responseText);

            var container = document.getElementById("products-container");
            container.innerHTML = "";

            products.forEach(function (product) {
                var item = document.createElement("div");
                var text = "ID: " + product.id;

                if (product.name) {
                    text += " | Name: " + product.name;
                }
                if (product.price) {
                    text += " | Price: " + product.price;
                }

                item.textContent = text;
                container.appendChild(item);
            });

        } else if (request.status === 401) {
            alert("Nicht eingeloggt oder Token ungültig (401).");
        } else {
            alert("Fehler beim Laden der Produkte. Status: " + request.status);
        }
    };

    request.onerror = function () {
        alert("Netzwerkfehler beim Laden der Produkte");
    };

    request.send();
}

document.addEventListener("DOMContentLoaded", loadProducts);