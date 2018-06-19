var appid = 67621;
var secret = "70c0ac664f2d415fa7cb356f2c7e18ff";
var param = "?showapi_appid=" + appid +"&showapi_sign="+secret;

var textJoke = "https://route.showapi.com/341-1"+param;
var imgJoke = " https://route.showapi.com/341-2"+param;
var gifJoke = "https://route.showapi.com/341-3"+param;

module.exports = {
  textJoke: textJoke,
  imgJoke: imgJoke,
  gifJoke: gifJoke

}