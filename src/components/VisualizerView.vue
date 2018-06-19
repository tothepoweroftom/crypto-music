<template>
<div class="container" style="height:100vh; ">
    <b-col>
        <b-row>
            <router-link to="/mixer">
                <i class="fas fa-sliders-h" style="font-size:28px;position:absolute; top:10px; right:30px"></i>
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

    created() {

    },
}
</script>

<style>

</style>
