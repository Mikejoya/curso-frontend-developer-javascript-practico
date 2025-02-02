//selectores  para realizar ma facil el llamado de algunas propiedades que necesitamos
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//toggle permite agregar o eliminar, en este caso el inactive que creamos en css para que cuando tengamos el evento click aparezca o desaparezca.


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

        if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

       closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');

}


//para esta funcion tambien tenemos otra solucion.
/*
function toggleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
*/
function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
    
}

function toggleCarritoAside(){

    const isDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopClosed){
        desktopMenu.classList.add('inactive');
    }
    
    //aside.classList.toggle('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if ('!isProductDetailClosed'){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){

    desktopMenu.classList.add('inactive');

    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProducts(arr){
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);