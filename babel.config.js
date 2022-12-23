module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~api": "./src/api",
            "~components": "./src/components",
            "~features": "./src/features",
            "~hooks": "./src/hooks",
            "~navigators": "./src/navigators",
            "~theme": "./src/theme",
            "~utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
