<template>
  <div class="container">
      <h1>Crypto Music</h1>
      <b-btn @click="start">Start</b-btn>
      <b-btn @click="stop">Stop</b-btn>
    <b-row>
      <b-col>
        <b-row>
          <b-col>
            <instrument-strip></instrument-strip>
          </b-col>
          <b-col>
            <instrument-strip></instrument-strip>
          </b-col> 
          <b-col>
            <instrument-strip></instrument-strip>
          </b-col>
          <b-col>
            <instrument-strip></instrument-strip>
          </b-col> 
        </b-row>
      </b-col>
      <b-col>
        <visualizer>

        </visualizer>
      </b-col>
    </b-row>


  
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  import Bell from '../ToneInstruments/Bell.js'
  import Visualizer from './SubComponents/Visualizer.vue'
  import InstrumentStrip from './SubComponents/InstrumentStrip.vue'
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
        console.log(Bell.instrument)
        Bell.instrument.triggerAttackRelease(440, 1.0);

      },
    },
  
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        websocket: null,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
