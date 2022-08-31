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
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "The Legend Of The Note Taking App";
      return args;
    });
  },
};