function changeColor(color_) {
    document.getElementsByTagName('section')[0].style.backgroundColor = color_;
}

colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime'];
function colorRotate() {
    while (true) {
        for (color of colors) {
            setTimeout(changeColor(color), 100);
        }
    }
};


document.addEventListener('load', colorRotate);
