export function progressBar() {
    var width = 0;
    const id = setInterval((e) => {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            document.querySelector('.progress-bar').style.width = width + '%';
        }
    }, 15);
}
