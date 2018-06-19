import Tone from 'tone'

class Bell {
    constructor(){
        this.instrument = new Tone.MetalSynth({
			"harmonicity" : 31,
			"resonance" : 2000,
			"modulationIndex" : 5,
			"envelope" : {
				"attack"  : 0.001 ,
				"decay"  : 0.1 ,
				"release"  : 0.01			},
		})
		this.limiter = new Tone.Limiter(-6);
		this.eq = new Tone.EQ3(-10, -20, -1);
		this.delay = new Tone.FeedbackDelay("8n", 0.9);
		this.dist = new Tone.Distortion(0.9);
		this.vibrato = new Tone.Vibrato(130, 0.1);
		this.crusher = new Tone.BitCrusher(8);
		this.reverb = new Tone.Freeverb(0.9, 1000);

		this.vol = new Tone.Volume(-6).toMaster();

		this.scale = ["A3", "C4", "D4", "E4", "G4"];
	}
	
	connectComponents() {
		this.instrument.chain(this.eq, this.reverb, this.limiter, this.delay, this.vol)
	}

	playNote() {
		var note = this.scale[Math.floor(Math.random()*this.scale.length)];
		this.instrument.triggerAttackRelease(note, 0.1);	
	}
  

  }
  
  const instance = new Bell();
  Object.freeze(instance);
  
  export default instance;