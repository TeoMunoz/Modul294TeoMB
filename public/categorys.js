function loadCategories() {
    var request = new XMLHttpRequest();

    request.open("GET", "https://campus.csbe.ch/uek294/api/v1/categories");

    request.withCredentials = true;

    request.onload = function () {
        console.log("Status (categories):", request.status);

        if (request.status === 200) {
            var categories = JSON.parse(request.responseText);

            var container = document.getElementById("categories-container");
            container.innerHTML = "";

            categories.forEach(function (category) {
                var item = document.createElement("div");
                item.className = "category-item";

                var text = "ID: " + category.id;

                if (category.name) {
                    text += " | Name: " + category.name;
                }
                if (category.description) {
                    text += " | Description: " + category.description;
                }

                item.textContent = text;
                container.appendChild(item);
            });

        } else if (request.status === 401) {
            alert("Nicht eingeloggt oder Token ungültig (401).");
        } else {
            alert("Fehler beim Laden der Kategorien. Status: " + request.status);
        }
    };

    request.onerror = function () {
        alert("Netzwerkfehler beim Laden der Kategorien");
    };

    request.send();
}

document.addEventListener("DOMContentLoaded", loadCategories);