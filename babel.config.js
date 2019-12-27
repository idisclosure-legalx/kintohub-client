module.exports = function(api) {
  api.cache.never();

  return {
    presets: [
      '@babel/typescript',
      [
        '@babel/preset-env',
        {
          targets: { node: true },
          modules: 'commonjs',
        },
      ],
    ],
    ignore: ['**/node_modules', 'jest.config.js'],
  };
};
