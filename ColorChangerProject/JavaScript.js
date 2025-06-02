const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    // const id = e.target.id;
    switch (e.target.id){
        case 'yellow':
            body.style.backgroundColor = "yellow";
            break;
        case 'darkslategray':
            body.style.backgroundColor = "darkslategray";
            break;
        case 'tomato':
            body.style.backgroundColor = "tomato";
            break;
        case 'crimson':
            body.style.backgroundColor = 'crimson';
            break;
        case 'cornflowerblue':
            body.style.backgroundColor = 'cornflowerblue';
            break;
        case 'fuchsia':
            body.style.backgroundColor = 'fuchsia';
            break;
        default:
            body.style.backgroundColor = "white";
    }    
})
});