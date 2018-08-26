var express = require('express');
var request = require('request');
var Promise = require('Promise');
var router = express.Router();
var dbconn = require('../utils/dbconn.js')

var wx_appid = "wx5b455f3a9165c202";
var wx_appsecret = "01f43252196642a0a29010260bb1cad1";


var checkuser = function (url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject(body);
      }
    })
  })
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Active Chain App - Backend - User');
});

router.get('/wxlogin', async function (req, res, next) {
  var js_code = '021cq5J90L6ckw1RoXM90ObiJ90cq5JA';
  var wxurl = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + wx_appid + '&secret=' + wx_appsecret + '&js_code=' + js_code + '&grant_type=authorization_code';
  try {
    let ucheck = await checkuser(wxurl);
    res.send(ucheck);
  } catch (e) {
    console.log(e);
    res.send({});
  }
});

router.get('/selectuser', async function (req, res, next) {
  try {
    var ret = await dbconn.dbQuery('select * from ac_user');
    res.send(ret);
  } catch (e) {
    console.log(e);
    res.send([]);
  }
});

module.exports = router;
