<template>
  <div id="app">
      <div class="container">
        <div class="web-title">
          <h1 style="font-size: 3.0vh;">Crypto Music</h1>
          <h5 style="font-size: 1.5vh; font-weight:100; color: rgba(154, 225, 157, 1); border-bottom:1px solid; display: inline-block; ">Realtime Bitcoin Transactions</h5>
            <ul>
              <router-link to="/about">
                <a>About</a>
              </router-link>
              <li>
                    <b-btn class="play-btn" id="play-btn" variant="outline-secondary" @click="toggleStart"> {{buttonClass}}</b-btn>
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
import Tone from 'tone'
import StartAudioContext from 'startaudiocontext'
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
        StartAudioContext(Tone.context, '#play-btn').then(function(){
          //started
          console.log("web audio started");
        })
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

            this.generateNote(msgData.x.hash)
          }
        }
      }, 
      generateNote(value) {
        this.p5Object.addParticles(value)
        PolySynth.playNote();
        Sampler.playNote();
        FMSynth.playNote();


      },
    },
  
    data() {
      return {
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
  color:rgb(221, 255, 228);
  margin-top: 60px;
    background: rgba(44, 48, 46, 1) !important;
  height:100vh;
  overflow-y: hidden;
}
a {
  color: rgba(83, 122, 90, 1) !important;
}

.btn {
  border:0px !important;
  padding:0px !important;
}
body {
  background: rgba(44, 48, 46, 1) !important;

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
  }

  .play-btn {
    color:$color3;
    border: 0px;
    margin-left:20px;
    margin-top: -8px;
    height:20px;
    padding:0px;
  }
</style>
