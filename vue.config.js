module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    themeColor: "#1e88e5",
    msTileColor: "#1e88e5",
    display: "standalone",
    name: "MBC Schedule",
    manifestOptions: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: "#ffffff"
    }
  }
};
