<template>
        <b-card class="strip" :title="title">

        <b-row>
            <b-col>
                <circle-slider
                    v-model="parameter1"
                    progressColor="#9AE19D"
                    knobColor="#9AE19D"
                    circleColor="#537A5A"
                    side="50"
                ></circle-slider>
            </b-col>
            <b-col>
                <circle-slider
                    v-model="parameter2"
                    progressColor="#9AE19D"
                    knobColor="#9AE19D"
                    circleColor="#537A5A"
                    side="50"


                ></circle-slider>
            </b-col>

            <b-col>
                <circle-slider
                    v-model="parameter3" 
                    progressColor="#9AE19D"
                    knobColor="#9AE19D"
                    circleColor="#537A5A"
                    side="50"


                ></circle-slider>
            </b-col>

        </b-row>
        <b-row>
            <!-- <div class="envelop" -->
                <b-col>
                </b-col>
         
        </b-row>
        <b-row>
            <b-btn size="sm" class="control-btn" :class="{'is-grey': !isMuted, 'is-muted': isMuted }" @click="muteInstrument">M</b-btn>
            <b-btn size="sm" class="control-btn" :class="{'is-grey': !isSoloed, 'is-soloed': isSoloed }"  @click="soloInstrument">S</b-btn>

        </b-row>
        <b-row>
            <div class="slider-container">
                <input class="slider" type="range"/>
            </div>

        </b-row>

        </b-card>

</template>

<script>
import RangeSlider from 'vue-range-slider'

import Nexus from 'nexusui'

export default {
    data() {
        return {
            title: 'Bell',
            parameter1: 1,
            parameter2: 10,
            parameter3: 70,
            isSoloed: true,
            isMuted: true,
            envelope: null,


        }
    },
      props: ['id'],

    mounted() {
    },

    methods: {
        muteInstrument() {
            this.isMuted = !this.isMuted
            console.log(this.isMuted);
        },
        soloInstrument() {
            this.isSoloed = !this.isSoloed
            console.log(this.isSoloed)

        },
    },
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/palette.scss';

.strip {
    margin-top:50px;
    height: 50vh;
    width:100%;
    background:$color2;
    min-width: 100px;
    max-width: 130px;
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

input[type="range"] {
   position: absolute;
   top: 40%;
   transform: rotate(270deg);
}
#envelope {
    // width:50px;
}
/* The slider itself */
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    // width:12/0%;
    height: 15px; /* Specified height */
    background: #3b3b3b; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
    
}

/* Mouse-over effects */
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */ 
.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 15px; /* Set a specific slider handle width */
    height: 15px; /* Slider handle height */
    background: $color4; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 15px; /* Set a specific slider handle width */
    height: 15px; /* Slider handle height */
    background: $color4; /* Green background */
    cursor: pointer; /* Cursor on hover */
}



</style>
