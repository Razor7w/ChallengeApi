require('dotenv').config()

const fastify = require("fastify")({
  logger: true,
});

fastify.register(require('@fastify/cors'), { 
  // put your options here
})

require("./utils/mongoose");

const historyRoutes = require("./routes/history.routes");
const swagger = require("./utils/swagger");

fastify.register(require("fastify-swagger"), swagger.options);

historyRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
