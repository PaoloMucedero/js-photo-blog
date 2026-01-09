function showFullScreen(imgElement) {
    if (imgElement.requestFullscreen) {
        imgElement.requestFullscreen();
    } else if (imgElement.webkitRequestFullscreen) { /* Safari support */
        imgElement.webkitRequestFullscreen();
    } else if (imgElement.msRequestFullscreen) { /* IE11 support */
        imgElement.msRequestFullscreen();
    }
}


