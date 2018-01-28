import Image from './image.model'

export default class Directory {
    
    // none_single, selected_single, none_multiple, selected_multiple
    public allowNoImage: boolean = true; 
    public directoryName: number = null;
    public defaultImage = null;
    public previewImage = null;
    public images: Array<Image> = [];
    public selectedImage: Image = null;
    public previewClip: any = {
        marginTop: 0,
        marginLeft: 0,
        width: 1024,
        height: 1024
    };

    constructor(instanceData?) {
      if (instanceData) {
        this.deserialize(instanceData);
      }
    }
  
    private deserialize(instanceData: Directory) {
      const keys = Object.keys(this);
  
      for (const key of keys) {
        if (instanceData.hasOwnProperty(key)) {
          this[key] = instanceData[key];
        }
      }

        this.setDefaults(this)

    }

    private setDefaults(instanceData): any {

        switch (instanceData.directoryName) {
            case 0 :
                // hintergrund
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "00_1000.png";
                instanceData.previewImage = "00_1000.png";
                instanceData.selectedImage = new Image({"fileName":"00_1000.png","path":"server/public/images/bimages","hashPosition":0,"directoryName":0,"hashChar":"00","zIndex":1000})
                break;
            case 1:
                // bohne
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "00_5000.png";
                instanceData.previewImage = "00_5000.png";
                instanceData.selectedImage = new Image({"fileName":"00_5000.png","path":"server/public/images/bimages","hashPosition":2,"directoryName":1,"hashChar":"00","zIndex":5000})
                break;
            case 2:
                // augen
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "00_6000.png";
                instanceData.previewImage = "00_6000.png";
                instanceData.selectedImage = new Image({"fileName":"00_6000.png","path":"server/public/images/bimages","hashPosition":4,"directoryName":2,"hashChar":"00","zIndex":6000})
                break;
            case 3:
                // mund
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "00_6000.png";
                instanceData.previewImage = "00_6000.png";
                instanceData.selectedImage = new Image({"fileName":"00_6000.png","path":"server/public/images/bimages","hashPosition":6,"directoryName":3,"hashChar":"00","zIndex":6000})
                break;
            case 4:
                // antrieb
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "00_4000.png";
                instanceData.previewImage = "00_4000.png";
                instanceData.selectedImage = new Image({"fileName":"00_4000.png","path":"server/public/images/bimages","hashPosition":8,"directoryName":4,"hashChar":"00","zIndex":4000})
                break;
            case 5:
                // hose
                instanceData.defaultImage = "00_6000.png";
                instanceData.previewImage = "00_6000.png";
                instanceData.selectedImage = new Image({"fileName":"00_6000.png","path":"server/public/images/bimages","hashPosition":10,"directoryName":5,"hashChar":"00","zIndex":6000})
                break;
            case 6:
                // hut
                instanceData.defaultImage = "00_7000.png";
                instanceData.previewImage = "00_7000.png";
                instanceData.selectedImage = new Image({"fileName":"00_7000.png","path":"server/public/images/bimages","hashPosition":12,"directoryName":6,"hashChar":"00","zIndex":7000})
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 14:
                break;
            case 15:
                break;
            
            default:
                break;
        }

        return instanceData
    }

  }