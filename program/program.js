'use strict';

// Dropdown
var $trigger = $('.js-dropdown-trigger');

$trigger.on('click', function() {
  var $dropdown = $trigger.next();
  if ($dropdown.hasClass('hidden')) {
    $dropdown.removeClass('hidden');
  } else {
    $dropdown.addClass('hidden');
  }
  return false;
});


  $(".program-page").on('click', function(){
      $('.program-block').removeClass('faded highlight');
      $('.js-dropdown-trigger').next().addClass('hidden');
      $('.js-dropdown-trigger').html('<span class="dot pad0 inline fill-all"></span>All categories');
  })

// Category selection
var $category = $('.js-category');
var $programs = $('.program-block');

$category.on('click', function() {
  var cat = $(this).data('category');
  var label = $(this).data('label');
  var dot = '<span class="dot pad0 inline fill-' + cat + '"></span>';

  $trigger.html(dot + label);

  // Run through each program block
  // and hide what's not `cat`


  $programs.each(function() {
    var $el = $(this);

    if (cat === 'all') {
      $el.removeClass('faded highlight');
    } else if ($el.data('category') === cat) {
      $el.removeClass('faded');
      $el.addClass('highlight');
    } else {
      $el.addClass('faded');
    }
  });

  // Close the dropdown.
  $trigger.trigger('click');
  return false;
});

// Affix header
var $header = $('.js-fixed');
var $footer = $('footer');
var $additional = $('#additional');

var $siteHeader = $($('header').get(0));
var $programIntro = $('#program-intro');

$header.affix({
  offset: {
    top: function () {
      return (this.top = $siteHeader.outerHeight(true) + $programIntro.outerHeight(true) + 20);
    }
  }
});

// Content update on scroll
var $dateTitle = $('.js-date');
var $dateTitles = $('[data-title]');

$(window).on('resize scroll', function() {
  var pos = $dateTitle.offset();

  $dateTitles.each(function() {
    var $el = $(this);

    if ($el.next().get(0)) {

      // 50 = Header title height.
      // 180 = session container height.
      if (pos.top >= ($el.offset().top - 50) &&
          pos.top <= ($el.next().offset().top + 180)) {
        $dateTitle.text($el.data('title'));
        return;
      }
    }
  });
});

$(window).trigger('scroll');
