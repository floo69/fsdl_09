const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "watch.png", width:200, height:200 },
    { id: 2, name: "Product 2", price: 29.99, image: "perfume.png", width:200, height:200},
    { id: 3, name: "Product 3", price: 39.99, image: "shoes.png", width:200, height:200 },
    { id: 4, name: "Product 4", price: 49.99, image: "phone.png", width:200, height:200 },
    { id: 5, name: "Product 5", price: 49.99, image: "laptop.png", width:200, height:200 },
    { id: 6, name: "Product 6", price: 49.99, image: "bottle.png", width:200, height:200 },
  ]
  
  const cart = []
  
  function renderProducts() {
    const productList = document.getElementById("product-list")
    productList.innerHTML = ""
  
    products.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.className = "col-md-6 col-lg-4 mb-4"
      productCard.innerHTML = `
              <div class="card product-card">
                  <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">$${product.price.toFixed(2)}</p>
                      <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                  </div>
              </div>
          `
      productList.appendChild(productCard)
    })
  
    const addToCartButtons = document.querySelectorAll(".add-to-cart")
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart)
    })
  }
  
  function addToCart(event) {
    const productId = Number.parseInt(event.target.getAttribute("data-id"))
    const product = products.find((p) => p.id === productId)
  
    const existingItem = cart.find((item) => item.id === productId)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.push({ ...product, quantity: 1 })
    }
  
    renderCart()
  }
  
  function renderCart() {
    const cartItems = document.getElementById("cart-items")
    const cartTotal = document.getElementById("cart-total")
    cartItems.innerHTML = ""
  
    let total = 0
  
    cart.forEach((item) => {
      const listItem = document.createElement("li")
      listItem.className = "list-group-item d-flex justify-content-between align-items-center"
      listItem.innerHTML = `
              <div>
                  <h6 class="my-0">${item.name}</h6>
                  <small class="text-muted">$${item.price.toFixed(2)} each</small>
              </div>
              <div class="quantity-control">
                  <button class="quantity-btn minus" data-id="${item.id}">-</button>
                  <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                  <button class="quantity-btn plus" data-id="${item.id}">+</button>
              </div>
          `
      cartItems.appendChild(listItem)
  
      total += item.price * item.quantity
    })
  
    cartTotal.textContent = `$${total.toFixed(2)}`
  
    const minusButtons = document.querySelectorAll(".quantity-btn.minus")
    const plusButtons = document.querySelectorAll(".quantity-btn.plus")
    const quantityInputs = document.querySelectorAll(".quantity-input")
  
    minusButtons.forEach((button) => button.addEventListener("click", decreaseQuantity))
    plusButtons.forEach((button) => button.addEventListener("click", increaseQuantity))
    quantityInputs.forEach((input) => input.addEventListener("change", updateQuantity))
  }
  
  function decreaseQuantity(event) {
    const productId = Number.parseInt(event.target.getAttribute("data-id"))
    const item = cart.find((item) => item.id === productId)
    if (item.quantity > 1) {
      item.quantity--
    } else {
      const index = cart.findIndex((item) => item.id === productId)
      cart.splice(index, 1)
    }
    renderCart()
  }
  
  function increaseQuantity(event) {
    const productId = Number.parseInt(event.target.getAttribute("data-id"))
    const item = cart.find((item) => item.id === productId)
    item.quantity++
    renderCart()
  }
  
  function updateQuantity(event) {
    const productId = Number.parseInt(event.target.getAttribute("data-id"))
    const item = cart.find((item) => item.id === productId)
    const newQuantity = Number.parseInt(event.target.value)
    if (newQuantity > 0) {
      item.quantity = newQuantity
    } else {
      const index = cart.findIndex((item) => item.id === productId)
      cart.splice(index, 1)
    }
    renderCart()
  }
  
  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Thank you for your purchase!")
    cart.length = 0
    renderCart()
  })
  
  renderProducts()
  
  