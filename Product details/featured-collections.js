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
}

// Call the function to generate carousel items
generateCarouselItems();
