import Tone from 'tone'

class MonoSynth {
    constructor(){
        this.instrument = new new Tone.MonoSynth({
			"oscillator" : {
				"type" : "square8"
			},
			"envelope" : {
				"attack" : 0.05,
				"decay" : 0.3,
				"sustain" : 0.4,
				"release" : 0.8,
			},
			"filterEnvelope" : {
				"attack" : 0.001,
				"decay" : 0.7,
				"sustain" : 0.1,
				"release" : 0.8,
				"baseFrequency" : 300,
				"octaves" : 4
			}
		}).toMaster();
    }
  

  }
  
  const instance = new Bell();
  Object.freeze(instance);
  
  export default instance;