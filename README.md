## node-avatar-generator (Made for Rocketbeans.tv)

- Angular 5+
- ExpressJS ( 4.x - with compression )
- Webpack ( angular-cli )

## Concepts

The base concept is to generate a md5 hash and get a diffrent avatar for each hash.
There for this avatar generator need 36 * 32 = 1152 images. That means there are ~ 36³² diffrent possibilities. That's a lot.

This project also contains a UI for building that avatar. See a demo here [http://bavatar.voteitup.net].


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

