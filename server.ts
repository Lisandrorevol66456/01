import "reflect-metadata";
import express, { json, urlencoded } from "express";
import "dotenv/config";
//import bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppRoutes } from "./routes";
import { connectDB } from "./database";
import * as jwt from "jsonwebtoken";
import config from "./config/config";

const app = express();
app.use(filter);
const { checkSchema, validationResult } = require("express-validator");
process.env.TZ = "America/Argentina/Cordoba";
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

AppRoutes.forEach((route) => {
  app.use(
    route.path,
    checkSchema(route.schema),
    (request: Request, response: Response, next: Function) => {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.json(validationResult(request).array());
      }
      route
        .action(request, response)
        .then(() => next)
        .catch((err: any) => next(err));
    }
  );
});
function filter(req: any, res: any, next: any) {
  try {
    const token = req.headers["authorization"];
    const jwtPayload = token
      ? <any>jwt.verify(token, config.jwtSecret, { algorithms: ["HS512"] })
      : undefined;
    if (
      (jwtPayload && jwtPayload.usuario.idPerfil == 1) ||
      req.url == "/token"
    ) {
      next();
    } else {
      res.status(403).json(`No posee permisos para acceder a esa url`);
    }
  } catch (e) {
    res.status(403).json(`No posee permisos para acceder a esa url`);
  }
}
const startServer = async () => {
  await app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on http://127.0.0.1:${process.env.PORT}`);
  });
};

// (async () => {
//   await startServer();
// })();

(async () => {
  await connectDB();
  await startServer();
})();
