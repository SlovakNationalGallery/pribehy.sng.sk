$(document).ready(function() {
  console.log("init magnificPopup!!!");
  console.log($('.magnific-container').length);
  $('.magnific-containter').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    fixedContentPos: false,              
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">webumenia</a>';
      }
    },
    gallery: {
      enabled: true,
      tCounter:"%curr% / %total%"
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });
});