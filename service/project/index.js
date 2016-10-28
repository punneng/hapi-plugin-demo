module.exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/index',
    handler: function (request, reply) {
      reply('Hello, world! from service/project/index.js')
    }
  })

  next()
}

module.exports.register.attributes = {
  name: 'project-test',
  version: '0.0.1',
}
