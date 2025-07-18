// ===== VIDEO PLAYER FUNCTIONS =====
function playVimeoVideo(videoId) {
    try {
        const vimeoOverlay = document.getElementById('vimeo-overlay');
        const vimeoPlayer = document.getElementById('vimeo-player');

        if (!vimeoOverlay || !vimeoPlayer) {
            console.error('Video player elements not found');
            return;
        }

        vimeoPlayer.src = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
        vimeoOverlay.style.display = 'flex';

        // Trigger the animations
        vimeoOverlay.style.animation = 'fadeIn 0.5s ease-out forwards';
        const vimeoContainer = document.querySelector('.vimeo-container');
        if (vimeoContainer) {
            vimeoContainer.style.animation = 'scaleUp 0.5s ease-out forwards';
        }
    } catch (error) {
        console.error('Error playing Vimeo video:', error);
    }
}

function closeVimeoVideo() {
    try {
        const vimeoOverlay = document.getElementById('vimeo-overlay');
        const vimeoPlayer = document.getElementById('vimeo-player');

        if (!vimeoOverlay || !vimeoPlayer) {
            console.error('Video player elements not found');
            return;
        }

        vimeoPlayer.src = '';
        vimeoOverlay.style.display = 'none';
    } catch (error) {
        console.error('Error closing Vimeo video:', error);
    }
}

// ===== IMAGE ERROR HANDLING =====
function handleImageError(img) {
    try {
        // If the image fails to load, replace with a placeholder or hide it
        img.style.display = 'none';
        console.warn('Image failed to load:', img.src);
    } catch (error) {
        console.error('Error handling image error:', error);
    }
}

// ===== HERO VIDEO SLIDESHOW =====
function initHeroSlideshow() {
    try {
        const videos = document.querySelectorAll('.hero-video');
        if (videos.length === 0) {
            console.warn('No hero videos found');
            return;
        }
        
        let currentVideoIndex = 0;
        
        function nextVideo() {
            try {
                // Remove active class from current video
                videos[currentVideoIndex].classList.remove('active');
                
                // Move to next video
                currentVideoIndex = (currentVideoIndex + 1) % videos.length;
                
                // Add active class to new video
                videos[currentVideoIndex].classList.add('active');
            } catch (error) {
                console.error('Error in video slideshow:', error);
            }
        }
        
        // Change video every 4 seconds
        setInterval(nextVideo, 4000);
    } catch (error) {
        console.error('Error initializing hero slideshow:', error);
    }
}

// ===== NAVIGATION FUNCTIONS =====
// Navbar toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize hero slideshow
        initHeroSlideshow();
        
        // Handle image errors
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', () => handleImageError(img));
        });
        
        // Mobile navigation
        const burger = document.querySelector('.burger');
        if (burger) {
            burger.addEventListener('click', function() {
                try {
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks) {
                        navLinks.classList.toggle('nav-active');
                    }
                } catch (error) {
                    console.error('Error toggling navigation:', error);
                }
            });
        }
        
        // Keyboard navigation for video player
        document.addEventListener('keydown', function(event) {
            try {
                const vimeoOverlay = document.getElementById('vimeo-overlay');
                if (vimeoOverlay && vimeoOverlay.style.display === 'flex') {
                    if (event.key === 'Escape') {
                        closeVimeoVideo();
                    }
                }
            } catch (error) {
                console.error('Error handling keyboard navigation:', error);
            }
        });
        
        // Handle navigation links for clean URLs
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                try {
                    const href = this.getAttribute('href');
                    if (href === '/about') {
                        e.preventDefault();
                        window.location.href = 'about.html';
                    } else if (href === '/') {
                        e.preventDefault();
                        window.location.href = 'index.html';
                    }
                } catch (error) {
                    console.error('Error handling navigation:', error);
                }
            });
        });
        
        // Handle logo click
        const logoLink = document.querySelector('.logo a');
        if (logoLink) {
            logoLink.addEventListener('click', function(e) {
                try {
                    const href = this.getAttribute('href');
                    if (href === '/') {
                        e.preventDefault();
                        window.location.href = 'index.html';
                    }
                } catch (error) {
                    console.error('Error handling logo navigation:', error);
                }
            });
        }
    } catch (error) {
        console.error('Error initializing page:', error);
    }
});
