'use strict';

const Sequelize         = require("sequelize");
const postgresModels    = require('./models');
const chalk             = require('chalk');

var sequelize = new Sequelize(CFG.postgres.name, CFG.postgres.user, CFG.postgres.password, {
    host: CFG.postgres.host,
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

exports.connect = function(){

    return sequelize
      .authenticate()
      .then(function(err) {
        console.log(chalk.green(chalk.magenta('| POSTGRES DATABASE |')+' - connected'));
        postgresModels.init(sequelize);
      })
      .catch(function (err) {
          console.log(chalk.red('| POSTGRES | Error when connecting to postgres'));
          throw new Error(err);
      });

};

exports.sequelize = sequelize;
