module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/assets/scss/utils/variables";
            @import "@/assets/scss/utils/mixins";
          `,
      },
    },
  },
};