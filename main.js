Webcam.set({
    width:350,
    height:300,
    image_format : 'pnj',
    png_quality;90
})
camara = document.getElementById("camera");
webcam.attach( '#camera' );
console.log('ml5 version',ml5.version)


function takesnapshot()
{
    webcam.snap(funtion(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageclaffifier('https://teachablemachine.withgoogle.com/models/YtbwHwk7S/model.json',modelLoaded)