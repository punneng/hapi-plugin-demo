module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/user',
    handler: function (request, reply) {
      reply('Hello, world! from service/user.js')
    }
  })
}
