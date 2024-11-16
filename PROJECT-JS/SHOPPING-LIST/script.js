document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("item-input");
    const itemsList = document.getElementById("items");

    itemInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addItem();
        }
    });

    function addItem() {
        const itemName = itemInput.value.trim();

        if (itemName !== "") {
            const listItem = document.createElement("li");
            listItem.className = "item";

            listItem.innerHTML = `
                <span>${itemName}</span>
                <span class="delete-btn" onclick="removeItem(this)">X</span>
            `;

            itemsList.appendChild(listItem);
            itemInput.value = "";
        }
    }

    function removeItem(element) {
        const listItem = element.parentNode;
        itemsList.removeChild(listItem);
    }
});