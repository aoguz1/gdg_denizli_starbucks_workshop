require("dotenv").config();

module.exports = {
  development: {
    database: "starbucks-dev",
    username: "postgres",
    password: "admin",
    host: "127.0.0.1",
    dialect: "postgres",
  },

  docker: {
    database: "dockerDB",
    username: "postgres",
    password: null,
    host: "postgres",
    dialect: "postgres",
  },

  test: {
    database: "starbucks-test",
    username: "postgres",
    password: 'null',
    host: "127.0.0.1",
    dialect: "postgres",
  },

  production: {
    use_env_variable: "DATABASE_URL",
    database: "d4ogj17p3m2hh6",
    username: "iffxpsluzjcxjq",
    password: "fec1d1c41541749e441874f354c26dbff20daea36b358858d3d81122ac4fa964",
    host: "ec2-44-193-111-218.compute-1.amazonaws.com",
    dialect: "postgres",
    ssl: true,
    protocol: "postgres",
    logging: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<< YOU NEED THIS
      },
    },
  },
};
