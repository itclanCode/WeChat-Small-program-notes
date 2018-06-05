var appid = 66747;
var secret = "269a63df181d4a4088fcd85d429ffbd2";
var param = "?showapi_appid=" + appid +"&showapi_sign="+secret;

var textJoke = "https://route.showapi.com/341-1"+param;
var imgJoke = " https://route.showapi.com/341-2"+param;
var gifJoke = "https://route.showapi.com/341-3"+param;

module.exports = {
  textJoke: textJoke,
  imgJoke: imgJoke,
  gifJoke: gifJoke

}