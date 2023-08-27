let bounce = document.querySelector('.fa-arrow-down');
let cards = document.querySelectorAll('.card');
let add = document.querySelectorAll('.add');
let cart = document.querySelector('.right')
let list = document.querySelector('.list');
let cartItems = list.querySelector('.cart-items')
let sumPrice = document.querySelector('.total');
let clearCart= document.querySelector('.clear-cart')

let total = [];

add.forEach(button => {
    button.addEventListener('click', () => {
      let container = event.currentTarget.parentNode;
      let img = container.querySelector('img').src;
      console.log(img)
      let description = container.querySelector('h4')
      console.log(description.textContent);
    
      let price = container.querySelector('.price');
      let pric = price.textContent.slice(1);
      let num = parseFloat(pric)
      
      total.push(num);
      
      let sum =  total.reduce((a, b)=> a + b,0)
    
      sumPrice.textContent =`$${sum}`

      console.log(sumPrice)
  
      let tr = document.createElement('tr');
    
  
      tr.innerHTML = `
        <td><img class='small' src=${img}></td>
        <td>${description.textContent}</td>
        <td>${price.textContent}</td>
        <td><button class='delete'>X</button></td>
      `;
  
      let deleteButton = tr.querySelector('.delete');
      deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        
        let rows = cartItems.querySelectorAll('tr');
        total = [];
        for (let i = 0; i < rows.length; i++) {
          let price = rows[i].querySelectorAll('td')[2].textContent.slice(1);
          console.log(price)
          let num = parseFloat(price);
          total.push(num);
        }
        
        let sum = total.reduce((a, b) => a + b, 0);
        sumPrice.textContent = `$${sum}`;
      });
  
      cartItems.appendChild(tr);
    });
});

clearCart.addEventListener('click', ()=> {
    cartItems.innerHTML = '';
    total = [];
    sumPrice.innerText = `$${0}`
})

cart.addEventListener('click', ()=> {
    console.log('clicked')
   list.classList.toggle('showCart') 
})

bounce.addEventListener('mouseover', () => {
    bounce.classList.add('transition')
})

bounce.addEventListener('mouseout', () => {
    bounce.classList.remove('transition')
})
