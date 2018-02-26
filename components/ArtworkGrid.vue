<template>
  <ul class="grid magnific-container cs-style-3">
    <a v-for="artwork in artworks" :href="artwork.img" :title="artwork.name" :data-source="artwork.url">
      <li>
        <figure>
          <img :src="artwork.thumb" :alt="artwork.author + ' - ' + artwork.name">
          <figcaption>
            <h3>{{artwork.author}}</h3>
            <span>{{artwork.name}}</span>
          </figcaption>
        </figure>
      </li>
    </a>          
  </ul>
</template>

<script>
  export default {
    head: {
      script: [
        { src: 'js/jquery-3.3.1.slim.min.js', body: true },
        { src: 'js/jquery.magnific-popup.min.js', body: true },
      ]
    },
    mounted: function () {
      console.log("MOUNTED");
      $(document).ready(function() {
        console.log("DOCUMENT READY");
        console.log($('.magnific-container').length);
        $('.magnific-container').magnificPopup({
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
    },
    props: ['artworks']
  }
</script>

<style scoped>
/* Caption Style based on https://tympanus.net/codrops/2013/06/18/caption-hover-effects/ */
.grid {
  padding: 20px 20px 100px 20px;
  max-width: 1300px;
  margin: 0 auto;
  list-style: none;
  text-align: center;
}

.grid li {
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 20px;
  text-align: left;
  position: relative;
}

.grid figure {
  margin: 0;
  position: relative;
}

.grid figure img {
  max-width: 100%;
  display: block;
  position: relative;
}

.grid figcaption {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  background: #007fc5;
  color: #003d6b;
}

.grid figcaption h3 {
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 1.2rem;
}

.grid figcaption span {
  font-size: 0.9rem;
}

.grid figcaption a {
  text-align: center;
  padding: 5px 10px;
  border-radius: 2px;
  display: inline-block;
  background: #ed4e6e;
  color: #fff;
}

/* Caption Style 3 */
.cs-style-3 figure {
  overflow: hidden;
}

.cs-style-3 figure img {
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  transition: transform 0.4s;
}

.no-touch .cs-style-3 figure:hover img,
.cs-style-3 figure.cs-hover img {
  -webkit-transform: translateY(-50px);
  -moz-transform: translateY(-50px);
  -ms-transform: translateY(-50px);
  transform: translateY(-50px);
}

.cs-style-3 figcaption {
  height: 100px;
  width: 100%;
  top: auto;
  bottom: 0;
  opacity: 0;
  -webkit-transform: translateY(100%);
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
  transition: transform 0.4s, opacity 0.1s 0.3s;
}

.no-touch .cs-style-3 figure:hover figcaption,
.cs-style-3 figure.cs-hover figcaption {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s;
  transition: transform 0.4s, opacity 0.1s;
}

.cs-style-3 figcaption a {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

@media screen and (min-width: 768px) {
  .grid li {
    width: 50%;
  }
}

@media screen and (min-width: 992px) {
  .grid {
    padding: 10px 10px 100px 10px;
  }
  .grid li {
    width: 25%;
    padding: 10px;
  }
}

</style>