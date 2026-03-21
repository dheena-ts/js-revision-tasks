
const searchBox = document.getElementById('searchBox');
const articlesList = document.getElementById('articlesList');
const originalItems = Array.from(articlesList.querySelectorAll('li')).map(li => li.textContent);


searchBox.addEventListener('input', () => {
    const query = searchBox.value.trim();
    articlesList.innerHTML = '';

    originalItems.forEach(text => {
        if (query === '' || text.toLowerCase().includes(query.toLowerCase())) {


            const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${safeQuery})`, 'gi');
            
            const highlighted = query ? text.replace(regex, '<mark>$1</mark>') : text;

            const li = document.createElement('li');
            li.innerHTML = highlighted;
            articlesList.appendChild(li);
        }
    });
});