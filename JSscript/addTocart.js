// add to cart
if(sessionStorage.getItem('cartProducts')==null){
    var product=[]
}else{
    var product=JSON.parse(sessionStorage.getItem('cartProducts'));
}

let cartBtn = document.getElementsByClassName('fa-cart-shopping cart')

Array.from(cartBtn).forEach(element=>{
    element.addEventListener('click',()=>{
    let span=element.parentElement
    let parentProd=span.parentElement

    let prodImg=parentProd.getElementsByClassName('pro-image')[0]
    let prodName=parentProd.getElementsByClassName('pro-name')[0]
    let prodPrice=parentProd.getElementsByClassName('pro-price')[0]

    // checkDuplicate(prodImg.src);

    var proDetails={
        pImage:prodImg.src,
        pName:prodName.innerText,
        pPrice:prodPrice.innerText
    }
    product.push(proDetails)

    sessionStorage.setItem('cartProducts',JSON.stringify(product))
    span.innerText="Added To Cart"

    // update counter
    let totalCount=parseInt(sessionStorage.getItem('counter'))+1
    sessionStorage.setItem('counter',totalCount)
    counterElement.innerHTML=totalCount
    })
})

function checkDuplicate(prodImage){
    let cart=sessionStorage.getItem('cartProducts')
    cart=JSON.parse(cart)
    if (Array.isArray(cart) && cart.length){
        cart.forEach(element=>{
        
        let pImage=element.pImage
        console.log(prodImage,pImage)
        if(prodImage==pImage){
            alert('This item is already added to the cart')
            return
        }
    })
    }
}


// Not working

// function storeProduct(element){
//     let parentProd=element.parentElement
//     console.log(element)
//     console.log(parentProd)
//     let prodImg=parentProd.getElementsByClassName('pro-image')[0]
//     let prodName=parentProd.getElementsByClassName('pro-name')[0]
//     let prodPrice=parentProd.getElementsByClassName('pro-price')[0]

//     let proDetails={
//         pImage:prodImg.src,
//         pName:prodName.innerText,
//         pPrice:parseFloat(prodPrice.innerText.replace('$',''))
//     }
//     console.log(proDetails)
// }
