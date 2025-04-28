const path = require('path');

module.exports = {
  entry: './index.js', // punkt wejścia aplikacji
  output: {
    filename: 'bundle.js', // nazwa pliku wynikowego
    path: path.resolve(__dirname, 'dist'), // katalog wyjściowy
  },
  mode: 'development', // lub 'production'
};
