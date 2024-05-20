// Define an array of objects to store product details
const products = [
    {
        imgSrc: './Resources/product_1.png',
        productName: 'Product 1',
        productPrice: 'P3000,00'
    },
    {
        imgSrc: './Resources/showcase-1.jpg',
        productName: 'Product 2',
        productPrice: 'P2500,00'
    },
    {
        imgSrc: './Resources/showcase-2.jpg',
        productName: 'Product 3',
        productPrice: 'P2500,00'
    },
    // Add more products as needed
];

// Function to generate HTML carousel items for products
function generateCarouselItems() {
    console.log ('function loaded');
    const carouselInner = document.querySelector('.carousel-inner');

    // Loop through each product
    products.forEach((product, index) => {
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

        // Append card to card column
        cardColumn.appendChild(card);

        // Append card column to carousel item
        carouselItem.appendChild(cardColumn);

        // Append carousel item to carousel inner
        carouselInner.appendChild(carouselItem);
    });

    // After generating carousel items, call populateProducts() to attach event listeners
    populateProducts();
}

// Call the function to generate carousel items
generateCarouselItems();

// Function to populate product cards
function populateProducts() {
    console.log('I am triggered GRR!')
    // Select the parent element that contains all product cards
    const productContainer = document.querySelector(".carousel-inner");
    
    // Attach event listener to the parent element
    productContainer.addEventListener("click", function(event) {
        // Check if the clicked element is a "More info" button
        if (event.target.classList.contains("card-button")) {
            // Get the parent card element
            const card = event.target.closest(".card");
            if (card) {
                const productImage = card.querySelector("img").src;
                const productName = card.querySelector(".card-title").innerText;
                const productPrice = card.querySelector(".card-text").innerText;

                // Set modal content
                document.getElementById("modalProductImage").src = productImage;
                document.getElementById("modalProductName").innerText = productName;
                document.getElementById("modalProductPrice").innerText = productPrice;

                // You can set product description here if available
                // Replace "description" with your actual product description data
                document.getElementById("modalProductDescription").innerText = "Description";
                
                // Show the modal
                const productModal = new bootstrap.Modal(document.getElementById('productModal'));
                productModal.show();
            }
        }
    });
}

