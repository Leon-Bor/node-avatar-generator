export const version = "v0.0.1";
export const serverPort = 5005;
export const secret = "RbBQqA6uF#MsRF8s7h*?@=95HUm&DgMDd6zLFn4XzWQ6dtwXSJwBX#?gL2JWf!";
export const length = 128;
export const digest = "sha256";
export const imageType = "jpg";

export const clientUrl = process.env.NODE_ENV == "production" ? 
                        'http://bohnen-generator.share-my-app.com' : 'http://localhost:5000';
export const serverUrl = process.env.NODE_ENV == "production" ? 
                        'http://bohnen-generator.share-my-app.com' : 'http://localhost:'+serverPort;
