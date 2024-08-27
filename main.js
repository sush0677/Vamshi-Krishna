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
