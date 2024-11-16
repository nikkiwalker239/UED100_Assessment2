// Search Functionality
function performSearch() {
    const query = document.getElementById('search').value.toLowerCase();
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        const title = thumbnail.querySelector('p').innerText.toLowerCase();
        thumbnail.style.display = title.includes(query) ? 'block' : 'none';
    });
}

// Filter Functionality by Genre and Year
function applyFilters() {
    const genreFilter = document.getElementById('genre-filter').value;
    const yearFilter = document.getElementById('year-filter').value;
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        const genre = thumbnail.getAttribute('data-genre');
        const year = thumbnail.getAttribute('data-year');
        const genreMatch = (genreFilter === 'all' || genre === genreFilter);
        const yearMatch = (yearFilter === 'all' || year === yearFilter);
        thumbnail.style.display = (genreMatch && yearMatch) ? 'block' : 'none';
    });
}

// Add to My List Function
function addToMyList(movieTitle) {
    const myListDropdown = document.getElementById('my-list-dropdown');
    const listItem = document.createElement('li');
    listItem.textContent = movieTitle;
    myListDropdown.appendChild(listItem);
    alert(`${movieTitle} has been added to My List!`);
}

// Toggle My List Dropdown
function toggleMyListDropdown() {
    const dropdown = document.getElementById('my-list-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Contact Us Modal Functions
function openContactForm() {
    document.getElementById('contact-modal').style.display = 'flex';
}

function closeContactForm() {
    document.getElementById('contact-modal').style.display = 'none';
}

// AI-powered Suggestions Function
function fetchAISuggestions() {
    const keywords = document.getElementById('custom-keywords').value.trim();

    if (!keywords) {
        alert('Please enter some descriptive words to get suggestions.');
        return;
    }

    console.log("Fetching AI suggestions for:", keywords);

    displaySuggestions([
        { title: "The Matrix", genre: "Sci-Fi", year: 1999 },
        { title: "Inception", genre: "Thriller", year: 2010 }
    ]);
}

// Display AI-generated Suggestions
function displaySuggestions(suggestions) {
    const contentRow = document.createElement('section');
    contentRow.classList.add('content-row');
    contentRow.innerHTML = `<h2>AI Movie Suggestions</h2><div class="content-thumbnails"></div>`;

    const thumbnailsContainer = contentRow.querySelector('.content-thumbnails');
    suggestions.forEach(suggestion => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.innerHTML = `
            <img src="placeholder.jpg" alt="${suggestion.title} thumbnail">
            <p>${suggestion.title} (${suggestion.year}) - ${suggestion.genre}</p>
        `;
        thumbnailsContainer.appendChild(thumbnail);
    });

    document.querySelector('main').appendChild(contentRow);
}

// Add to My List on button click
document.querySelector('.add-list-button').addEventListener('click', function() {
    addToMyList('Bohemian Rhapsody');
});

// Toggle My List dropdown on "My List" button click
document.querySelector('.my-list-button').addEventListener('click', toggleMyListDropdown);

// Hide dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('my-list-dropdown');
    const myListButton = document.querySelector('.my-list-button');
    if (!dropdown.contains(event.target) && event.target !== myListButton) {
        dropdown.style.display = 'none';
    }
});

// Attach Event Listeners
document.querySelector('.search-bar button').addEventListener('click', performSearch);
document.getElementById('genre-filter').addEventListener('change', applyFilters);
document.getElementById('year-filter').addEventListener('change', applyFilters);
document.getElementById('contact-modal').querySelector('.close').addEventListener('click', closeContactForm);

