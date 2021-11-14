const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

// middle
app.use(cors());
app.use(express.json());

const swaggerDefinition = {
  swagger: "2.0",
  info: {
    title: "Monoame API serverless swagger jsdoc template",
    description: "Monoame API serverless swagger jsdoc template documentation",
    version: "1.0.0",
  },
};
const options = {
  swaggerDefinition,
  apis: ["./src/api/routes/*.js"],
};
const swaggerDoc = swaggerJSDoc(options);

app.use(
  "/swagger",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDoc, {
    swaggerOptions: {
      url: "api-docs",
    },
  })
);

// routes
app.use("/", routes);

module.exports = app;
