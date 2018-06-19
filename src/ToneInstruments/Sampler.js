import Tone from 'tone'

class Sampler {
    constructor(){
        this.instrument = new Tone.Sampler({
      'C3' : 'C3.[mp3|ogg]',
      'C4' : 'cello_C4.[mp3|ogg]',


		}, {
			'release' : 1,
			'baseUrl' : 'static/audio/drone/'
    })
    
    this.limiter = new Tone.Limiter(-6);
		this.eq = new Tone.EQ3(-10, -2, +10);
		this.dist = new Tone.Distortion(0.9);
		this.vibrato = new Tone.Vibrato(1, 0.1);
		this.pingPong = new Tone.PingPongDelay("2n", 0.9);
		this.reverb = new Tone.Freeverb(0.9, 600);
		this.vol = new Tone.Volume(0).toMaster();
		this.scale = ["A4", "C5", "D5", "E5", "G5"];
    }

    connectComponents() {
      this.instrument.chain(this.eq, this.pingPong, this.reverb,this.limiter, this.vol)
    }
  
    playNote() {
      var note = this.scale[Math.floor(Math.random()*this.scale.length)];
      this.instrument.triggerAttackRelease(note, 2.0);
        }
  

  }
  
  const instance = new Sampler();
  Object.freeze(instance);
  
  export default instance;