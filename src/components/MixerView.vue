<template>
<div class="container" style="height:100vh;">

      <b-col>
        <b-row>
            <router-link tag="li" to="/">
                 <a>Visualizer</a>
            </router-link>
        </b-row>
        <b-row>
          <b-col v-for="(instrument, index) in instruments" :key="index">
            <instrument-strip :id="index"></instrument-strip>
          </b-col>

        </b-row>
      </b-col>
</div>

</template>

<script>
  import InstrumentStrip from '../components/SubComponents/InstrumentStrip.vue'

export default {
    components: {
      InstrumentStrip,
    },
}
</script>

<style>


</style>
