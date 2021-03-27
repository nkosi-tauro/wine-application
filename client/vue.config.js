const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    proxy: 'http://wine-backend:3000/' || process.env.PORT
  }
}