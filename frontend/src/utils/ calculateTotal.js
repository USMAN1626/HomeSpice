export function calculateTotal(cart) {
    return cart.reduce((total, item) => {
      const servings = Math.ceil(item.personCount / item.serves);
      return total + servings * item.price;
    }, 0);
  }
  
  