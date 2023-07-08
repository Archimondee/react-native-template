module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          components: "./src/components",
          screens: "./src/screens",
          assets: "./src/assets",
          navigations: "./src/navigations",
          types: "./src/types",
          utils: "./src/utils",
          stores: "./src/stores",
          hooks: "./src/hooks",
          configs: "./src/configs",
          managers: "./src/managers",
          services: "./src/services",
          atoms: "./src/atoms",
        },
      },
    ],
    //Reanimated plugin has to be listed last
    "react-native-reanimated/plugin",
  ],
};
