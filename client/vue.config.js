module.exports = {
    devServer: {
      proxy: 'http://localhost:3000' || process.env.PORT
    }
}