const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssModulesIdentifier = '[local]___[hash:10]';

module.exports = {
  entry: './index.jsx',

  output: {
    publicPath: '/',
    filename: 'web.bundle.js',
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                ['babel-plugin-react-css-modules', {
                  generateScopedName: cssModulesIdentifier,
                }],
              ],
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: cssModulesIdentifier,
              importLoaders: 1, // mostlikely you need 'resolve-url-loader' after sass-loader.
                                // In such a case this should be 2
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'web.bundle.css' }),
  ],
};
