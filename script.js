const newsData = [
    {
        id: 1,
        title: "India vs Australia: Kohli's Masterclass Seals Victory in Perth",
        excerpt: "Virat Kohli scored a magnificent 120 off just 85 balls to guide India to a comfortable win in the first ODI against Australia.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Virat_Kohli_batting_2013.jpg",
        category: "cricket",
        source: "ESPNcricinfo",
        time: "2 hours ago"
    },
    {
        id: 2,
        title: "Champions League: Real Madrid Stuns Man City in Thriller",
        excerpt: "A late goal from Vinicius Jr. ensured Real Madrid advanced to the semi-finals after a 4-3 aggregate win over Manchester City.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018_(1).jpg",
        category: "football",
        source: "Goal.com",
        time: "4 hours ago"
    },
    {
        id: 3,
        title: "Djokovic Announces Retirement Plans After Grand Slam Win",
        excerpt: "The Serbian legend hinted that this might be his last season on the tour after lifting his 25th Grand Slam title.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Novak_Djokovic_Queen%27s_Club_2018.jpg",
        category: "tennis",
        source: "Tennis World",
        time: "5 hours ago"
    },
    {
        id: 4,
        title: "T1 Wins League of Legends World Championship 2025",
        excerpt: "Faker lifts the trophy for the fifth time as T1 dominates the grand finals against Gen.G in Seoul.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/League_of_Legends_World_Championship_2017_Finals.jpg",
        category: "esports",
        source: "Win.gg",
        time: "1 hour ago"
    },
    {
        id: 5,
        title: "IPL Auction 2026: Pant Becomes Most Expensive Player Ever",
        excerpt: "Rishabh Pant broke all records as he was sold for a whopping 28 Crores to Punjab Kings in the mega auction.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rishabh_Pant_(29693622367)_(cropped).jpg",
        category: "cricket",
        source: "Cricbuzz",
        time: "30 mins ago"
    },
    {
        id: 6,
        title: "Messi to Return to Barcelona for Farewell Match",
        excerpt: "Lionel Messi will don the Blaugrana colors one last time in a tribute match scheduled for next summer at the Camp Nou.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Messi_Barcelona_-_Valladolid_(cropped).jpg?width=640",
        category: "football",
        source: "Fabrizio Romano",
        time: "6 hours ago"
    }
];

const newsFeed = document.getElementById('newsFeed');
const categoryItems = document.querySelectorAll('.category-item');

function createNewsCard(news) {
    return `
        <article class="news-card">
            <div class="news-image-container">
                <img src="${news.image}" alt="${news.title}" class="news-img">
            </div>
            <div class="news-content">
                <div>
                    <div class="news-meta-top">
                        <span class="tag">${news.category}</span>
                        <span class="source">• ${news.source}</span>
                    </div>
                    <h2 class="news-title">${news.title}</h2>
                    <p class="news-excerpt">${news.excerpt}</p>
                </div>
                <div class="news-footer">
                    <span>${news.time}</span>
                    <div class="read-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>4 min read</span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function renderNews(category = 'all') {
    newsFeed.innerHTML = '';

    const filteredNews = category === 'all'
        ? newsData
        : newsData.filter(news => news.category === category);

    if (filteredNews.length === 0) {
        newsFeed.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No news found for this category.</p>';
        return;
    }

    filteredNews.forEach(news => {
        newsFeed.innerHTML += createNewsCard(news);
    });
}

// Event Listeners
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all
        categoryItems.forEach(nav => nav.classList.remove('active'));
        // Add active to clicked
        item.classList.add('active');

        const category = item.dataset.category;
        renderNews(category);
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderNews();
});
