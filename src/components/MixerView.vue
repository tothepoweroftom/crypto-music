<template>
<div class="container" style="height:100vh;">

      <b-col>
        <b-row>
            <router-link to="/">
                 <i class="fas fa-times" style="font-size:22px;"></i>


            </router-link>
        </b-row>
        <b-row>
          <b-col  v-for="(instrument, index) in instruments" :key="index">
            <instrument-strip :id="index"></instrument-strip>
          </b-col>


          <b-col cols="6">
            <effect-strip></effect-strip>
          </b-col>

        </b-row>
      </b-col>
</div>

</template>

<script>
  import InstrumentStrip from '../components/SubComponents/InstrumentStrip.vue'
    import EffectStrip from '../components/SubComponents/EffectStrip.vue'

  import Sampler from '../../src/ToneInstruments/Sampler.js'
  import Bell from '../../src/ToneInstruments/Bell.js'
  import FMSynth from '../../src/ToneInstruments/FMSynth.js'
  import PolySynth from '../../src/ToneInstruments/PolySynth.js'

export default {
    components: {
      InstrumentStrip,
      EffectStrip,

    },

    data() {
      return {
        instruments: [Sampler,FMSynth,PolySynth],

      }
    }
}
</script>

<style>


</style>
