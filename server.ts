require('dotenv').config();
import express, { Application } from "express";
import Server from "./src/index";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 8080;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app
  .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
