export default {
  server: {
    // port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:6969",
        changeOrigin: true,
      },
    },
  },
};
