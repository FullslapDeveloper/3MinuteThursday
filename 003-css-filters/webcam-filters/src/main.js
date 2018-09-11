
const video = document.getElementById('webcam');

window.navigator.webkitGetUserMedia({video: true, audio: false}, (stream) => {
        video.src = window.webkitURL.createObjectURL(stream);
    }, (err) => {
        console.log('Unable to get video API')
    }
);

const setListener = () => {
    const pictureBtn = document.getElementById('takePictureBtn');

    pictureBtn.addEventListener('click', () => {
        const currentVideo = document.getElementById('webcam'),
            picture = document.getElementById('picture'),
            canvas = document.createElement('canvas');
        
        canvas.width = currentVideo.clientWidth;
        canvas.height = currentVideo.clientHeight;

        const canvasContext = canvas.getContext('2d');
        canvasContext.drawImage(currentVideo, 0, 0, canvas.width, canvas.height);

        const image = document.createElement('img');
        image.src = canvas.toDataURL('image/png');
        

        picture.appendChild(image);

    });
};

setListener();