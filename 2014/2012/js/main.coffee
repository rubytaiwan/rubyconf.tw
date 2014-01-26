$(document).ready ->
  $(window).scroll ->
    scrollPos = $(this).scrollTop()
    $("section").css "background-position": "center " + (-scrollPos / 4) + "px"

  $("img.lazy").show().lazyload
    failure_limit: 10
    skip_invisible: false
    effect: "fadeIn"

  $("#registration").on click: (e) ->
    e.preventDefault()
    window.open 'http://registrano.com/events/rubyconf-taiwan-2012', '_blank'

  $("#navigation a").on click: (e) ->
    e.preventDefault()
    $("body").stop().scrollTo $($(this).attr("href")),
      duration: 1200
      offset:
        left: 0
        top: -0.03 * $(window).height()

  $('.popup').each ->
      $(this).qtip
        content:
            text: $(this).attr('rel')
        position:
            my: 'bottom center'
            at: 'top center'
            target: $(this)
        style:
            classes: 'ui-tooltip-light ui-tooltip-rounded'
