<template>
    <div class="text container">
        <b-row>
            <router-link to="/" style="position: relative; top:20px; left:100%;">
                 <i class="fas fa-times" style="font-size:22px;"></i>
            </router-link>
        </b-row>
        <b-row>
            <h3>About</h3>
        </b-row>
        <b-row>
            <p></p>
            <p>Crypto Music is a research project by <a href="https://tothepoweroftom.com">Tom Power</a> undertaken while at  <a href="https://mobgen.com">MOBGEN:Lab</a>.
             The aim of this project is to create an art project from Bitcoin transactions. The website <a href="https://blockchain.info/api/api_websocket">blockchain.com</a> provides
             and open api websocket to listen to real time bitcoin transactions.
             </p>
             <p> Each transaction triggers a new particle system in the visualisation and a new note in the audio. p5js and delaunayjs are being used for the visualisation and 
                 the wonderful tonejs for the audio. </p>
        </b-row>

        <b-row></b-row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');


.text {
    font-family: Lato, sans-serif;
    text-align: justify;
    padding:40px;
}
</style>
