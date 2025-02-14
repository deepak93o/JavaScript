//generate a random color

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor())
let interval;
const startColorChng = function() {

    if (!interval) {
        interval = setInterval(changeBgColor, 300);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}
const stopColorChng = function() {
    clearInterval(interval);
    interval = null;
};

document.querySelector('#start').addEventListener('click', startColorChng);

document.querySelector('#stop').addEventListener('click', stopColorChng);