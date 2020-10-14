(function ($, Drupal) {
  Drupal.behaviors.odeys = {
    attach: function (context, settings) {

      // evenement au click sur bouton
      $('.layout-toggle', context).once('onced').each(function () {
        $(this).on('click', function () {
          if ($(this).parents('#block-menutoggle').length && $('.layout.search').hasClass('open')) {
            $('.layout.search').removeClass('open');
            $('#block-searchtoggle .layout-toggle').attr('aria-expanded', 'false');
          }
          else if ($(this).parents('#block-searchtoggle').length && $('.layout.menu').hasClass('open')) {
            $('.layout.menu').removeClass('open');
            $('#block-menutoggle .layout-toggle').attr('aria-expanded', 'false');
          }
          else {
            $('html').toggleClass('layout-open');
          }

          $('.layout.' + $(this).data('layout')).toggleClass('open');
          $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');

          if ($(this).parents('#block-searchtoggle').length) {
            $('#edit-search-api-fulltext').focus();
          }
        });
      });

      $('.menu--main', context).once('onced').each(function () {
        $('> ul.menu > li', this).each(function () {
          var $li = $(this);
          $('<span class="mobile"></span>').appendTo($li)
                                           .on('click', function () {
            $li.toggleClass('open');
          });
        });
      });

      languageAbbr();
      $(window).resize(languageAbbr);

    }
  };

  function languageAbbr() {
    if ("matchMedia" in window) {
      $('header .layout.language .language-switcher-language-url li a').once('org').each(function () {
        $(this).data('org', $(this).text());
      });

      $('header .layout.language .language-switcher-language-url li a').each(function () {
        if (window.matchMedia("(min-width:960px)").matches) {
          $(this).text($(this).data('org').substring(0, 2));
        }
        else {
          $(this).text($(this).data('org'));
        }
      });
    }
  }

})(jQuery, Drupal);
