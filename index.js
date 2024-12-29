const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());
const startChangingColor = function () {
    console.log( 'button clicked');
    document.body.style.backgroundColor = randomColor();
}
const stopChangingColor = function () {

}

const checkerNew = document.querySelector("#start").addEventListener
    ('click', startChangingColor);
    
    
document.querySelector("#stop").addEventListener
    ('click', stopChangingColor)

