fetch("../js/layout.json")
.then(response => {
   return response.json();
})
.then(data =>{ 
    for(i = 0; i < data.length; i++){
        item = data[i]

        template = `
        <div class="main-shop-content-item">
            <img src="${item.url}" alt="imagem camisa">
            <p class="main-shop-item-title">${item.title}</p>
            <p class="main-shop-item-value">R$ ${item.value}</p>
        </div>
        `
        let div_content = document.querySelector('.main-shop-content')
        div_content.innerHTML += template  
    }
})
