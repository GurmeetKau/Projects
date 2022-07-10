let btn = document.getElementById('btn2')
let img = document.getElementById('btn1')
btn.addEventListener('click', blowBulb)
function blowBulb(a) {
    if(btn.textContent.includes('On'))
    {
        img.src = "bulb2.jpg"
        btn.textContent='Turn Off'
    }
    else{
        img.src = "bulb.jpg"
        btn.textContent='Turn On'
    }
} 