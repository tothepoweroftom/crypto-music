<template>
  <div id="app">
      <div class="container">
        <div class="web-title">
                <h4>Crypto Music</h4>
                  <ul>
                  <router-link to="/about">
                    <a>About</a>
                  </router-link>
                  <li>
                        <b-btn class="play-btn" variant="outline-secondary" @click="toggleStart"> {{buttonClass}}</b-btn>

                  </li>
                  </ul>


        </div>



    <b-row style="padding-top:80px;">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </b-row>


  
  </div>
  </div>
</template>

<script>
import {
    mapState, 
    mapActions,
  } from 'vuex'



  import Sampler from '../src/ToneInstruments/Sampler.js'
  import Bell from '../src/ToneInstruments/Bell.js'
  import FMSynth from '../src/ToneInstruments/FMSynth.js'
  import PolySynth from '../src/ToneInstruments/PolySynth.js'


  import Visualizer from '../src/components/SubComponents/Visualizer.vue'
  import InstrumentStrip from '../src/components/SubComponents/InstrumentStrip.vue'
  export default {
    name: 'hello',
    components: {
      InstrumentStrip,
      Visualizer,
    },
    computed: {
      ...mapState(['bell','p5Object']),
    },


  
    mounted() {
      console.log(this.$socket);
            FMSynth.connectComponents()
            PolySynth.connectComponents()
            Sampler.connectComponents()

    },


  
    methods: {
      start() {
      this.$socket.send('{"op":"unconfirmed_sub"}')
      this.$options.sockets.onmessage = (data) => this.processTxData(event)

      },
      stop() {
      this.$socket.send('{"op":"unconfirmed_sub"}')
      delete this.$options.sockets.onmessage

      },
      toggleStart() {

        if (!this.playing) {
          this.$socket.send('{"op":"unconfirmed_sub"}')
          this.$options.sockets.onmessage = (data) => this.processTxData(event)
          this.buttonClass = 'Stop'
          this.playing = !this.playing
        } else if (this.playing) { 
          this.$socket.send('{"op":"unconfirmed_sub"}')
          delete this.$options.sockets.onmessage
          this.buttonClass = 'Start'
          this.playing = !this.playing

        }

      },
      processTxData(event) {
        // console.log(event.data);
          var msgData = JSON.parse(event.data);
          if (msgData.op == 'utx'){
            var txHash = msgData.x.hash;
            var outputs = msgData.x.out;
            var totalTxValue = 0; 
            for(var j=0;j<outputs.length;j++){
            var output = outputs[j];
            totalTxValue += output.value;

            this.generateNote(output.value)
          }
        }
      }, 
      generateNote(value) {
        this.p5Object.addParticles()
        FMSynth.playNote();
                PolySynth.playNote();
                Sampler.playNote();


      },
    },
  
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        websocket: null,
        buttonClass: 'Start',
        playing: false,
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/palette.scss';
@import url('https://fonts.googleapis.com/css?family=Space+Mono');

#app {
font-family: 'Space Mono', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:$text-color;
  margin-top: 60px;
}
body {
  background: $color1;

}

 h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }

  .card {
    border-radius:0px;
}

   /* Enter and leave animations can use different */
  
  
  /* durations and timing functions.              */
  
  .slide-fade-enter-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-enter {
    transform: translateX(+200%);

  }
  .slide-fade-enter-to {
    transform: translateX(0%);

  }
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
  
  {
        transform: translateX(-200%);
        opacity: 0;
  }

  .web-title {
    position: absolute;
    top: 20px;
    left:20px;
    width:50px;
  }

  .play-btn {
    color:$color3;
    border: 0px;
    margin-left:-10px;
    height:20px;
    padding:0px;
  }
</style>
