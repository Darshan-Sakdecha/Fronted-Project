//This is a constructor - it works to convert text to speech in web browsers.

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  //here getVoices() provide random voice in audio format.
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];


  //Get Voices Name in DropDown.
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})


document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  //here speak() is convert text to speech(audio)
  //here window object is used because this SpeechSynthesisUtterance() constuctor.
  window.speechSynthesis.speak(speech);
});
