// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      script:[
        { src: 'https://cdn.paddle.com/paddle/v2/paddle.js', defer: true },
      ]
    }
  }
})
