function changeColor(color_) {
    document.getElementsByTagName('section')[0].style.backgroundColor = color_;
}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime'];
function colorRotate() {
    while (true) {
        for (color of colors) {
            sleep(500).then(() => {
                changeColor(color);
            });
        }
    }
};


document.addEventListener('load', colorRotate);
