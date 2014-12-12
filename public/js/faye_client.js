$(function() {
  var userId = Math.floor(Math.random() * 100);
  var client = new Faye.Client('/faye');

  // Send message when the "Send" button is clicked.
  $('#send').click(function(e) {
    client.publish('/messages', { text: $('#userinput').val(), user: userId });
    $('#userinput').val('');
  });

  // Send message when the user presses the "enter/return" key.
  $('#userinput').keyup(function(e) {
    if(e.keyCode == 13) {  
      client.publish('/messages', { text: $('#userinput').val(), user: userId });
      $('#userinput').val('');
    }
  });

  client.subscribe('/messages', function(message) {
    $('#output').prepend(message.user + ": " + message.text + '<br>');
  });

  $('#userinput').focus();
});