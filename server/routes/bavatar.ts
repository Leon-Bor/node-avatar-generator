import { Request, Response, Router } from "express";
import * as uuid from "uuid";
import * as path from "path";
import * as md5 from "md5";
import { bavatarController } from "../controller/bavartar.controller"
import { imageGeneratorController } from "../controller/image-generator.controller"
import { version, imageType, clientUrl } from "../config";

const bavatarRouter: Router = Router();

bavatarRouter.get("/:version/:md5", (request: Request, response: Response) => {
  let md5Hash = request.params.md5;
      md5Hash = md5Hash.toLowerCase();
  let isMd5 = md5Hash.match(/^[a-f0-9]{32}$/i)
  if(isMd5){
    imageGeneratorController.genrateImageFromMD5(request.params.md5).then( () => {
      response.sendFile(path.join(__dirname, "../public/images/cache/" + request.params.version + "/" + md5Hash + "." + imageType));    
    });
  }else {
    response.sendStatus(404);
  }
});

bavatarRouter.get("/random", (request: Request, response: Response) => {
  response.redirect(301, "/bavatar/" + version + "/" + md5(Math.random().toString(36)))
});

bavatarRouter.get("/images", (request: Request, response: Response) => {
  response.setHeader('Access-Control-Allow-Origin', clientUrl);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(bavatarController.dirs));
});

export { bavatarRouter };
