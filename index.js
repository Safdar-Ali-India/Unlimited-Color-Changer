const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalId;
console.log(randomColor());
const startChangingColor = function () {

    if (!intervalId) {    // console.log('button clicked');
        intervalId = setInterval(changeBgcolor, 1000)
        function changeBgcolor() {
            document.body.style.backgroundColor = randomColor();

        }
    }
}
const stopChangingColor = function () {
    // console.log("clicked")
    if (intervalId) {

        clearInterval(intervalId);
        intervalId = null;

    }
}

const checkerNew = document.querySelector("#start").addEventListener
    ('click', startChangingColor);


document.querySelector("#stop").addEventListener
    ('click', stopChangingColor)

