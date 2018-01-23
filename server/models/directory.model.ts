export default class Directory {
    public name: string = null;
    public selectionType: string = "none_single"; // none_single, selected_single, none_multiple, selected_multiple
    public clip: any = {x1:0,y1:0,x2:1024,y2:1024};


    constructor(instanceData?: Directory) {
      if (instanceData) {
        this.deserialize(instanceData);
      }
    }
  
    private deserialize(instanceData: Directory) {
      const keys = Object.keys(this);
  
      for (const key of keys) {
        if (instanceData.hasOwnProperty(key)) {
          this[key] = this.setSelectionType(instanceData[key]);
        }
      }

    }

    private setSelectionType(instanceData): any {

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