<template>
  <div id="app">
      <div class="container">
      <h1>Crypto Music</h1>
      <b-btn variant="outline-secondary" @click="start"> <i class="fas fa-play"></i></b-btn>
      <b-btn variant="outline-secondary" @click="stop"><i class="fas fa-stop"></i></b-btn>

    <b-row>
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </b-row>


  
  </div>
  </div>
</template>

<script>
import {
    mapState
  } from 'vuex'

  import Sampler from '../src/ToneInstruments/Sampler.js'
  import Bell from '../src/ToneInstruments/Bell.js'
  import FMSynth from '../src/ToneInstruments/FMSynth.js'
  import MonoSynth from '../src/ToneInstruments/MonoSynth.js'


  import Visualizer from '../src/components/SubComponents/Visualizer.vue'
  import InstrumentStrip from '../src/components/SubComponents/InstrumentStrip.vue'
  export default {
    name: 'hello',
    components: {
      InstrumentStrip,
      Visualizer,
    },
    computed: {
      ...mapState(['bell']),
    },
  
    mounted() {
      console.log(this.$socket);

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
        Sampler.instrument.triggerAttackRelease(330, 1.0);
        Bell.instrument.triggerAttackRelease(55, 1.0);
        FMSynth.instrument.triggerAttackRelease(220, 1.0);

      },
    },
  
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        websocket: null,
        instruments: [Sampler,Bell,FMSynth,MonoSynth],
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/palette.scss';
  @import url('https://fonts.googleapis.com/css?family=Raleway|Work+Sans');

#app {
font-family: 'Raleway', sans-serif;
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

   /* Enter and leave animations can use different */
  
  
  /* durations and timing functions.              */
  
  .slide-fade-enter-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-enter {
    transform: translateX(-100%);

  }
  .slide-fade-enter-to {
    transform: translateX(0%);

  }
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
  
  {
        transform: translateX(100%);
        opacity: 0;
  }
</style>
