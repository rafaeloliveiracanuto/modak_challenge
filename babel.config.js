module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-private-property-in-object',
  ],
  overrides: [
    {
      test: /\.js$/,
      plugins: [
        [
          '@babel/plugin-transform-class-properties',
          {
            loose: true,
          },
        ],
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
        [
          '@babel/plugin-transform-private-property-in-object',
          {
            loose: true,
          },
        ],
        [
          '@babel/plugin-transform-flow-strip-types',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
};
