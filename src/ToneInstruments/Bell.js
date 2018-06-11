import Tone from 'tone'

class Bell {
    constructor(){
        this.instrument = new Tone.MetalSynth({
			"harmonicity" : 12,
			"resonance" : 800,
			"modulationIndex" : 20,
			"envelope" : {
				"decay" : 0.4,
			},
			"volume" : -15
		}).toMaster();
    }
  

  }
  
  const instance = new Bell();
  Object.freeze(instance);
  
  export default instance;