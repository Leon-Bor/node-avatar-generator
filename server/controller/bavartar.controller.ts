import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
import Image from "../models/image.model";
import { version, imageType } from "../config";
import Directory from "../models/directory.model";

class BavatarController{
  private static _instance: BavatarController;
  public imageFolder: string = "server/public/images/bimages";
  public dirs: Array<Directory> = [];

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
    console.log('load images2')
    const getDirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())

    let dirNames = getDirs(this.imageFolder).map( (d) => parseInt(d)).sort((a, b) => a - b);
    this.dirs = dirNames.map( (d) => new Directory( { directoryName: d }) )


    for (let i = 0; i < this.dirs.length; i++) {

      let imagesInFolder = await this.getImagesInFolder(this.dirs[i].directoryName);

        imagesInFolder = imagesInFolder.map( (img) => {
          return new Image({
            fileName: img,
            hashPosition: i*2,
            directoryName: i,
            path: this.imageFolder,
            hashChar: img.split('_')[0],
            zIndex: parseInt(img.split('_').pop().slice(0, -4)),
          });
        } )

      this.dirs[i].images = imagesInFolder;
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

  public getImage(dir: number, hashChars: string): Image {
    // let image = this.images[dir].find( (img) => img.fileName.startsWith(hashChar))
    let image = this.dirs[dir].images.find( (img) => img.fileName.startsWith(hashChars))
    return image;
  }

}
export const bavatarController = BavatarController.getInstance();