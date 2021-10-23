module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'network': '@/network',
        'service': '@/service',
        'views': '@/views',
        'components': '@/components'
      }
    }
  }
}