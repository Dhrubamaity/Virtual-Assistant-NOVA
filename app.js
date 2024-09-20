let btn = document.querySelector("button")
let content = document.querySelector("h5")

function speak(text) {
    let textSpeak = new SpeechSynthesisUtterance(text)
    textSpeak.rate = 1
    textSpeak.pitch = 1
    textSpeak.volume = 1
    window.speechSynthesis.speak(textSpeak)
}

function wish() {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    if (hour >= 4 && hour < 12) {
        speak(`good morning sir, its ${hour}:${minute}`)
    }
    if (hour >= 12 && hour < 17) {
        speak(`good afternoon sir, its ${hour}:${minute}`)
    }
    if (hour >= 17 && hour < 20) {
        speak(`good evening sir, its ${hour}:${minute}`)
    }
    else {
        speak(`good night sir, its ${hour}:${minute}`)
    }
    let time = hour + " " + minute
    return time
}

window.addEventListener("load", () => {
    // wish()
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let speech = new speechRecognition()
speech.onresult = (event) => {
    let speechText = event.results[0][0].transcript.toLowerCase()
    content.innerText = speechText
    takeCommand(speechText)
}

btn.addEventListener("click", () => {
speech.start()
})

function takeCommand(query) {
    if (query.includes("hey nova") || query.includes("hello nova") || query.includes("hi nova")) {
        speak("hello boss , how can i help you ?")
    }
    else if (query.includes("thank") || query.includes("thanks")) {
        speak("wellcome boss")
    }
    else if (query.includes("who are you")) {
        speak("i am nova, a virtual assistant , created by Dhruba")
    }
    else if (query.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (query.includes("open insta") || query.includes("open instagram")) {
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if (query.includes("open linkedin")) {
        speak("opening linkedin")
        window.open("https://www.linkedin.com/feed/")
    }
    else if (query.includes("open fb") || query.includes("open facebook")) {
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if (query.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.co.in/")
    }
    else if (query.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (query.includes("open figma")) {
        speak("opening figma")
        window.open("figma://")
    }
    else if (query.includes("open vs code")||query.includes("open vscode")) {
        speak("opening vscode")
        window.open("vscode://")
    }
    else if (query.includes("open wp") || query.includes("open whatsapp")) {
        speak("opening whats-app")
        window.open("https://web.whatsapp.com/")
    }
    else if (query.includes("open my tab") || query.includes("open my tabs")) {
        speak("opening your tabs")
        // window.open("https://web.whatsapp.com/")
        window.open("https://www.apnacollege.in/start"),
        window.open("https://developer.mozilla.org/en-US/"),
        window.open("https://chatgpt.com/"),
        window.open("https://www.youtube.com/"),
        window.open("https://github.com/Dhrubamaity")
    }
    else if (query.includes("time")) {
        let time = new Date().toLocaleString("en-US", {
            hour: 'numeric',
            minute: 'numeric',
        });
        speak(`now the time is ${time}`)
    }
    else if (query.includes("date")) {
        let time = new Date().toLocaleString("en-US", {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });
        speak(`today is ${time}`)
    }
    else {
        finalquery = query.replace("nova", "")
        speak(`there are some result in internat regarding ${finalquery}`)
        window.open(`https://www.google.com/search?q=${finalquery}`)
    }

}
