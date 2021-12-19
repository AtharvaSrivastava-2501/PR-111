Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">';
});
}

console.log("ml5 version :",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9T7CbZiyW/model.json',model_loaded);

function model_loaded(){
    console.log("model_loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="The Prediction Is "+prediction;
    synth.speak(speak_data);
}