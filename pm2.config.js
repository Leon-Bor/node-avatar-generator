module.exports = {
  apps : [{
    name        : "avatar-generator",
    script      : "./dist/server/bin/www.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}