const lamp = document.getElementById('lamp');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    // IF LAMP = ON > THEN =
    if (lamp.classList.contains('off')) {
        lamp.classList.remove('off');
        lamp.classList.add('on');
        // = CHANGE IMG
        lamp.src = '../img/yellow_lamp.png';
        // = CHANGE BUTTON TEXT
        button.textContent = 'Turn Off!';
    } else {
        // ADD OPPOSITE
        lamp.classList.remove('on');
        lamp.classList.add('off');
        lamp.src = '../img/white_lamp.png';
        button.textContent = 'Turn On!';
    }
});