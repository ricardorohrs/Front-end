const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
    const input = e. target.value
    const length = input.length
    const blurValue = 27 - length * 2
    background.style.filter = `blur(${blurValue}px)`

});

function aviso() {
	alert("Coloque a senha. Isso é apenas um teste front-end!");
}