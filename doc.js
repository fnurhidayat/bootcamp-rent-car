const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rent-Car",
      version: "1.0",
    },
    servers: [{ url: process.env.URL_SERVERS }],
  },
  apis: ["./routes/**/*.js"],
};
const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;
