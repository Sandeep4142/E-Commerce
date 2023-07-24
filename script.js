const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close=document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

let counterElement=document.getElementById('counter')
      
        if(sessionStorage.getItem('counter')!=null && JSON.parse(sessionStorage.getItem('counter'))!='0'){
            let totalCount=parseInt(sessionStorage.getItem('counter'))
            counterElement.innerHTML=totalCount
        }else{
            sessionStorage.setItem('counter',0)
            counterElement.innerHTML=''
        }
            