const videoElement = document.getElementById('video');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

async function selectMedia() {
    //we set up a constant that will have our data to display.
    try {
        let mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
        console.log(videoElement.srcObject)

    } catch (error) {
        console.log('Error in getting media to display');

    }
}

button1.addEventListener('click', async () => {
    button1.disabled = true;
    await selectMedia();
    if (videoElement.srcObject !==  null) {
        button1.style.display = 'none';
        button2.style.display = 'block';
    }
})

button2.addEventListener('click', async () => {
    await videoElement.requestPictureInPicture();
    button2.style.display = 'none';
    button3.style.display = 'block';
})

button3.addEventListener('click', async() => {
    window.location.reload()
})


