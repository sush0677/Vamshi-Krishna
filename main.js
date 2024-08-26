document.addEventListener('DOMContentLoaded', function() {
    // Handle Burger Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});

/**
 * Navigate to the video page with the given Vimeo video ID.
 * @param {string} videoId - The Vimeo video ID.
 */
function navigateToVideoPage(videoId) {
    window.location.href = `video-page.html?videoId=${videoId}`;
}
