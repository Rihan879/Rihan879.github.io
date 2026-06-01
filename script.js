

// Mobile Menu Elements

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

// Open Mobile Menu

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
});

// Close Mobile Menu

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

// Close By Clicking Overlay

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});



// CART FUNCTIONALITY


let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartDisplay = document.getElementById("cart-count");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartDisplay.textContent = cartCount;


        cartDisplay.textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});



// BACK TO TOP SMOOTH SCROLL

const backToTop = document.querySelector(".foot-panel1 a");

backToTop.addEventListener("click", (e) => {

    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



// SEARCH BAR


const searchInput = document.querySelector(".search-input");

const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    boxes.forEach(box => {

        const title =
        box.querySelector("h2").textContent.toLowerCase();

        if(title.includes(value)){
            box.style.display = "block";
        }
        else{
            box.style.display = "none";
        }

    });

});

const resetBtn = document.getElementById("reset-cart");

resetBtn.addEventListener("click", () => {

    cartCount = 0;
    cartDisplay.textContent = cartCount;

});

let cartItems = [];
cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        // cartCount++;

        const productName =
        button.parentElement.querySelector("h2").textContent;

        cartItems.push(productName);

        cartDisplay.textContent = cartCount;

    });

});
 
const cartModal =
document.querySelector(".cart-modal");

const cartList =
document.getElementById("cart-list");

const closeCart =
document.getElementById("close-cart");

document.querySelector(".nav-cart")
.addEventListener("click", () => {

    cartList.innerHTML = "";

    cartItems.forEach(item => {

        const li =
        document.createElement("li");

        li.textContent = item;

        cartList.appendChild(li);

    });

    cartModal.style.display = "flex";

});

closeCart.addEventListener("click", () => {

    cartModal.style.display = "none";

});



console.log("Amazon Clone Loaded Successfully");

