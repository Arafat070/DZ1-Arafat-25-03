const eMailInput = document.querySelector('#eMailInput')
const eMailCheck = document.querySelector('#eMailCheck')
const eMailResult = document.querySelector('.eMailResult')
const eMailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

eMailCheck.onclick = () => {
    if (eMailRegexp.test(eMailInput.value)){
        eMailResult.innerHTML = 'OK'
        eMailResult.style.color = 'green'
    }else {
        eMailResult.innerHTML = 'NOT OK'
        eMailCheck.style.color = 'red'
    }
}
const smallBlock = document.getElementById("smallBlock");
const bigBlock = document.getElementById("bigBlock");
let position = 0;
let direction = 1;

function moveBlock() {
    position += direction;
    smallBlock.style.left = position + "px";
    if (position === 450 || position === 0) {
        direction = -direction;
    }
    requestAnimationFrame(moveBlock);
}

moveBlock(bigBlock);



