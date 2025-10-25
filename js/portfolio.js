// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryGrid = document.querySelector('.gallery-grid');

    // Ensure web-design button is active by default
    const webDesignButton = document.querySelector('.filter-btn[data-filter="web-design"]');
    if (webDesignButton) {
        webDesignButton.classList.add('active');
    }

    // Function to filter gallery items
    const filterGallery = (filter) => {
        galleryGrid.style.opacity = '0';
        galleryGrid.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            requestAnimationFrame(() => {
                galleryGrid.style.opacity = '1';
                galleryGrid.style.transform = 'translateY(0)';
            });
        }, 300);
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Fade out
            galleryGrid.style.opacity = '0';
            galleryGrid.style.transform = 'translateY(20px)';
            
            // Wait for fade out
            setTimeout(() => {
                // Update visibility
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Fade in
                requestAnimationFrame(() => {
                    galleryGrid.style.opacity = '1';
                    galleryGrid.style.transform = 'translateY(0)';
                });
            }, 300);
        });
    });
});