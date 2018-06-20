<template>
        <b-card class="strip">
      <div style="margin-top: -50px">
                <p>FX Pad</p>
            </div>
            <div id="target" ref="target">

            </div>
      
        </b-card>

</template>

<script>

import Nexus from 'nexusui'
  import Sampler from '../../ToneInstruments/Sampler.js'
  import Bell from '../../ToneInstruments/Bell.js'
  import FMSynth from '../../ToneInstruments/FMSynth.js'
  import PolySynth from '../../ToneInstruments/PolySynth.js'
export default {
    data() {
        return {

        }
    },
      props: ['id'],

    mounted() {

        let width = this.$refs.target.parentElement.clientWidth - 40;
        var position = new Nexus.Position('#target',{
        'size': [width,width],
        'mode': 'absolute',  // "absolute" or "relative"
        'x': 0.5,  // initial x value
        'minX': 0,
        'maxX': 1,
        'stepX': 0,
        'y': 0.5,  // initial y value
        'minY': 0,
        'maxY': 1,
        'stepY': 0
        })
        position.on('change',function(v) {
            console.log(v);
            FMSynth.dist.value = v.x;
            Sampler.dist.value = v.x;
            PolySynth.dist.value = v.x;
            FMSynth.pingPong.feedback.value = v.x - 0.05;
            Sampler.pingPong.feedback.value = v.x -0.05;
            PolySynth.pingPong.feedback.value = v.x -0.05;
            FMSynth.pitch.pitch = -12 + v.y * 12;
            Sampler.pitch.pitch =  -12 + v.y * 12;
            PolySynth.pitch.pitch =  -12 + v.y * 12;


        })

        position.colorize("accent","#537A5A")
position.colorize("fill","#474A48")
    },

    methods: {

    },
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/palette.scss';
.row {
}
.strip {
    margin-top:50px;
    height: 55vh;
    background:$color1;
    border: 0px;
}

#target {
    margin-top: -20px;
}

.control-btn {
    height: 30px;
    width:30px;
    margin: 10px;
}

.is-grey{
  background-color:$color2;
}
.is-muted{
  background-color:red;
}

.is-soloed{ 
      background-color:$color5;

}

.slider-container {
position: relative;
top:60px;
margin: auto -10px;
}



</style>
