<template>
  <footer class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <a href="https://www.facebook.com/webumenia.sk" target="_blank" data-toggle="tooltip" title="facebook"><i class="fa fa-facebook fa-lg"></i></a>
          <a href="http://webumenia.tumblr.com/" target="_blank" data-toggle="tooltip" title="tumblr"><i class="fa fa-tumblr fa-lg"></i></a>
          <a href="https://vimeo.com/webumeniask" target="_blank" data-toggle="tooltip" title="vimeo"><i class="fa fa-vimeo-square fa-lg"></i></a>
          <a href="https://sk.pinterest.com/webumeniask/" target="_blank" data-toggle="tooltip" title="pinterest"><i class="fa fa-pinterest fa-lg"></i></a>
          <a href="https://twitter.com/webumeniask" target="_blank" data-toggle="tooltip" title="twitter"><i class="fa fa-twitter fa-lg"></i></a>
          <a href="https://instagram.com/web_umenia/" target="_blank" data-toggle="tooltip" title="instagram"><i class="fa fa-instagram fa-lg"></i></a>
          <a href="https://github.com/SlovakNationalGallery" target="_blank" data-toggle="tooltip" title="github"><i class="fa fa-github fa-lg"></i></a>
        </div>
        <div class="col-6">
          <p class="text-muted text-right">{{$t('TheFooter.madeBy')}} <a href="http://lab.sng.sk" target="_blank" class="sans">lab.SNG</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  i.fa {
    margin-right: 10px;
    margin-bottom: 5px;
  }
</style>