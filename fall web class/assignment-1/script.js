const butt1 = document.getElementById('butt1')
const butt2 = document.getElementById('butt2')
const butt3 = document.getElementById('butt3')
const butt4 = document.getElementById('butt4')
const butt5 = document.getElementById('butt5')

const div = document.getElementById('spacer')

butt1.addEventListener('click', () => {
    butt1.style.backgroundColor = '#ff0000'
    butt1.style.width = '500px'
    butt1.style.height = '300px'
    butt1.textContent = 'WRONG'
    butt1.style.fontSize = '50px'
})

butt2.addEventListener('mouseover', () => {
    butt2.style.backgroundColor = '#ff0000'
    butt2.style.width = '500px'
    butt2.style.height = '300px'
    butt2.textContent = "don't even think about clicking this one"
    butt2.style.fontSize = '50px'
})

butt3.addEventListener('mouseover', () => {
    div.style.display = 'block';
    butt3.style.backgroundColor = '#ff0000'
    butt3.style.width = '500px'
    butt3.style.height = '300px'
    butt3.textContent = "WHERE DID MY OTHER BUTTONS GO"
    butt3.style.fontSize = '50px'
})

butt4.addEventListener('click', () => {
    butt4.style.backgroundColor = '#ff0000'
    butt4.style.width = '500px'
    butt4.style.height = '300px'
    butt4.textContent = 'okay you found the other buttons but STILL WRONG'
    butt4.style.fontSize = '50px'
})

butt5.addEventListener('click', () => {
    butt5.style.backgroundColor = '#ff0000'
    butt5.style.width = '500px'
    butt5.style.height = '300px'
    butt5.textContent = "you failed! (but hopefully I didn't)"
    butt5.style.fontSize = '50px'
})
