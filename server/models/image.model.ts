export default class Image {
    public fileName: string = null;
    public path: string = null;
    public hashPosition: number = null;
    public directoryName: number = null;
    public hashChar: string = null;
    public zIndex: number = null;

    constructor(instanceData?) {
      if (instanceData) {
        this.deserialize(instanceData);
      }
    }
  
    private deserialize(instanceData: Image) {
      const keys = Object.keys(this);
  
      for (const key of keys) {
        if (instanceData.hasOwnProperty(key)) {
          this[key] = instanceData[key];
        }
      }

    }


  }