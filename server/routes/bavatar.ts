import { Request, Response, Router } from "express";
import * as uuid from "uuid";
import * as path from "path";
import * as md5 from "md5";
import { bavatarController } from "../controller/bavartar.controller"
import { imageGeneratorController } from "../controller/image-generator.controller"
import { version, imageType, clientUrl } from "../config";

const bavatarRouter: Router = Router();

bavatarRouter.get("/random", (request: Request, response: Response) => {
  response.redirect(301, "/bavatar/" + version + "/" + md5(Math.random()))
});

bavatarRouter.get("/:version/:md5", (request: Request, response: Response) => {
  imageGeneratorController.genrateImageFromMD5(request.params.md5).then( () => {
    response.sendFile(path.join(__dirname, "../public/images/" + request.params.version + "/" + request.params.md5 + "." + imageType));    
  });
});

bavatarRouter.get("/images", (request: Request, response: Response) => {
  response.setHeader('Access-Control-Allow-Origin', clientUrl);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(bavatarController.images));
});

export { bavatarRouter };
