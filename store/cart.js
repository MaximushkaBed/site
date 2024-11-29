// Функция для загрузки корзины из localStorage
const loadCartFromStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
}

// Функция для сохранения корзины в localStorage
const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Измените начальное состояние, чтобы загружать из localStorage
const state = {
  cart: loadCartFromStorage()
};

// В мутациях добавьте сохранение после каждого изменения корзины
const mutations = {
  addToCart(state, product) {
    // ... существующая логика добавления ...
    saveCartToStorage(state.cart);
  },
  
  removeFromCart(state, productId) {
    // ... существующая логика удаления ...
    saveCartToStorage(state.cart);
  },
  
  updateQuantity(state, { productId, quantity }) {
    // ... существующая логика обновления количества ...
    saveCartToStorage(state.cart);
  },
  
  clearCart(state) {
    state.cart = [];
    saveCartToStorage(state.cart);
  }
}; 