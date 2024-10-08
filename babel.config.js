module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@utils': './src/utils',
            '@assets':'./src/assets',
          },
        },
      ],
    ],
  };
};