// Scripts to make the page interactive

const cardsPerPage = 4;

const dataContainer = document.getElementById('data-container');
const pagination = document.getElementById('pagination');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumbers = document.getElementById('page-numbers');
const pageLink = document.querySelectorAll('.page-link');

const cards = Array.from(dataContainer.getElementsByClassName('card'));

// Calculate the total number of pages 

const totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 1;
console.log(typeof currentPage);
// Function to display cards for a specific page

function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cards.forEach((card, index)=>{
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updatePagination() {
    pageNumbers.textContent = 
        `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    pageLink.forEach((link)=>{
        const page = parseInt(link.getAttribute('data-page'));
        link.classList.toggle('active', page === currentPage);
    });  
}

// event listener for "previous" page

prevButton.addEventListener('click', ()=>{
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePagination();
    }
});

nextButton.addEventListener('click', ()=>{
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
});

pageLink.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const page = parseInt(link.getAttribute('data-page'));
        if (page !== currentPage) {
            currentPage = page;
            displayPage(currentPage);
            updatePagination();
        } 
    });
});

displayPage(currentPage);
updatePagination();

//but i needs some debug in previous and next button when they click it show nothing like page NaN of 5