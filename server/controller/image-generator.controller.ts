import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
import Image from "../models/image.model";
import { version, imageType } from "../config";
import { bavatarController } from "../controller/bavartar.controller"
import * as mergeImages from 'merge-images';
import * as Canvas from 'canvas';
import * as mkdirp from 'mkdirp';

class ImageGeneratorController{
  private static _instance: ImageGeneratorController;
  private imagePath: string = path.join(__dirname, "../public/images/" + version);
  private imagePath256: string = path.join(__dirname, "../public/images/" + version + "/256");
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
    let md5Chars = md5.split('');;
    if (fs.existsSync(`${this.imagePath}/${md5}.${imageType}`)) {
        console.log("Image exists")
        return true;
    }else{
        console.log("Image not exists")
        let bavatarImages = [];
        let bavatarImagePath = [this.imageWhite];
        for (let i = 0; i < md5Chars.length; i++) {
            let img = bavatarController.getImage(i,md5Chars[i]);
            if(img){
                bavatarImages.push(img)
            } else {
                // default fall back is 0_xxxx.png
                img = bavatarController.getImage(i, "0");
                if(img){
                    bavatarImages.push(img)
                }
            }
        }

        // sort by zIndex
        bavatarImages = bavatarImages.sort((a, b) => a.zIndex - b.zIndex)
        console.log(bavatarImages)
        bavatarImages.map( (image: Image) => {
            console.log(image.hashPosition)
            let imagePath = `${bavatarController.imageFolder}/${image.hashPosition}/${image.fileName}`;
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

        await this.writeImageToDisk(b64Image, `${this.imagePath}/${md5}.${imageType}`)
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