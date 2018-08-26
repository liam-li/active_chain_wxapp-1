var sqlite3 = require('sqlite3');
var Promise = require('Promise');
var db = new sqlite3.Database(process.cwd() + '/public/sqlite/activechaindb.sqlite');

var dbQuery = function (sql) {
    return new Promise((resolve, reject) => {
        db.all(sql, (err, res) => {
            if (!err) {
                resolve(JSON.stringify(res));
            } else {
                reject(err);
            }
        })
    })
}

module.exports.dbQuery = dbQuery
