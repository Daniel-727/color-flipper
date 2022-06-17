// querySelector returns the FIRST element that matches the specified selector
const changeBtn = document.querySelector('button'); //btn now refers to our only button in the html
document.querySelector('.color').innerText = 'white';

/*-----Simple change-----*/
/*-----------------------*/
function simpleChange() {
    
    let colors = ['blue','black','pink','#890435','#135627','657182'];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector('.color').innerText = randomColor;

    document.querySelector('body').style.backgroundColor = randomColor;
}





//default will be simple
changeBtn.addEventListener('click', simpleChange);


/*-----Switch mode-----*/
/*---------------------*/

//John doesn't use javascript to switch modes, he just switches the html and the javascript file

/* const simpleBtn = document.querySelector('.simple');

const hexBtn = document.querySelector('.hex');

simpleBtn.addEventListener('click', () => {
    console.log('simple');
    changeBtn.addEventListener('click', simpleChange);
});

hexBtn.addEventListener('click', () => {
    console.log('hex');
    changeBtn.addEventListener('click', hexChange);
}); */


