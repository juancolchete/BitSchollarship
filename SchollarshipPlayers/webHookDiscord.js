function sendMessage(message) {
    var url = 'YOUR_WEB_HOOK_URL'
var data = {
  'username': 'Colchetinho',
  'content': message
};
var options = {
   "method" : "post",
   'contentType': 'application/json',
   'payload' : JSON.stringify(data)
};
UrlFetchApp.fetch(url,options);
}