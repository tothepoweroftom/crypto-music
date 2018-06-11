<template>
    <div class="strip">
        <b-row>
            <b-col>
                <circle-slider style="padding-top:30px"
                    v-model="parameter1"
                    progressColor="#9AE19D"
                    knobColor="#9AE19D"
                    circleColor="#537A5A"
                ></circle-slider>
            </b-col>
        </b-row>
                <b-row>
            <b-col>
                <circle-slider
                    v-model="parameter2"
                    progressColor="#9AE19D"
                    knobColor="#9AE19D"
                    circleColor="#537A5A"


                ></circle-slider>
            </b-col>
        </b-row>
                <b-row>
            <b-col>
                <circle-slider
                    v-model="parameter3" 
                    progressColor="#9AE19D"
                    knobColor="#9AE19D"
                    circleColor="#537A5A"


                ></circle-slider>
            </b-col>
        </b-row>

    </div>
</template>

<script>
export default {
    data() {
        return {
            parameter1: 1,
                        parameter2: 10,

            parameter3: 70,

        }
    }
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/palette.scss';

.strip {
    margin-top:50px;
    height: 60vh;
    width:100%;
    background:$color2;
}

</style>
