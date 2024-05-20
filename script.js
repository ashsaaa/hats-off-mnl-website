//Carousel script

document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
});


//Tab pagination
document.addEventListener('DOMContentLoaded', function() {
    const paginationLinks = document.querySelectorAll('.pagination .page-link');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(targetId) {
        tabContents.forEach(tab => {
            if (tab.id === targetId) {
                tab.style.display = 'flex';
            } else {
                tab.style.display = 'none';
            }
        });
    }

    paginationLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            if (target === 'previous' || target === 'next') {
                const activeIndex = Array.from(paginationLinks).findIndex(link => link.parentElement.classList.contains('active'));
                let newIndex;

                if (target === 'previous') {
                    newIndex = activeIndex - 1;
                } else if (target === 'next') {
                    newIndex = activeIndex + 1;
                }

                if (newIndex >= 0 && newIndex < paginationLinks.length) {
                    paginationLinks[newIndex].click();
                }
            } else {
                document.querySelector('.pagination .active').classList.remove('active');
                this.parentElement.classList.add('active');
                showTab(target);
            }
        });
    });

    // Initial display
    showTab('product-list-1');
});





