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
        width: 50,
        height: 50
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
                instanceData.defaultImage = "01_1000.png";
                instanceData.previewImage = "01_1000.png";
                instanceData.selectedImage = new Image({"fileName":"01_1000.png","path":"server/public/images/bimages","hashPosition":0,"directoryName":0,"hashChar":"01","zIndex":1000})
                break;
            case 1:
                // bohne
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "01_5000.png";
                instanceData.previewImage = "01_5000.png";
                instanceData.previewClip= {
                    marginTop: -5,
                    marginLeft: -30,
                    width: 90,
                    height: 90
                }
                instanceData.selectedImage = new Image({"fileName":"01_5000.png","path":"server/public/images/bimages","hashPosition":2,"directoryName":1,"hashChar":"01","zIndex":5000})
                break;
            case 2:
                // augen
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "01_6000.png";
                instanceData.previewImage = "01_6000.png";
                instanceData.previewClip= {
                    marginTop: -10,
                    marginLeft: -65,
                    width: 130,
                    height: 130
                }
                instanceData.selectedImage = new Image({"fileName":"01_6000.png","path":"server/public/images/bimages","hashPosition":4,"directoryName":2,"hashChar":"01","zIndex":6000})
                break;
            case 3:
                // mund
                instanceData.allowNoImage = false;
                instanceData.defaultImage = "01_6000.png";
                instanceData.previewImage = "01_6000.png";
                instanceData.previewClip= {
                    marginTop: -20,
                    marginLeft: -70,
                    width: 140,
                    height: 140
                }
                instanceData.selectedImage = new Image({"fileName":"01_6000.png","path":"server/public/images/bimages","hashPosition":6,"directoryName":3,"hashChar":"01","zIndex":6000})
                break;
            case 4:
                // antrieb
                instanceData.defaultImage = "01_4000.png";
                instanceData.previewImage = "01_4000.png";
                instanceData.previewClip= {
                    marginTop: -40,
                    marginLeft: -10,
                    width: 90,
                    height: 90
                }
                instanceData.selectedImage = new Image({"fileName":"01_4000.png","path":"server/public/images/bimages","hashPosition":8,"directoryName":4,"hashChar":"01","zIndex":4000})
                break;
            case 5:
                // duesen
                instanceData.defaultImage = "01_6000.png";
                instanceData.previewImage = "01_6000.png";
                instanceData.previewClip= {
                    marginTop: -20,
                    marginLeft: -22.5,
                    width: 95,
                    height: 95
                }
                instanceData.selectedImage = new Image({"fileName":"01_6000.png","path":"server/public/images/bimages","hashPosition":10,"directoryName":5,"hashChar":"01","zIndex":6000})
                break;
            case 6:
                // hut
                instanceData.defaultImage = "01_7000.png";
                instanceData.previewImage = "01_7000.png";
                instanceData.previewClip= {
                    marginTop: 0,
                    marginLeft: -40,
                    width: 100,
                    height: 100
                }
                instanceData.selectedImage = new Image({"fileName":"01_7000.png","path":"server/public/images/bimages","hashPosition":12,"directoryName":6,"hashChar":"01","zIndex":7000})
                break;
            case 7:
                // hose
                instanceData.defaultImage = "00_0.png";
                instanceData.previewImage = "01_5500.png";
                instanceData.previewClip= {
                    marginTop: -20,
                    marginLeft: -32.5,
                    width: 105,
                    height: 105
                }
                instanceData.selectedImage = new Image({"fileName":"00_0.png","path":"server/public/images/bimages","hashPosition":14,"directoryName":7,"hashChar":"00","zIndex":0})
                break;
            case 8:
                // flagge
                instanceData.defaultImage = "00_0.png";
                instanceData.previewImage = "01_4500.png";
                instanceData.previewClip= {
                    marginTop: -5,
                    marginLeft: -15,
                    width: 105,
                    height: 105
                }
                instanceData.selectedImage = new Image({"fileName":"00_0.png","path":"server/public/images/bimages","hashPosition":16,"directoryName":8,"hashChar":"00","zIndex":0})
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