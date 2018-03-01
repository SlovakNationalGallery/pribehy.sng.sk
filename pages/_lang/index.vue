<template>
  <div>
    <section class="container">
      
      <div class="row">
        <div class="col">
          <h1>{{ $t('home.title') }}</h1>
          <h2>{{ $t('home.subTitle') }}</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <p v-html="$t('home.p1')"></p>
          <p v-html="$t('home.p2')"></p>
        </div>
        <div class="col-12 col-md-6">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="//www.youtube.com/embed/QW6k75u0oWA?autohide=1&showinfo=0&rel=0&theme=light&vq=hd720"  allowfullscreen></iframe>
          </div>
        </div>

      </div>

      <hr/>

      <div class="row">
        <div class="col-12">
          <h2>{{ $t('home.artworksTitle')}}</h2>

          <div class="text-center">
            <ArtworkGrid :artworks="artworks" />
            <BaseButton 
              :text="$t('home.artworksButtonText')" 
              :url="'https://www.webumenia.sk/katalog?gallery=Slovensk%C3%A1+n%C3%A1rodn%C3%A1+gal%C3%A9ria%2C+SNG'"
            />
          </div>

        </div>
      </div>  
    </section>
  </div>
</template>

<style scoped>
  section {
    margin-top: 60px;
    margin-bottom: 60px;
  }
</style>

<script>
import ArtworkGrid from '@/components/ArtworkGrid'
import BaseButton from '@/components/BaseButton'

export default {
  components: {
    ArtworkGrid,
    BaseButton,
  },
  data: function () {
    return {
      artworks: [
        {
          author: 'Ján Cifra',
          name: 'Národopisné slávnosti (1956)',
          thumb: 'img/thumbs/SVK.SNG.up-dk_1426-10.jpg',
          img: 'img/full/SVK.SNG.up-dk_1426-10.jpg',
          url: 'https://www.webumenia.sk/dielo/SVK:SNG.UP-DK_1426-10',
        },
        {
          author: 'Štefan Bednár',
          name: 'Podhradské nábrežie (1946-1947)',
          thumb: 'img/thumbs/SVK.SNG.O_12.jpg',
          img: 'img/full/SVK.SNG.O_12.jpg',
          url: 'https://www.webumenia.sk/dielo/SVK:SNG.O_12',
        },
        {
          author: 'Andrej Doboš',
          name: 'Partizánka Maťuchová (1954)',
          thumb: 'img/thumbs/SVK.SNG.O_1195.jpg',
          img: 'img/full/SVK.SNG.O_1195.jpg',
          url: 'https://www.webumenia.sk/dielo/SVK:SNG.O_1195',
        },
        {
          author: 'Eduard Pavlačka',
          name: 'Generácia (1965)',
          thumb: 'img/thumbs/SVK.SNG.UP-DK_1731.jpg',
          img: 'img/full/SVK.SNG.UP-DK_1731.jpg',
          url: 'https://www.webumenia.sk/dielo/SVK:SNG.UP-DK_1731',
        }
      ]
    }
  }
}
</script>