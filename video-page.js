document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-wrapper');
    const videoDescription = document.getElementById('video-description');

    // Get the video ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    // Vimeo API Access Token (replace with your own)
    const accessToken = 'YOUR_VIMEO_ACCESS_TOKEN';

    // Fetch video details from Vimeo API
    fetch(`https://api.vimeo.com/videos/${videoId}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Embed the video
        const iframe = document.createElement('iframe');
        iframe.src = `https://player.vimeo.com/video/${videoId}`;
        iframe.width = '100%';
        iframe.height = '450';
        iframe.setAttribute('allow', 'autoplay; fullscreen');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', true);
        videoContainer.appendChild(iframe);

        // Display the video description
        videoDescription.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.description}</p>
            <p><strong>Duration:</strong> ${Math.floor(data.duration / 60)} minutes ${data.duration % 60} seconds</p>
            <p><strong>Published on:</strong> ${new Date(data.release_time).toLocaleDateString()}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching video data:', error);
        videoDescription.innerHTML = `<p>Sorry, we couldn't load the video details. Please try again later.</p>`;
    });
});
