window.Scrambler = {
  scramble : function(selector) {
    var elem = $(selector);
    var message = elem.text();
    var i;
    var html = '';
    // first we'll fill up a blob of random characters.
    for(i = 0; i < message.length * 40; i++) {
      // get a random character in the ascii range and put it in our blob.
      var rand = 33 + Math.floor(93 * Math.random());
      html += '<span>'+String.fromCharCode(rand)+'</span>';
      if((i + 1) % 100 === 0) html += '<br>';
    }
    elem.html(html);
    // now we have 40 random characters on the page for every character of the message.
    // next we just need to embed the message into those spans.
    for(i = 0; i < message.length; i++) {
      var span = elem.find("span").eq(40 * i + Math.floor(Math.random() * 40));
      $('<span hidden>'+message[i]+'</span>').insertAfter(span);
    }
  },
  unscramble : function(selector) {
    var elem = $(selector);
    elem.html(elem.find('span').filter('[hidden]').text());
  }
};