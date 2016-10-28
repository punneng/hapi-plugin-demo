module.exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/index',
    handler: function (request, reply) {
      reply('Hello, world! from service/index.js')
    }
  })

  require('./user')(server)
  server.register(require('./task'))
  server.register(require('./project'), { routes: { prefix: '/project'} })

  next()
}

module.exports.register.attributes = {
  name: 'service-test',
  version: '0.0.1',
}
