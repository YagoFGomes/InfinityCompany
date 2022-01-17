/* <div class="nav-left">
    <!-- Img nacionalidade -->
    <a href="#"><img class="nav-img" src="../img/language.svg" alt="Nacionalidade"></a>
    <!-- Icon maps -->
    <a href="#"><img class="nav-img" src="../img/maps.svg" alt="Maps"></a>
    </div>
    <div class="nav-center">
    <span class="logo"><p>Infinity Company</p></span>
</div>
<div class="nav-right">
    <!-- icon carrinho -->
    <a href="#"><img class="nav-img" src="../img/cart.svg" alt="Carrinho"></a>
    <!-- icon shop -->
    <a href="#"><img class="nav-img" src="../img/market.svg" alt="Shopping"></a>
    <!-- icon perfil -->
    <a href="#"><img class="nav-img" src="../img/login.svg" alt="Meu perfil"></a>
</div> */

fetch("../js/navbar.json")
.then(response => {
   return response.json();
})
.then(data => { 
    template = `
        <div class="nav-left">
            <!-- Img nacionalidade -->
            <a href="#"><img class="nav-img" src="${data.imageNasc}" alt="Nacionalidade"></a>
            <!-- Icon maps -->
            <a href="#"><img class="nav-img" src="${data.iconMaps}" alt="Maps"></a>
        </div>
        <div class="nav-center">
            <span class="logo"><p>${data.logo}</p></span>
        </div>
        <div class="nav-right">
            <!-- icon carrinho -->
            <a href="#"><img class="nav-img" src="${data.cart}" alt="Carrinho"></a>
            <!-- icon shop -->
            <a href="#"><img class="nav-img" src="${data.market}" alt="Shopping"></a>
            <!-- icon perfil -->
            <a href="#"><img class="nav-img" src="${data.login}" alt="Meu perfil"></a>
        </div>
        `
    let navbar = document.querySelector('.navbar')
    navbar.innerHTML += template  
})