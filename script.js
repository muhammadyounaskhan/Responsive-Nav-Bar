var burg = document.querySelector('.burger');
var nav  = document.querySelector('.nav-links');
var navCheck = 0;
burg.addEventListener('click',burgerClicked);

function burgerClicked(){
    console.log('burger CLicked');
    nav.style.transform = 'translateX(0%)';
    if(navCheck==1){
        navCheck =0;
    }
    else{
        navCheck = 1;
    }
    
} 
if(navCheck==1){
    burg.addEventListener('click',burgerClicked);
}