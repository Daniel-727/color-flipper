// querySelector returns the FIRST element that matches the specified selector
const changeBtn = document.querySelector('button'); //btn now refers to our only button in the html
document.querySelector('.color').innerText = 'white';


/*------Hex change------*/
/*----------------------*/
function hexChange() {

    const hexDigits = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    let randomColor = '#';

    for(i = 0; i < 6; i ++){
        randomColor += hexDigits[Math.floor(Math.random() * hexDigits.length)];
    }

    

    console.log(randomColor);

    document.querySelector('.color').innerText = randomColor;

    document.querySelector('body').style.backgroundColor = randomColor;
}

changeBtn.addEventListener('click', hexChange);