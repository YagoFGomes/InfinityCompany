fetch("../js/layout.json")
.then(response => {
   return response.json();
})
.then(data =>{ 
    for(i = 0; i < data.length; i++){
        item = data[i]

        template = `
        <div class="banner-item">
            <img src="${item.url}" alt="imagem camisa ${item.title}">
            <p class="banner-title">${item.title}</p>
        </div>
        `
        let div_content = document.querySelector('.grid-banner')
        div_content.innerHTML += template  
    }
    

})