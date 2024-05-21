// Define an array of objects to store product details
const products = [
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies, featured'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts, featured'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt, featured'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: 'shorts, featured'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 1',
        productPrice: 'P3000,00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ante eget risus consequat, non elementum nisl tincidunt.',
        tag: 'hoodies'
    },
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 2',
        productPrice: 'P2500,00',
        tag: 'shorts'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P3000,00',
        tag: 'tshirt'
    },
    {
        imgSrc: './Resources/showcase-3.jpg',
        productName: 'Product 4',
        productPrice: 'P3000,00',
        tag: ''
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 5',
        productPrice: 'P3000,00',
        tag: 'pullovers'
    },
    
];

let filteredProducts = [];

// Function to populate product cards with pagination
function populateProducts(pageNumber, pageSize, products) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    paginatedProducts.forEach(product => {
        const card = document.createElement("div");
        if (window.location.href.includes("index.html")) {
            card.classList.add("col-6", "col-lg-3");
        } else {
            card.classList.add("col-6", "col-md-4");
        }

        card.innerHTML = `
            <div class="card m-2 pb-md-5 px-md-5 border-0">
                <div class="card-details">
                    <img src="${product.imgSrc}" class="card-img-top" alt="...">
                    <h6 class="card-title mt-4"><strong>${product.productName}</strong></h6>
                    <p class="card-text">${product.productPrice}</p>
                </div>
                <div class="card-overlay">
                    <button class="card-button">More info</button>
                </div>
            </div>
        `;

        // Add event listener to the "More info" button
        const moreInfoButton = card.querySelector(".card-button");
        moreInfoButton.addEventListener("click", function() {
            const productImage = product.imgSrc;
            const productName = product.productName;
            const productPrice = product.productPrice;
            const productDesc = product.description;

            // Set modal content
            document.getElementById("modalProductImage").src = productImage;
            document.getElementById("modalProductName").innerText = productName;
            document.getElementById("modalProductPrice").innerText = productPrice;

            // You can set product description here if available
            document.getElementById("modalProductDescription").innerText = productDesc;
            
            // Show the modal
            const productModal = new bootstrap.Modal(document.getElementById('productModal'));
            productModal.show();
        });

        productContainer.appendChild(card);
    });
}

// Function to populate pagination links
function populatePagination(totalProducts, pageSize) {
    const totalPages = Math.ceil(totalProducts / pageSize);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        if (i === 1) li.classList.add("active");
        li.innerHTML = `
            <a class="page-link" href="#" data-target="product-list-${i}">${i}</a>
        `;
        pagination.appendChild(li);
    }

    // Event listener for pagination
    pagination.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const pageNumber = parseInt(event.target.textContent);
            currentPage = pageNumber;
            populateProducts(pageNumber, pageSize, filteredProducts);

            // Update active page link
            const paginationLinks = document.querySelectorAll("#pagination .page-item");
            paginationLinks.forEach(link => link.classList.remove("active"));
            event.target.parentElement.classList.add("active");
        }
    });
}

// Function to check if a product has a specific tag
function hasTag(product, tag) {
    return product.tag.split(', ').includes(tag);
}

// Function to filter products based on a single tag
function filterProductsByTag(tag) {
    return products.filter(product => hasTag(product, tag));
}

// Function to filter products based on multiple tags
function filterProductsByTags(tags) {
    return products.filter(product => tags.some(tag => hasTag(product, tag)));
}

// Function to generate HTML carousel items for products
function generateCarouselItems() {
    console.log('function loaded');
    const carouselInner = document.querySelector('.carousel-inner');

    // Get the featured products
    const featuredProducts = products.filter(product => hasTag(product, 'featured'));

    // Loop through each featured product
    featuredProducts.forEach((product, index) => {
        // Create a new carousel item element
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        // Create card column
        const cardColumn = document.createElement('div');
        cardColumn.classList.add('col-lg-3', 'col-md-4');

        // Create card
        const card = document.createElement('div');
        card.classList.add('card', 'my-5', 'mx-5', 'border-0');

        // Create card details
        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card-details');

        // Create image element
        const img = document.createElement('img');
        img.src = product.imgSrc;
        img.classList.add('card-img-top');
        cardDetails.appendChild(img);

        // Create product name element
        const productName = document.createElement('h6');
        productName.classList.add('card-title');
        productName.innerHTML = `<strong>${product.productName}</strong>`;
        cardDetails.appendChild(productName);

        // Create product price element
        const productPrice = document.createElement('p');
        productPrice.classList.add('card-text');
        productPrice.textContent = product.productPrice;
        cardDetails.appendChild(productPrice);

        // Append card details to card
        card.appendChild(cardDetails);

        // Create card overlay
        const cardOverlay = document.createElement('div');
        cardOverlay.classList.add('card-overlay');

        // Create button
        const button = document.createElement('button');
        button.classList.add('card-button');
        button.textContent = 'More info';
        cardOverlay.appendChild(button);

        // Append card overlay to card
        card.appendChild(cardOverlay);

        // Append card column to carousel item
        cardColumn.appendChild(card);

        // Append carousel item to carousel inner
        carouselInner.appendChild(carouselItem);
    });
}

