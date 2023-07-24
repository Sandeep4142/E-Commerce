console.log("Index Page")
var products = document.getElementsByClassName('pro-image');
Array.from(products).forEach(element=>{
    element.addEventListener('click',()=>{
        var imgsrc=element.src;
        sessionStorage.setItem('imgsrc',imgsrc);
        window.location.href='Sproduct/sproduct.html';
    })
})
var products = document.getElementsByClassName('des');
Array.from(products).forEach(element=>{
    element.addEventListener('click',()=>{
        var pElement=element.parentElement.getElementsByClassName('pro-image')[0]
        var imgsrc=pElement.src;
        sessionStorage.setItem('imgsrc',imgsrc);
        window.location.href='Sproduct/sproduct.html';
    })
})




