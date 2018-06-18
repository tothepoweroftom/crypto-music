import Tone from 'tone'

class Bell {
    constructor(){
        this.instrument = new Tone.MetalSynth({
			"harmonicity" : 31,
			"resonance" : 800,
			"modulationIndex" : 2,
			"envelope" : {
				"decay" : 2.0,
			},
			"volume" : -15
		}).toMaster();
    }
  

  }
  
  const instance = new Bell();
  Object.freeze(instance);
  
  export default instance;