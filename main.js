document.addEventListener('DOMContentLoaded', function() {
    // Handle Burger Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Video Embedding Logic
    const videoContainer = document.getElementById('video-container');
    const videos = [
        '990651067', '753857953', '809745902', '990646121', 
        '990647179', '810177972', '990644417', '990642971', 
        '990640098', '990640639', '990638560', '990635935', 
        '933588683', '990631306', '807264466', '809744558', 
        '881726924'
    ];

    videos.forEach((videoId, index) => {
        const videoWrapper = createVideoWrapper(videoId, `Video ${index + 1}`);

        videoWrapper.addEventListener('click', () => {
            window.location.href = `video-page.html?videoId=${videoId}`;
        });

        videoContainer.appendChild(videoWrapper);
    });
});

/**
 * Creates a wrapper element for a video, including an iframe and an overlay.
 * @param {string} videoId - The Vimeo video ID.
 * @param {string} overlayText - The text to display on hover.
 * @return {HTMLElement} - The video wrapper element.
 */
function createVideoWrapper(videoId, overlayText) {
    const videoWrapper = document.createElement('div');
    videoWrapper.classList.add('video-wrapper');

    const iframe = document.createElement('iframe');
    iframe.src = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=0&muted=0`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.setAttribute('allow', 'autoplay; fullscreen');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', true);

    const overlay = createOverlay(overlayText);

    videoWrapper.appendChild(iframe);
    videoWrapper.appendChild(overlay);

    // Add hover effect to show overlay and highlight video
    videoWrapper.addEventListener('mouseover', () => {
        overlay.style.opacity = '1'; // Show overlay on hover
        iframe.style.filter = 'brightness(50%)'; // Dim the video for better text visibility
    });

    videoWrapper.addEventListener('mouseout', () => {
        overlay.style.opacity = '0'; // Hide overlay when not hovering
        iframe.style.filter = 'brightness(100%)'; // Reset video brightness
    });

    return videoWrapper;
}

/**
 * Creates an overlay div with video information.
 * @param {string} overlayText - The text to display on hover.
 * @return {HTMLElement} - The overlay div.
 */
function createOverlay(overlayText) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerText = overlayText; // Customizable text
    return overlay;
}
