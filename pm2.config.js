module.exports = {
  apps : [{
    name        : "avatar-generator",
    script      : "./dist/server/bin/www.js",
    watch       : false,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}