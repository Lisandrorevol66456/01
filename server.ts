import "reflect-metadata";
import express, { json, urlencoded } from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppRoutes } from "./routes";


const app = express();

  app.use(json())
  app.use(express.urlencoded({extended: true})); 
app.use(express.json());

AppRoutes.forEach((route) => {
  app.use(
    route.path,
    (request: Request, response: Response, next: Function) => {
      route
        .action(request, response)
        .then(() => next)
        .catch((err) => next(err));
    }
  );
});

const startServer = async () => {
  await app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on http://127.0.0.1:${process.env.PORT}`);
  });
};

//async function filter(req:any,res:any):Promise<any> { };

(async () => {
  await startServer();
})();

