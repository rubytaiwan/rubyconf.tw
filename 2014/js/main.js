
$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPos;
    scrollPos = $(this).scrollTop();
    return $("section#home").css({
      "background-position": "center " + (-scrollPos / 4) + "px"
    });
  });
  $("img.lazy").show().lazyload({
    failure_limit: 10,
    skip_invisible: false,
    effect: "fadeIn"
  });
  $("#registration").on({
    click: function(e) {
      e.preventDefault();
      return window.open('http://rubytaiwan.kktix.cc/events/rubyconftw2014', '_blank');
    }
  });
  $("#navigation a").on({
    click: function(e) {
      e.preventDefault();
      return $("body").stop().scrollTo($($(this).attr("href")), {
        duration: 1200,
        offset: {
          left: 0,
          top: -0.03 * $(window).height()
        }
      });
    }
  });
  return $('.popup').each(function() {
    return $(this).qtip({
      content: {
        text: $(this).attr('rel')
      },
      position: {
        my: 'bottom center',
        at: 'top center',
        target: $(this)
      },
      style: {
        classes: 'ui-tooltip-light ui-tooltip-rounded'
      }
    });
  });
});
