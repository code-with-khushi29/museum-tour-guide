document.getElementById('search-button').addEventListener('click', function() {
    const cityInput = document.getElementById('search-input').value.trim(); // Get user input and trim whitespace
    const category = document.getElementById('category-dropdown').value;
    const resultsContainer = document.getElementById('results-container');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Sample data (you can replace this with an API call)
    const data = {
        museum: {
            "kolkata": [ // Use lowercase keys for case insensitivity
                { name: "Indian Museum in Kolkata", image: "images/museum2.jpg" },
                { name: "Victoria Memorial Hall", image: "images/museum3.jpg" }
            ],
            "mumbai": [
                { name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai", image: "images/museum1.jpg" }
            ]
        },
        exhibition: {
            "mumbai": [
                { name: "National Gallery of Modern Art (NGMA) in Mumbai", image: "images/exhibition1.jpeg" }
            ]
        }
    };

    // Check if the city input is empty
    if (!cityInput) {
        resultsContainer.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    // Convert user input to lowercase
    const city = cityInput.toLowerCase();

    // Fetch results based on city and category
    if (data[category] && data[category][city]) {
        data[category][city].forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
            `;
            resultsContainer.appendChild(card);
        });
    } else {
        // If no results found, display a message
        resultsContainer.innerHTML = '<p>No results found. Please try another city.</p>';
    }
});