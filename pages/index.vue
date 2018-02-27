<template>
  <section class="container">
    
    <div class="row">
      <div class="col">
        <h1>Príbehy umenia</h1>
        <h2>Výzva pre verejnosť</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <p>
          <a href="http://www.sng.sk" target="_blank">Slovenská národná galéria</a> pripravuje sériu dokumentov o výtvarných dielach zo slovenských zbierkotvorných galérií. Chceme ukázať, že umelecké diela sú nielen fyzickými artefaktmi, ale aj odrazom doby a kontextu, v ktorom vznikli. Okrem výpovedí autorov a vlastníkov diel nás zaujímajú aj autentické a doteraz nezverejnené príbehy ľudí. Ak poznáte okolnosti vzniku diela, prípadne miesta a ľudí zobrazených na diele, podeľte sa s nami o svoj príbeh - tie najzaujímavejšie sa stanú súčasťou dokumentu, ďalšie budeme priebežne zverejňovať ako články na <a href="http://www.webumenia.sk" target="_blank">Webe umenia</a>.
        </p>
        <p>
          Môžete sa inšpirovať napríklad zbierkou <a href="http://webumenia.sk/web/guest/photo/-/staticresults?orderBy=RELEVANCE&page=1&items=28&query=&layout=gridLayout&images=true&searchFor=data" target="blank">fotografií</a> alebo <a href="http://webumenia.sk/web/guest/painting/-/staticresults?orderBy=RELEVANCE&page=1&items=28&query=&layout=gridLayout&images=true&searchFor=data" target="blank">malieb</a>.
        </p>
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
        <h2>Diela vo videu</h2>

        <ArtworkGrid :artworks="artworks" />

      </div>
    </div>  
  </section>

</template>

<script>
import ArtworkGrid from '@/components/ArtworkGrid'

export default {
  components: {
    ArtworkGrid
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