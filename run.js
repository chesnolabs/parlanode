global.CFG = require('./config');

var server      = require('./server/server');
var database    = require('./server/database');
var chalk       = require('chalk');
const postgres  = require('./server/parlalize_db');

function init(){

    return database.connect()
        .then((postgres.connect))
        .then(server.init)
        .then(function(){

            console.log(chalk.green('All is well'));

        })
        .catch(function(err){
            console.log(chalk.red('Error'));
            console.log(err);
        });

}

if (require.main === module) {
    init();
}

exports.app = server.app;
exports.init = init;
