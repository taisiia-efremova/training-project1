Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: '#store-card',
  data() {
    return {
      brand: "Vue Mastery",
      product: 'Socks',
      description: 'The best socks in the world',
      selectedVariant: 0,

      onSale: true,
      details: ["80% cotton", "20% wool", "woman"],
      variants: [{
          variantId: 2234,
          variantColor: "green",
          variantImage: "../img/vmSocks-green-onWhite.jpg",
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "../img/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0
        }
      ],
      sizes: ["36", "37", "38", "39", "40", "41"],
      reviews: []



    }
  }, // ! to add methods
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    deleteFromCart() {
      this.cart > 0 ? this.cart -= 1 : this.cart = 0;
    },
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index)
    },
    removeFromCart: function () {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    addReview(productReview) {
      console.log('heyyy')
      this.reviews.push(productReview)
    }

  },
  // ! To add a computed value from the data values
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }

  }
})
// ! Creates a New Vue instance


Vue.component('detail1', {
  template: '#details',
  data() {
    return {
      description: 'The best socks in the world',
      details: ["80% cotton", "20% wool", "woman"],
    }

  },

})

Vue.component('product-review', {
  template: '#form-template',
  data() {
    return {
      name: null,
      review: null,
      rating: null
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }
      this.$emit('review-submitted', productReview)
      this.name = null
      this.review = null
      this.rating = null
    }
  }
})


var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeItem(id) {
      for (var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    }
  }
})