## node-avatar-generator (Made for Rocketbeans.tv)

- Angular 5+
- ExpressJS ( 4.x - with compression )
- Webpack ( angular-cli )

## Concepts

The base concept is to generate a md5 hash and get a diffrent avatar for each hash.
There for this avatar generator need 36 * 32 = 1152 images. That means there are ~ 36³² diffrent possibilities. If not all images are in place it will have a fallback to a default image. 

To store the old generated images, there is a version number in the image link. After changing or adding images the version number should be increased. Otherwise Avatars generated in the past might change.

This project also contains a UI for building that avatar. See a demo here http://bohne.voteitup.net.


## Install / Development

Make sure you are able to run the npm canvas packages.
https://github.com/Automattic/node-canvas
```bash
git clone https://github.com/Leon-Bor/node-avatar-generator.git
cd node-avatar-generator

# Install dependencies
npm install

# start server
npm run start

# Client url: http://localhost:4200
# Application ( epxress ) API: http://localhost:4300
```


## Build / Production

```bash

npm run build

## Deploy dist folder to app server

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular2

Start client form ./dist/client
pm2 start /usr/bin/http-server -- -p 5000 -d false

Start server with:
pm2 start dist/server/bin/www.js

```

