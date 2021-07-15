let mic = document.getElementById('mic');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition 

const recognition = new SpeechRecognition();

let innerMessage = document.getElementById('inner_message');

function userMessage(message){
    let u = document.createElement('div');
    u.classList.add('user', 'chatarea');
    u.appendChild(document.createTextNode(message));
    innerMessage.appendChild(u);

}

function robotMessage(message){
    let u = document.createElement('div');
    u.classList.add('bot', 'chatarea');
    u.appendChild(document.createTextNode(message));
    innerMessage.appendChild(u);

}

function robotVoice(message){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry I didn't get You!";
    if(message.includes("who are you")){
        speech.text="I am Robot3.0";
    }
    if(message.includes("hello")){
        speech.text = "Hello!";
    }
    if(message.includes("what you like the most")){
        speech.text="I like helping you";
    }
    if(message.includes("let's play cricket")){
        speech.text = "Yes sure";
    }
    if(message.includes("will you be my love")){
        speech.text="I prefer to be single";
    }
    if(message.includes("what's the day")){
        let date=new Date();
        let day=date.getDay();
        if(day==0){
            speech.text="Today is Sunday"
        }
        if(day==1){
            speech.text="Today is Monday"
        }
        if(day==2){
            speech.text="Today is Tuesday"
        }
        if(day==3){
            speech.text="Today is Wednesday"
        }
        if(day==4){
            speech.text="Today is Thursday"
        }
        if(day==5){
            speech.text="Today is Friday"
        }
        if(day==6){
            speech.text="Today is Saturday"
        }
    }
    if(message.includes("who is Sandeep")){
        speech.text="He is my friend";
    }
    if(message.includes("will you be my friend")){
        speech.text = "ohh I am waiting for that";
    }
    if(message.includes("how are you")){
        speech.text = "I am doing good";
    }
    if(message.includes("what's the time")){
        let date=new Date();
        let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        speech.text = time;
    }
    if(message.includes("what's the date")){
        let date=new Date();
        let d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
        speech.text = d;
    }
    if(message.includes("good morning")){
        speech.text="Good Morning";
    }
    if(message.includes("good afternoon")){
        speech.text = "Good Afternoon";
    }
    if(message.includes("good night")){
        speech.text = "Good Night";
    }
    
    window.speechSynthesis.speak(speech);
    robotMessage(speech.text);
}

recognition.onresult=function(e){
    console.log(e);
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    console.log(transcript);
    userMessage(transcript);
    robotVoice(transcript);
}

recognition.onend = function(){
    mic.style.background="white";
}

mic.addEventListener("click", function(){
    recognition.start();
    console.log("Activated");
    mic.style.background="#7ea7b1";
})