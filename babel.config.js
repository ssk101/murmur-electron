
module.exports = (api) => {
  api.cache(true)

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              '> 5%',
            ],
          },
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-function-bind',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-proposal-object-rest-spread',
      'class-name',
      [
        '@babel/plugin-proposal-decorators', {
          legacy: true,
        },
      ],
    ],
  }

  return config
}
