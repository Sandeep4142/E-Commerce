console.log("Welcome to Cart")

    ///display/hide empty cart

    checkEmptyCart();

    function checkEmptyCart(){
        
        if(JSON.parse(sessionStorage.getItem('counter'))!=null && JSON.parse(sessionStorage.getItem('counter'))>0){
            emptyCart.style.display='none';
        }else{
            emptyCart.style.display='block';
        }
    }

   
        // dynamically-add-to-cart
        
        let cartProducts=sessionStorage.getItem('cartProducts')
        cartProducts=JSON.parse(cartProducts)
        cartProducts.forEach(element=>{
            let pImage=element.pImage
            let pName=element.pName
            let pPrice=element.pPrice

            let cartItems=document.getElementsByClassName('cart-items')[0]
            let cartRow=document.createElement('tr');
            cartRow.classList.add('cart-item');
            let cartRowContents=`
                     <td><a><i class="fa-solid fa-xmark"></a></td>
                    <td><img class='image' src=${pImage} alt=""></td>
                    <td class='name'>${pName}</td>
                    <td class="price">${pPrice}</td>
                    <td><input type="number" value="1" class="quantity" min="1" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 49 && event.charCode <= 57) || (event.charCode==13))"></td>
                    <td class="t-price">${pPrice}</td>`
            
            cartRow.innerHTML=cartRowContents
            cartItems.append(cartRow) 

            cartRow.getElementsByClassName('fa-solid fa-xmark')[0].addEventListener('click',removeCartItem)

            cartRow.getElementsByClassName('quantity')[0].addEventListener('click',quantityChanged)

        })

        updateCartTotal()

        // on-change-no-of-items
        var quantityElement2=document.getElementsByClassName('quantity')
        Array.from(quantityElement2).forEach(element=>{
            // element.addEventListener('keypress',checkValidity)
            element.addEventListener('change',quantityChanged)
        })

        //on-changing-quantity
        // function checkValidity(event){
        //     console.log('Key Pressed')
        //     return (event.keyCode !=8 && event.keyCode ==0 || (event.keyCode >= 49 && event.keyCode <= 57))
        // }

        function quantityChanged(event){
            let input=event.target
            if(isNaN(input.value)|| input.value<=0){
                input.value=1
            }
            updateCartTotal()

            //update-counter
            updateCounter()
        }

        //updateCounter on add/remove
        function updateCounter(){
            let inputFields=document.getElementsByClassName('quantity')
            let total=0
            Array.from(inputFields).forEach(element=>{
                console.log(element.value);
                total=total+parseInt(element.value);
            })
            sessionStorage.setItem('counter',total)
            counterElement.innerHTML=total

        }

        // on-click-remove-btn

        var removeCartItemButton = document.getElementsByClassName('fa-solid fa-xmark');
        Array.from(removeCartItemButton).forEach(element=>{
            element.addEventListener('click',removeCartItem)
        })

        function removeCartItem(event){
            var buttonClicked=event.target;
            buttonClicked.parentElement.parentElement.parentElement.remove()
            updateSessionStorage()
            updateCartTotal()   

            //update counter
            updateCounter();
            checkEmptyCart()
        }

        

        // upadate-cart-total
        function updateCartTotal(){
            var cartItems = document.getElementsByClassName('cart-item')
      
            var total=0
            for(var i=0;i<cartItems.length;i++){

                var cartItem=cartItems[i];
                var priceElement=cartItem.getElementsByClassName('price')[0]
                var quantityElement=cartItem.getElementsByClassName('quantity')[0]
                var tpriceElement=cartItem.getElementsByClassName('t-price')[0]
                var price=parseFloat(priceElement.innerText.replace('$',''))
                var quantity=quantityElement.value
                var tprice=quantity*price
            
                //tprice=parseFloat(tprice.toFixed(2))
                tprice=Math.round(tprice*100)/100
                tpriceElement.innerHTML='$'+tprice
                total+=tprice
            }
            total=Math.round(total*100)/100
            let cartSubTotal =document.getElementById('cartSubTotal')
            cartSubTotal.innerHTML='$'+total
            let cartTotal =document.getElementById('cartTotal')
            cartTotal.innerHTML='$'+total
            cartTotal.style.fontWeight='bold'
        }

        //update session storage
        function updateSessionStorage(){
            let product=[];
            var cartItems = document.getElementsByClassName('cart-item')
    
            for(var i=0;i<cartItems.length;i++){
                var cartItem=cartItems[i];

                var prodPrice=cartItem.getElementsByClassName('price')[0]
                var prodImg=cartItem.getElementsByClassName('image')[0]
                var prodName=cartItem.getElementsByClassName('name')[0]
                
                var proDetails={
                pPrice:prodPrice.innerText,
                pImage:prodImg.src,
                pName:prodName.innerText
                
            }
            product.push(proDetails)
            
            }
            sessionStorage.setItem('cartProducts',JSON.stringify(product))
            
        }


  