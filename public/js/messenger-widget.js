window.ucwidget = { "appId": "281100559892957", "pageId": "108660541021397", "widgets": [{ "page_id": "108660541021397", "widget_type": "fb-customerchat", "status": "active", "name": "", "data": { "feed_comment_settings": [], "setup": { "loggedInGreeting": "", "loggedOutGreeting": "", "minimized": "", "themeColor":"#FB397D","enable_ref_payload": true } }, "channel": "facebook", "ts_created": 1601777635, "chat_ref": "w13059923" }, { "widget_id": 8067401, "page_id": "108660541021397", "widget_type": "landing", "status": "active", "name": "Example Landing", "data": [], "channel": "facebook", "ts_created": 1572820005 }], "widgetLocale": "en_US", "defaultSize": 0, "fbSDKVersion": "v8.0", "whitelist": ["e04a45f0a505569fddc714decd22a84e8cb421b628b371dd70f2ca7035eac346", "f2cbfeda670dc91d10651057f2d9c1f9010175cf28059cfc43337b7d2c6f3f4d", "183d7fa329df699a1a81796c8efb1ba3b24be478479867db0c8f1d7e0fadaa50", "9273d9841a65b28650584f8d973a46034a7de3493df7901e79fc7eeecca797a5"], "smsModalConsentText": ""};

function createDiv(){
  var div,fdiv=document.getElementsByTagName('div')[0];
  if(document.getElementById('ucwidget')){return;}
  div = document.createElement('div'); div.id = 'ucwidget';
  fdiv.parentNode.insertBefore(div,fdiv);
}

(function (d, s, id) {
  createDiv();
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = 'public/js/messenger-widget-library.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'ucwidget-library'));