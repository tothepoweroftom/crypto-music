<template>
    <div class='visualizer' id="visualizer">

    </div>
</template>

<script>
import sketch from './p5VisualiserSketch.js'
import p5 from 'p5'
export default {
    data() {
        return {
            myp5: null,
        }
    },
    mounted() {
        this.myp5 = new p5(sketch, document.getElementById('visualizer'))
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/palette.scss';

.visualizer {
    width:100%;
    height: 100%;
    background: $color2;
        margin-top:50px;
    border-radius: 5px;
}


</style>