// Function to add item to the cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.productName === product.productName);

    if (existingItemIndex > -1) {
        // If the item is already in the cart, update the quantity
        cart[existingItemIndex].quantity += product.quantity;
    } else {
        // If the item is not in the cart, add it
        cart.push(product);
    }

    // Save the cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart UI
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear existing cart items

    cart = cart.filter(item => item.quantity > 0); // Remove items with quantity zero

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('basket-cart-container', 'border', 'd-flex', 'align-items-center');
        cartItem.innerHTML = `
            <img src="${item.imgSrc}" class="image-fluid me-4">
            <div class="cart-details">
                <h6>${item.productName}</h6>
                <p>${item.productPrice}</p>
                <div class="qty-input mt-3">
                    <button class="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                    <input class="product-qty" type="number" name="product-qty" min="0" max="10" value="${item.quantity}">
                    <button class="qty-count qty-count--add" data-action="add" type="button">+</button>
                </div>
            </div>
        `;

        // Add event listeners for quantity buttons
        cartItem.querySelector('.qty-count--minus').addEventListener('click', function() {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(cartItem => cartItem.productName !== item.productName);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
        });

        cartItem.querySelector('.qty-count--add').addEventListener('click', function() {
            if (item.quantity < 10) {
                item.quantity++;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartUI();
            }
        });

        cartContainer.appendChild(cartItem);
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link

        const productImage = document.getElementById('modalProductImage').src;
        const productName = document.getElementById('modalProductName').innerText;
        const productPrice = document.getElementById('modalProductPrice').innerText;
        const productQuantity = parseInt(document.querySelector('.qty-input input.product-qty').value);

        const product = {
            imgSrc: productImage,
            productName: productName,
            productPrice: productPrice,
            quantity: productQuantity
        };

        addToCart(product);
    });

    // Initialize cart UI
    updateCartUI();

    // Determine the current page
    const page = window.location.pathname.split('/').pop().split('.')[0]; // Get current page name

    // Filter products based on the current page
    if (page === 'index') {
        filteredProducts = products.filter(product => product.tag.includes('featured'));
    } else {
        // For other pages, filter products based on page name
        const tag = page.split('-').pop(); // Extract tag from page name
        filteredProducts = filterProductsByTag(tag);
    }

    // Pagination configuration
    const pageSize = 12;
    let currentPage = 1;

    // Initial population
    populateProducts(currentPage, pageSize, filteredProducts);
    populatePagination(filteredProducts.length, pageSize);

    // Generate carousel items
    generateCarouselItems();
});

//Add quantity

var QtyInput = (function () {
	var $qtyInputs = $(".qty-input");

	if (!$qtyInputs.length) {
		return;
	}

	var $inputs = $qtyInputs.find(".product-qty");
	var $countBtn = $qtyInputs.find(".qty-count");
	var qtyMin = parseInt($inputs.attr("min"));
	var qtyMax = parseInt($inputs.attr("max"));

	$inputs.change(function () {
		var $this = $(this);
		var $minusBtn = $this.siblings(".qty-count--minus");
		var $addBtn = $this.siblings(".qty-count--add");
		var qty = parseInt($this.val());

		if (isNaN(qty) || qty <= qtyMin) {
			$this.val(qtyMin);
			$minusBtn.attr("disabled", true);
		} else {
			$minusBtn.attr("disabled", false);
			
			if(qty >= qtyMax){
				$this.val(qtyMax);
				$addBtn.attr('disabled', true);
			} else {
				$this.val(qty);
				$addBtn.attr('disabled', false);
			}
		}
	});

	$countBtn.click(function () {
		var operator = this.dataset.action;
		var $this = $(this);
		var $input = $this.siblings(".product-qty");
		var qty = parseInt($input.val());

		if (operator == "add") {
			qty += 1;
			if (qty >= qtyMin + 1) {
				$this.siblings(".qty-count--minus").attr("disabled", false);
			}

			if (qty >= qtyMax) {
				$this.attr("disabled", true);
			}
		} else {
			qty = qty <= qtyMin ? qtyMin : (qty -= 1);
			
			if (qty == qtyMin) {
				$this.attr("disabled", true);
			}

			if (qty < qtyMax) {
				$this.siblings(".qty-count--add").attr("disabled", false);
			}
		}

		$input.val(qty);
	});
})();


