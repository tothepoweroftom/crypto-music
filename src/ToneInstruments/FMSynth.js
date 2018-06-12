import Tone from 'tone'

class FMSynth {
    constructor(){
        this.instrument = new Tone.FMSynth({
			"modulationIndex" : 12.22,
			"envelope" : {
				"attack" : 0.01,
				"decay" : 0.2
			},
			"modulation" : {
				"type" : "square"
			},
			"modulationEnvelope" : {
				"attack" : 0.2,
				"decay" : 0.01
			}, 
			"volume": -15
		}).toMaster();
    }
  

  }
  
  const instance = new FMSynth();
  Object.freeze(instance);
  
  export default instance;