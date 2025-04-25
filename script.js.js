// Typing Test
let startTime;
document.getElementById('start-test').addEventListener('click', () => {
    startTime = new Date();
    document.getElementById('user-input').value = '';
    document.getElementById('user-input').focus();
});

document.getElementById('user-input').addEventListener('input', () => {
    const sampleText = document.getElementById('sample-text').textContent;
    const userInput = document.getElementById('user-input').value;
    
    if (userInput === sampleText) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000 / 60;
        const words = userInput.split(' ').length;
        const wpm = Math.round(words / timeTaken);
        const accuracy = 100;
        const result = `WPM: ${wpm}, एक्यूरेसी: ${accuracy}%`;
        document.getElementById('result').textContent = result;
        
        localStorage.setItem('latestResult', result);
    }
});

// Audio Test
document.getElementById('submit-audio').addEventListener('click', () => {
    const audioInput = document.getElementById('audio-input').value;
    const result = `जमा किया: "${audioInput}" (स्कोरिंग जल्द आएगा)`;
    document.getElementById('audio-result').textContent = result;
    localStorage.setItem('latestAudioResult', result);
});

// Test Series
function startTest(testId) {
    if (testId === 3) {
        window.location.href = 'index.html#audio-test';
    } else {
        window.location.href = 'index.html#typing-test';
    }
}