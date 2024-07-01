<template>
  <div>
   <button @click="openCheckout">click</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.Paddle.Environment.set("sandbox");
    window.Paddle.Initialize({ 
      token: "test_9c50a83740ad1647688644c413e", 
      checkout: {
    settings: {
      displayMode: "overlay",
      theme: "light",
      locale: "en"
    }
  },
  // prints events to console for debugging
  eventCallback: function(data) {
    console.log('jebs'+data);
  }
    });
  }
});

const items = [
  {
    price_id: 'pri_01j18j2sv2epmw7aht1m9p7rzq', // Produkt ID zamiast priceId
    quantity: 1
  }
];

const customerInfo = {
  email: "sam@example.com",
  country: "US",
  postcode: "10021"
};

const openCheckout = () => {
  if (typeof window !== 'undefined' && window.Paddle) {
    window.Paddle.Checkout.open({
      settings: {
    displayMode: "overlay",
    theme: "light",
    locale: "en"
  },
      items: items,
      customer: customerInfo,
      successCallback: (data) => {
        console.log('Paddle success callback data:', data);
        // Możesz tutaj obsłużyć sukces transakcji
      },
      closeCallback: () => {
        console.log('Paddle checkout closed');
        // Możesz tutaj obsłużyć zamknięcie checkoutu
      }
    });
  } else {
    console.error('Paddle nie jest zainicjalizowany.');
  }
};
</script>
