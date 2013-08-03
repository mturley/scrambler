scrambler
=========

This is my solution to a quiz from http://chili.fuzzproductions.com/quizzes/js1
-------------------------------------------------------------------------------

The code in scrambler.js exposes a global object `Scrambler` which has two methods, `Scrambler.scramble() and Scrambler.unscramble()`.
Both methods accept a jQuery object or a jQuery selector string for the element which contains either the message text or the scrambled characters.


For example, you can test the scrambler on index.html by opening the javascript console ([instructions here](http://goo.gl/px2A4e)) and typing:

    $("body").text("Put a message here that you'd like to scramble and unscramble!");
    Scrambler.scramble("body");
    // wait a few seconds and observe the scrambling happening!
    Scrambler.unscramble("body"); 
    // observe an instant reveal of your message!
