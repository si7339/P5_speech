function setup(){
    createCanvas(400, 400);
    let speech = new p5.Speech();
    speech.started(start);
    speech.ended(ended);
    function start(){
        background(0, 0, 255);
    }
    
    function ended(){
        background(0);
    }
 
    speech.onLoad = voiceReady;
    //speech.speak("Sham is the GOAT");
    function voiceReady(){
        console.log(speech.voices);
    }
    speech.onLoad = function (){
    speech.setVoice("Moira");
    speech.setRate(1);
    speech.setPitch(1);
    speech.speak("Sham is the GOAT");
    }

}