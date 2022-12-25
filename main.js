Webcam.set({
    width: 340,
    height: 300,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById("Camera");
Webcam.attach('#Camera');

function Capture(){
    Webcam.snap(function(data_uri) 
    {
    document.getElementById("Result").innerHTML = "<img id='result' src=" + data_uri + " style='width:350; height: 300;'>";
    });
 }

 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EcgmZ639P/model.json", modelLoaded);
 
 function modelLoaded()
 {
    console.log("modelLoaded");
 }