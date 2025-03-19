const botton=document.querySelectorAll('.color');
const body=document.querySelector('body');

botton.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
       // console.log(e.target);
        if(e.target.id==='red'){
            body.style.backgroundColor='red';
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor='yellow';
        }
        if(e.target.id==='green'){
            body.style.backgroundColor='green';
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor='blue';
        }
    })
    
})