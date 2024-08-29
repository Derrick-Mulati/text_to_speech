document.getElementById('speakButton').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});
