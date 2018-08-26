var express = require('express');
var request = require('request');
var router = express.Router();

var wx_appid = "wx5b455f3a9165c202";
var wx_appsecret = "01f43252196642a0a29010260bb1cad1";

var checkuserres = {};
var checkuser = async function (url) {
  await request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      checkuserres = body;
    }
  })
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/wxlogin', function (req, res, next) {
  var js_code = '021cq5J90L6ckw1RoXM90ObiJ90cq5JA';
  var wxurl = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + wx_appid + '&secret=' + wx_appsecret + '&js_code=' + js_code + '&grant_type=authorization_code';
  checkuser(wxurl);
  res.send(checkuserres);
});

module.exports = router;
