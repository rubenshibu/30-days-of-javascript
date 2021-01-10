const synth = window.speechSynthesis;

const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitchValue");

let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.textContent = voice.name + "(" + voice.lang + ")";

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//SPEAKING

const speak = () => {
  if (synth.speaking) {
    console.error("already speaking");
    return;
  }
  if (textInput.value !== "") {
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    speakText.onend = (e) => {
      console.log("sepeaked.............out");
    };

    speakText.onerror = (e) => {
      console.error("error happend");
    };

    //voice

    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      "data-name"
    );

    //looping voices

    voices.forEach((voice) => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });
    //setting pitch and rate

    speakText.rate = rate.value;
    speakText.pitch = pitch.value;
    //speak
    synth.speak(speakText);
  }
};
