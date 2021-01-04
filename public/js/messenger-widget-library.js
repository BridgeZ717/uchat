window.fbAsyncInit = function () {
  FB.init({
    appId: '281100559892957',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v8.0'
  })
  FB.Event.subscribe('send_to_messenger', function(e) {
    // callback for events triggered by the plugin

    });
}; 


function undefinedCheck(elem){
    return (elem!=undefined)
}


(function set(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);

  var elem = document.getElementById('ucwidget');

  if(undefinedCheck(ucwidget.widgets[0].widget_type))
  elem.setAttribute('class',ucwidget.widgets[0].widget_type);

  if(undefinedCheck(ucwidget.pageId))
  elem.setAttribute('page_id',ucwidget.pageId);

  if(undefinedCheck(ucwidget.appId))
  elem.setAttribute('messenger_app_id',ucwidget.appId);

  if(undefinedCheck(ucwidget.messaging_referrals))
  elem.setAttribute('ref',ucwidget.messaging_referrals);

  if(undefinedCheck(ucwidget.widgets[0].data.setup.themeColor))
  elem.setAttribute('theme_color',ucwidget.widgets[0].data.setup.themeColor);

  if(undefinedCheck(ucwidget.widgets[0].data.setup.loggedInGreeting))
  elem.setAttribute('logged_in_greeting',ucwidget.widgets[0].data.setup.loggedInGreeting);

  if(undefinedCheck(ucwidget.widgets[0].data.setup.loggedOutGreeting))
  elem.setAttribute('logged_out_greeting',ucwidget.widgets[0].data.setup.loggedOutGreeting);

  if(undefinedCheck(ucwidget.widgets[0].data.setup.greetingDialogDisplay))
  elem.setAttribute('greeting_dialog_display',ucwidget.widgets[0].data.setup.greetingDialogDisplay);

  if(undefinedCheck(ucwidget.widgets[0].data.setup.greetingDialogDelay))
  elem.setAttribute('greeting_dialog_delay',ucwidget.widgets[0].data.setup.greetingDialogDelay);

  if(undefinedCheck(ucwidget.widgets[0].data.setup.minimized))
  elem.setAttribute('minimized',ucwidget.widgets[0].data.setup.minimized);

  console.log(document.getElementById('ucwidget'));

}(document, 'script', 'facebook-jssdk'));
