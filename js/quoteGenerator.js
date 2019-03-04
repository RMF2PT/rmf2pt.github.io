var url = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

var nextImg = function() {
  return ("url(https://picsum.photos/g/800/600?image="+Math.floor(Math.random() * 100) + 1);
};

var changeBackgroundImage = function() {
  $('.wrapper').fadeOut(400, function() {
    $(this).css('background-image', nextImg());
    $(this).fadeIn('fast');
  });
}

var getNewQuote = function(data) {
  changeBackgroundImage();
  $('blockquote').fadeOut('slow', function() {
    $(".quote").text(data.quote);
    if (data.author === undefined || data.author === "") {
      $('.author').text('Anonymous');
    } else {
      $('.author').text(data.author);
    }
    $('.tweet-share-button').attr('href', 'https://twitter.com/intent/tweet?text=SUCCESS');
    $(this).fadeIn('slow');
  })
};

$(document).ready(function() {
  // new quote when the page loads
  $.getJSON(url, getNewQuote);
  
  // new quote on click
  $('#getNewQuote').on('click', function() {
    $.getJSON(url, getNewQuote);
  });
  
  // tweet quote
  $('#tweet').click(function() {
    var quoteText = $('.quote').text().trim();
    var author = $('.author').text().trim();
    var tweetText = quoteText + " " + author;
    if (tweetText.length > 140) {
      // truncate tweet without cutting any word in half
      tweetText = tweetText.substring(0, 140).split(" ").slice(0, -1).join(" ") + "...";
    }
    var tweetURL = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText);
    window.open(tweetURL, '', 'top=500,left=500,width=650,height=450');
  });
});