import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
import Image from "../models/image.model";
import { version, imageType } from "../config";
import { bavatarController } from "../controller/bavartar.controller"
import * as mergeImages from 'merge-images';
import * as Canvas from 'canvas';
import * as mkdirp from 'mkdirp';
import * as resizeImg from 'resize-img';

class ImageGeneratorController{
  private static _instance: ImageGeneratorController;
  private imagePath: string = path.join(__dirname, "../public/images/cache/" + version);
  private imagePath256: string = path.join(__dirname, "../public/images/cache/" + version + "/256");
  private imageWhite: string = "server/public/images/bimages/white.jpg";

  constructor(){}

  static getInstance() {
      if (!ImageGeneratorController._instance) {
        ImageGeneratorController._instance = new ImageGeneratorController();
          // ... any one time initialization goes here ...
      }
      return ImageGeneratorController._instance;
  }

  public async genrateImageFromMD5(md5: string): Promise<boolean> {
    let md5Chars = md5.match(/.{1,2}/g)
    if (fs.existsSync(`${this.imagePath}/${md5}.${imageType}`)) {
        console.log("Image already exists")
        return true;
    }else{

        let bavatarImages = [];
        let bavatarImagePath = [this.imageWhite];
        for (let i = 0; i < md5Chars.length; i++) {
            bavatarController.dirs[i]
            let img = bavatarController.getImage(i,md5Chars[i]);
            if(img){
                bavatarImages.push(img)
            } else {
                // todo: default fall back from dir
                img = bavatarController.getImage(
                    i, 
                    bavatarController.dirs[i].defaultImage ?
                    bavatarController.dirs[i].defaultImage.split('_')[0] : null
                );

                if(img){
                    bavatarImages.push(img)
                }
            }
        }

        // sort by zIndex
        bavatarImages = bavatarImages.sort((a, b) => a.zIndex - b.zIndex)
        bavatarImages.map( (image: Image) => {
            let imagePath = `${bavatarController.imageFolder}/${image.directoryName}/${image.fileName}`;
            if(fs.existsSync(imagePath)){
                bavatarImagePath.push(imagePath);
            }
        } )        

        console.log(bavatarImagePath)
        let b64Image = await mergeImages(bavatarImagePath, {
            Canvas: Canvas,
            width: 1024,
            height: 1024,
            quality: 0.5,
            format: "image/jpeg"
        })

        let renderedImagePath = `${this.imagePath}/${md5}.${imageType}`;

        await this.writeImageToDisk(b64Image, renderedImagePath)

        let buf = await resizeImg(fs.readFileSync(renderedImagePath), {width: 512, height: 512})
            fs.writeFileSync(renderedImagePath, buf);

        return false;
    }

  }

  writeImageToDisk(b64Image, path): Promise<any>{
    return new Promise(
        (resolve, reject) => {

            mkdirp(this.imagePath, function (err) {
                if (err) console.error(err)
                else console.log('pow!')

                fs.writeFile(path, b64Image.replace(/^data:image\/jpeg;base64,/, ""), 'base64', function(err) {
                    console.log(1, err)
                    resolve();
                });
            });

        }
    );
  }



}
export const imageGeneratorController = ImageGeneratorController.getInstance();