var MainImg = document.getElementById("MainImg");
var prod=sessionStorage.getItem('imgsrc');
MainImg.src=prod;

/////////

var smallimg = document.getElementsByClassName("small-img");
Array.from(smallimg).forEach(element=>{
    element.addEventListener('click',()=>{
        MainImg.src=element.src;
    })
})

////////////////

var productImg = document.getElementsByClassName('pro-image');
Array.from(productImg).forEach(element=>{
    element.addEventListener('click',()=>{
        var imgsrc=element.src;
        sessionStorage.setItem('imgsrc',imgsrc);
        MainImg.src=sessionStorage.getItem('imgsrc');
        window.scrollTo({top:0,behavior:"smooth"});
        //window.scrollTo(0,0);
    })
})
var productDesc = document.getElementsByClassName('desc');
Array.from(productDesc).forEach(element=>{
    element.addEventListener('click',()=>{
        var pElement=element.parentElement.getElementsByClassName('pro-image')[0]
        var imgsrc=pElement.src;
        sessionStorage.setItem('imgsrc',imgsrc);
        MainImg.src=sessionStorage.getItem('imgsrc');
        window.scrollTo({top:0,behavior:"smooth"});
        //window.scrollTo(0,0);
    })
})

//////////

//ON CLICKING ADD TO CART 

if(sessionStorage.getItem('cartProducts')==null){
    var product=[]
}else{
    var product=JSON.parse(sessionStorage.getItem('cartProducts'));
}

let addTocartBtn=document.getElementsByClassName('addTocart-btn')[0];

addTocartBtn.addEventListener('click',addTocart)

function addTocart(){

    let parentProd=addTocartBtn.parentElement

    let prodImgsrc=sessionStorage.getItem('imgsrc');
    let prodName=parentProd.getElementsByClassName('pro-name')[0]
    let prodPrice=parentProd.getElementsByClassName('pro-price')[0]

    // checkDuplicate(prodImg.src);

    var proDetails={
        pImage:prodImgsrc,
        pName:prodName.innerText,
        pPrice:prodPrice.innerText
    }
    product.push(proDetails)

    sessionStorage.setItem('cartProducts',JSON.stringify(product))
    addTocartBtn.innerText="Added To Cart"
    addTocartBtn.style.backgroundColor='red'

    // update counter
    let totalCount=parseInt(sessionStorage.getItem('counter'))+1
    sessionStorage.setItem('counter',totalCount)
    counterElement.innerHTML=totalCount
}






