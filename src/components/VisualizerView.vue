<template>
<div class="container" style="height:100vh; ">
    <b-col>
        <b-row>
            <router-link tag="li" to="/mixer">
                 <a>Mixer</a>
            </router-link>
        </b-row>
        <b-row>
            <visualizer></visualizer>
        </b-row>

    </b-col>
</div>

</template>

<script>
  import Visualizer from '../components/SubComponents/Visualizer.vue'

export default {
    components: {
      Visualizer,
    },
}
</script>

<style>

</style>
