const synth = window.speechSynthesis;

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitchValue');


let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
    
    voices.forEach(voice =>{
        const option = document.createElement('option');

        option.textContent = voice.name + '('+ voice.lang +')'

        option.setAttribute('data-lang',voice.lang);
        option.setAttribute('data-name',voice.name);
        voiceSelect.appendChild(option);

    })
};

getVoices();

if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;

}


//SPEAKING


const speak = () => {
    
}

