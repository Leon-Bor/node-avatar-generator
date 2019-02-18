import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as path from "path";
import * as cors from "cors";

import { bavatarRouter } from "./routes/bavatar";

const app: express.Application = express();

app.disable("x-powered-by");

app.use(cors())
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

// view engine setup
app.set('view engine', 'ejs');

console.log("nodemon?222", process.env.NODE_ENV)

if (app.get("env") === "production") {
  app.use(express.static(path.join(__dirname, "/../client")));
  app.use(express.static(path.join(__dirname, "../../server/public")));
  app.set('views', path.join(__dirname, '../../server/views'));
} else {
  console.log("dev")
  app.use(express.static(path.join(__dirname, "/public")));
  app.set('views', path.join(__dirname, 'views'));
}


// api routes
app.use("/bavatar/", bavatarRouter);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});

export { app };
