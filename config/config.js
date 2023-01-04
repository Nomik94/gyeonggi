require("dotenv").config();
module.exports =  {
    "development": {
      "username": "root",
      "password": process.env.MYSQL_AWS_PASSWORD,
      "database": "gyeonggi_db",
      "host": process.env.MYSQL_AWS_HOST,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": process.env.MYSQL_AWS_PASSWORD,
      "database": "gyeonggi_test_db",
      "host": process.env.MYSQL_AWS_HOST,
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
