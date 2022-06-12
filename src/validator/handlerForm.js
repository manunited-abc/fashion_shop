export function addShake() {
    const validates = document.querySelectorAll('.validation');
    for (const x of validates) {
        x.classList.add('shake-validate');
        setTimeout(() => x.classList.remove('shake-validate'), 800);
    }
}
