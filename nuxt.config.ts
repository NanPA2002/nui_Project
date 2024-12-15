// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css",'~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
  modules: ['@pinia/nuxt'],
  postcss: {
      plugins: {
      tailwindcss: {},
      autoprefixer: {},
      },
  },
   compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      BASE_URL: "",
    }
  }
});
