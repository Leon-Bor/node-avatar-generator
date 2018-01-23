## node-avatar-generator (Made for Rocketbeans.tv)

- Angular 5+
- ExpressJS ( 4.x - with compression )
- Webpack ( angular-cli )

## Concepts

The base concept is to generate a md5 hash and get a diffrent avatar for each hash.
There for this avatar generator need 36 * 32 = 1152 images. That means there are ~ 36³² diffrent possibilities. If not all images are in place it will have a fallback to a default image. 

To store the old generated images, there is a version number in the image link. After changing or adding images the version number should be increased. Otherwise the Avatar might change.

This project also contains a UI for building that avatar. See a demo here [http://bohne.voteitup.net].


## Install / Development

```bash
git clone https://github.com/vladotesanovic/angular2-express-starter
cd angular2-express-starter

# Install dependencies
npm install

# start server
npm run start

# Client url: http://localhost:4200
# Application ( epxress ) API: http://localhost:4300
```

Install Redux DevTools chrome extenstion:

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Build / Production

```bash

npm run build

## Deploy dist folder to app server

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular2

```

