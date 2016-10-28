module.exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/task',
    handler: function (request, reply) {
      reply('Hello, world! from service/task.js')
    }
  })

  next()
}

module.exports.register.attributes = {
  name: 'task-test',
  version: '0.0.1',
}
