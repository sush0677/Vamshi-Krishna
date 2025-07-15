// ===== VIDEO PLAYER FUNCTIONS =====
function playVimeoVideo(videoId) {
    const vimeoOverlay = document.getElementById('vimeo-overlay');
    const vimeoPlayer = document.getElementById('vimeo-player');

    vimeoPlayer.src = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    vimeoOverlay.style.display = 'flex';

    // Trigger the animations
    vimeoOverlay.style.animation = 'fadeIn 0.5s ease-out forwards';
    const vimeoContainer = document.querySelector('.vimeo-container');
    vimeoContainer.style.animation = 'scaleUp 0.5s ease-out forwards';
}

function closeVimeoVideo() {
    const vimeoOverlay = document.getElementById('vimeo-overlay');
    const vimeoPlayer = document.getElementById('vimeo-player');

    vimeoPlayer.src = '';
    vimeoOverlay.style.display = 'none';
}

// ===== HERO VIDEO SLIDESHOW =====
function initHeroSlideshow() {
    const videos = document.querySelectorAll('.hero-video');
    let currentVideoIndex = 0;
    
    function nextVideo() {
        // Remove active class from current video
        videos[currentVideoIndex].classList.remove('active');
        
        // Move to next video
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        
        // Add active class to new video
        videos[currentVideoIndex].classList.add('active');
    }
    
    // Change video every 4 seconds
    setInterval(nextVideo, 4000);
}

// ===== NAVIGATION FUNCTIONS =====
// Navbar toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slideshow
    initHeroSlideshow();
    
    // Mobile navigation
    const burger = document.querySelector('.burger');
    if (burger) {
        burger.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('nav-active');
        });
    }
});
