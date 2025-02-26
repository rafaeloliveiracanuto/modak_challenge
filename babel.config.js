module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
            loose: true, // Configurar o "loose" para todas as transformações de propriedades de classe
          },
        ],
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true, // Garantir "loose" para os métodos privados
          },
        ],
        [
          '@babel/plugin-transform-private-property-in-object',
          {
            loose: true, // Garantir "loose" para propriedades privadas
          },
        ],
      ],
    },
  ],
};
