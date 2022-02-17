document.getElementById("getvoice").onclick=function(){
    var synth= window.speechSynthesis;
    speak_data="If you play  Dog barking sound then the Dog will dance"
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer,2000);
}
function Timer(){
    var synth= window.speechSynthesis;
    speak_data="  If you  play Tiger growling sound then  the tiger will dance."
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer2,2000);
}
function Timer2(){
    var synth= window.speechSynthesis;
    speak_data=" If you play cat meow sound then  the cat will dance. "
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer3,2000);
}
function Timer3(){
    var synth= window.speechSynthesis;
    speak_data=" If you play Lion roaring sound then the Lion will dance.  "
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer4,2000);
}
function Timer4(){
    var synth= window.speechSynthesis;
    speak_data="If your background voice is only audible then every animal will dance together "
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}
document.getElementById("download").onclick=function(){
    window.location="download.html";
}