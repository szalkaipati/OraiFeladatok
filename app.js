const vegburger = document.getElementById('vegburger');
const nav=document.getElementById("nav");

vegburger.addEventListener('click',(event)=>{ nav.classList-toggle('menu-active');
vegburger.classList.toggle('fi-align-justify');
vegburger.classList.toggle('fi-arrow-left');
})

vegburger.addEventListener('click',(event)=>{ nav.classList.remove('menu-active');
vegburger.classList.remove('fi-align-justify');
vegburger.classList.add('fi-arrow-left');
})

const products = [
    {id:1, name:'malna', picture:'malna.jpg',description:'Kézzel szedett finomság',price:3800,instock:true},

    {id:2, name:'Áfonya', picture:'afonya.jpg',description:'Kézzel szedett finomság',price:3250,instock:true},

    {id:3, name:'Szeder', picture:'szeder.jpg',description:'Kézzel szedett finomság',price:1700,instock:true,variations:["fehér",fekete]}
]

const productSection=document.getElementById('Products');

productSection.forEach[product=>{
    productSection.innerHTML += `<div> 
    <h2>$(products.name) <h2>
    <p>${product.description}</p>
    <image src="./image/${product.picture}>" 
    <h3>${product.price}<h3>
    <a id={product.id} class="addToCart">Kosárba</a>
    </div>`;
}]