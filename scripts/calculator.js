let input='';
let finalAnswer=0;
let moves=document.querySelector('.js-print');
function print(){
    
    moves.innerHTML=`${input}`;
    
}
function clearc(){
    input="";
    print();
}

function answer(){

finalAnswer=eval(`${input}`);
moves.innerHTML=`${finalAnswer}`
input="";
}