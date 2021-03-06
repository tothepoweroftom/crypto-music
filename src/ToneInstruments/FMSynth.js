import Tone from 'tone'

class FMSynth {
    constructor(){
		this.instrument = new Tone.FMSynth({

			"harmonicity": 2,
			"modulationIndex": 5,
			"detune": 0,
			"oscillator": {
				"type": "sine"
			},
			"modulation": {
				"type": "sine"
			},
			"modulationEnvelope": {
				"attack": 0.05,
				"decay": 0,
				"sustain": 1.0,
				"release": 0.2,
			}
		});
		this.name = "FM Synth"

		this.limiter = new Tone.Limiter(-9);
		this.eq = new Tone.Filter(2000, "lowshelf");	
		this.dist = new Tone.Distortion(0.4);
		this.vibrato = new Tone.Vibrato(1, 0.1);
		this.pingPong = new Tone.PingPongDelay("4n", 0.7);
		this.reverb = new Tone.Freeverb(0.1, 500);
		this.pitch = new Tone.PitchShift (0)

		this.vol = new Tone.Volume(-6).toMaster();
		this.scale = ["C1", "E1", "A1","A3", "C4", "D4", "E4", "G4"];

	}
	
	connectComponents() {
		this.instrument.chain(this.eq, this.vibrato, this.reverb, this.dist, this.pingPong, this.limiter, this.pitch, this.vol)
	}

	playNote() {
		var note = this.scale[Math.floor(Math.random()*this.scale.length)];
		this.instrument.triggerAttackRelease(note, 0.5);	}
  

  }
  
  const instance = new FMSynth();
  Object.freeze(instance);
  
  export default instance;