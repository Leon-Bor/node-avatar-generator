import Image from './image.model'

export default class Directory {
    
    // none_single, selected_single, none_multiple, selected_multiple
    public selectionType: string = "none_single"; 
    public directoryName: number = null;
    public defaultImage = null;
    public previewImage = null;
    public images: Array<Image> = [];
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
          this[key] = this.setDefaults(instanceData[key]);
        }
      }

    }

    private setDefaults(instanceData): any {

        switch (instanceData.hashPosition) {
            case 0 :
                // hintergrund
                instanceData.selectionType = "selected_single";
                break;
            case 1:
                // bohne
                instanceData.selectionType = "selected_single"
                break;
            case 2:
                // augen
                instanceData.selectionType = "selected_single"
                break;
            case 3:
                // mund
                instanceData.selectionType = "selected_single"
                break;
            case 4:
                // bohne
                instanceData.selectionType = "selected_single"
                break;
            default:
                break;
        }

        return instanceData
    }

  }