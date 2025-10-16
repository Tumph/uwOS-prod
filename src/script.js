document.addEventListener('DOMContentLoaded', () => {
        const searchBar = document.querySelector('.search-bar');
        const clearSearch = document.querySelector('.clear-search');
        const appIcons = document.querySelectorAll('.app-icon');
        
        // Add click event listeners to all app icons
        appIcons.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const url = link.getAttribute('href');
                
                // Use the Electron API to navigate
                if (window.electronAPI && typeof window.electronAPI.navigateToUrl === 'function') {
                    window.electronAPI.navigateToUrl(url);
                } else {
                    console.error('Electron API not available');
                }
            });
        });
        
        // Filter apps based on search input
        function filterApps(searchText) {
            const searchLower = searchText.toLowerCase();
            
            // Show/hide clear button
            if (searchText.length > 0) {
                clearSearch.style.display = 'block';
            } else {
                clearSearch.style.display = 'none';
            }
            
            appIcons.forEach(appIcon => {
                const appName = appIcon.querySelector('.app-name').textContent.toLowerCase();
                if (searchText === '' || appName.startsWith(searchLower)) {
                    appIcon.style.opacity = '1';
                    appIcon.style.transform = 'scale(1)';
                    // Use setTimeout to prevent immediate display:none on matched items
                    setTimeout(() => {
                        if (appIcon.style.opacity === '1') {
                            appIcon.style.display = 'flex';
                        }
                    }, 50);
                } else {
                    appIcon.style.opacity = '0';
                    appIcon.style.transform = 'scale(0.8)';
                    // Hide element after transition completes
                    setTimeout(() => {
                        if (appIcon.style.opacity === '0') {
                            appIcon.style.display = 'none';
                        }
                    }, 300);
                }
            });
        }
        
        // Listen for input in search bar
        searchBar.addEventListener('input', (e) => {
            filterApps(e.target.value);
        });
        
        // Handle clear button click
        clearSearch.addEventListener('click', () => {
            searchBar.value = '';
            filterApps('');
            searchBar.focus();
        });
        
        // Clear search when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchBar.contains(e.target) && !clearSearch.contains(e.target)) {
                searchBar.value = '';
                filterApps('');
            }
        });
        
        // Prevent clicks inside the search bar from propagating
        searchBar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Prevent clicks on clear button from propagating
        clearSearch.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
