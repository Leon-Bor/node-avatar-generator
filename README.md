## node-avatar-generator (Made for Rocketbeans.tv)

- Angular 5+
- ExpressJS ( 4.x - with compression )
- Webpack ( angular-cli )

## Concepts

The base concept is to generate a md5 hash and get a different avatar for each hash.
There for this avatar generator can use up to (16 * 16 * 16) 4096 images. If not all images are in place it will have a fallback to a default image. 

The md5 hash is splitted into 16 categories:
[00][00][00][00][00][00][00][00][00][00][00][00][00][00][00][00]. For every combination of the 2 characters can be used 1 image. If a image for a character combination is not existing, it will fallback to the categorie default image. The default image is set in the Directory model. The category folders are located in `/server/public/images/bavatar`. Within these categories(dirs) you have to place the images.

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

# Client url: http://localhost:5000
# Application ( epxress ) API: http://localhost:5005
```

## Build / Production

```bash

npm run build

## Deploy dist folder to app server

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular2

npm i -g pm2
pm2 start pm2.config.js --env production

```

