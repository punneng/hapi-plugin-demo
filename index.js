const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 3000 })


server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
      reply('Hello, world! from index.js')
  }
})

server.register(require('./dashboard'))
server.register(require('./service'), { routes: { prefix: '/service' } })


server.start((err) => {

  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
