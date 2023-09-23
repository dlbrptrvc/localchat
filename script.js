let previousChats = ''
const chatPing = setInterval(chatUpdate,1000)

function chatUpdate(){
    let chatBox = document.getElementById('chatBox')
    if (window.localStorage.getItem('previousChats')) {
        previousChats = window.localStorage.getItem('previousChats')
        if (previousChats == chatBox.innerHTML) {console.log('no change')}
        else {chatBox.innerHTML = previousChats}
    }
}

function sendText(){
    let textEntry = document.getElementById('textEntry')

    if (window.localStorage.getItem('previousChats')) {
        previousChats = window.localStorage.getItem('previousChats')
        window.localStorage.setItem('previousChats',previousChats+textEntry.value)
    }
    else {window.localStorage.setItem('previousChats',textEntry.value)}
    
    // console.log("I've still got it!")
}