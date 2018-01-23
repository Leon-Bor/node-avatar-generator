import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
import Image from "../models/image.model";
import { version, imageType } from "../config";

class BavatarController{
  private static _instance: BavatarController;
  public imageFolder: string = "server/public/images/bimages";
  public images: Array<Array<Image>> = [];
  public dirs: Array<number> = [];

  constructor(){ 
    this.loadImages();
  }

  static getInstance() {
      if (!BavatarController._instance) {
        BavatarController._instance = new BavatarController();
          // ... any one time initialization goes here ...
      }
      return BavatarController._instance;
  }

  async loadImages(): Promise<any> {
    console.log('load images')
    const getDirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
    this.dirs = getDirs(this.imageFolder).map( (d) => parseInt(d)).sort((a, b) => a - b);
    
    for (let i = 0; i < this.dirs.length; i++) {

      let imagesInFolder = await this.getImagesInFolder(this.dirs[i]);

        imagesInFolder = imagesInFolder.map( (img) => {
          let newImage = new Image();
              newImage.fileName = img;
              newImage.hashPosition = i;
              newImage.path = this.imageFolder;
              newImage.hashChar = img.split('_')[0];
              newImage.zIndex = parseInt(img.split('_').pop().slice(0, -4));
          return newImage;
        } )

      this.images.push(imagesInFolder);
    }
  }

  private getImagesInFolder(folder): Promise<any> {
    return new Promise(
        (resolve, reject) => {
            fs.readdir( this.imageFolder + "/" + folder, (err, files) => {
              files = files.filter( (f) => f.endsWith(`.png`));
              resolve(files);
            })
        }
    );
  }

  public getImage(dir: number, hashChar: string): Image {
    let image = this.images[dir].find( (img) => img.fileName.startsWith(hashChar))
    return image;
  }

}
export const bavatarController = BavatarController.getInstance();