import Tone from 'tone'

class PolySynth {
    constructor(){
		this.instrument = new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		});

		this.limiter = new Tone.Limiter(-6);
		this.eq = new Tone.EQ3(-10, -20, -1);
		this.dist = new Tone.Distortion(0.9);
		this.vibrato = new Tone.Vibrato(1, 0.1);
		this.pingPong = new Tone.PingPongDelay("4n", 0.9);
		this.reverb = new Tone.Freeverb(0.9, 200);
		this.vol = new Tone.Volume(0).toMaster();
		this.scale = ["A4", "C5", "D5", "E5", "G5", "A5", "C6", "D6", "E6", "G6"];

	}
	
	connectComponents() {
		this.instrument.chain(this.eq, this.vibrato, this.pingPong, this.reverb,this.limiter, this.vol)
	}

	playNote() {
		var note = this.scale[Math.floor(Math.random()*this.scale.length)];
		this.instrument.triggerAttackRelease(note, 0.1);
	}
  }
  
  const instance = new PolySynth();
  Object.freeze(instance);
  
  export default instance;