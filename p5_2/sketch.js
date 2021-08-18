function setup(){
    noCanvas();
    //first param- sets the language and second param- callback function
    let speechRec = new p5.SpeechRec("en-US", gotSpeech);
    let cont = true; //sets continuous to true
    let interim = true; //if set to false, it would wait for you and pauses while continuing. 
    //starts the speechRec
    speechRec.start(cont, interim);
    function gotSpeech(){
        if(speechRec.resultValue){
            //Creates a <p>,/p> element in the DOM with given inner HTML. Used for paragraph text.
            createP(speechRec.resultString);
        }
        console.log(speechRec);
    }
}
