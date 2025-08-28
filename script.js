// ===============================
// Part 1: Variables & Conditionals
// ===============================
let cart = []; // store items
let budget = 100; // Example budget

// Conditional example
if (budget > 50) {
    console.log("You have a good budget to shop!");
} else {
    console.log("You may need to limit your purchases.");
}

// ===============================
// Part 2: Custom Functions
// ===============================

// Function 1: Add random items to the cart
function addItems() {
    let items = [
        { name: "Apples", price: 15 },
        { name: "Bananas", price: 10 },
        { name: "Milk", price: 30 },
        { name: "Bread", price: 25 },
        { name: "Cheese", price: 50 }
    ];

    // Pick a random item
    let randomIndex = Math.floor(Math.random() * items.length);
    let selectedItem = items[randomIndex];
    cart.push(selectedItem);

    displayCart();
}

// Function 2: Calculate total cost of items
function calculateTotal() {
    let total = 0;

    // Loop Example 1: For...of loop
    for (let item of cart) {
        total += item.price;
    }

    document.getElementById("totalDisplay").textContent = 
        `Total Cost: $${total}`;

    // Conditional check for budget
    if (total > budget) {
        document.getElementById("totalDisplay").textContent += " ⚠️ Over Budget!";
    }
}

// ===============================
// Part 3: Loops
// ===============================

// Loop Example 2: For loop to display cart items
function displayCart() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = ""; // clear previous

    for (let i = 0; i < cart.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${cart[i].name} - $${cart[i].price}`;
        cartList.appendChild(li);
    }
}

// ===============================
// Part 4: DOM Interactions
// ===============================
// - Update text content (#totalDisplay)
// - Append new list items (#cartList)
// - Clear/reset content

function clearCart() {
    cart = [];
    document.getElementById("cartList").innerHTML = "";
    document.getElementById("totalDisplay").textContent = "Cart is empty.";
}

// Event Listeners
document.getElementById("addItemBtn").addEventListener("click", addItems);
document.getElementById("calculateBtn").addEventListener("click", calculateTotal);
document.getElementById("clearCartBtn").addEventListener("click", clearCart);
