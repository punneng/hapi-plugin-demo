module.exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/dashboard',
    handler: function (request, reply) {
      reply('Hello, world! from dashboard/index.js')
    }
  })

  next()
}

module.exports.register.attributes = {
  name: 'dashboard-test',
  version: '0.0.1',
}
