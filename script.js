const colorList = ['red', 'green', 'purple', 'yellow', 'steelblue']
const btn = document.getElementById('btn')
const colorText = document.getElementById('color')
const bg = document.getElementById('bg')


function changeBackgroundColor() {
    let color = Math.floor(Math.random() * colorList.length)
    
    colorText.style.color = colorList[color]
    colorText.innerText = colorList[color]
    document.body.style.backgroundColor = colorList[color]
}

btn.addEventListener('click', changeBackgroundColor)