import Tone from 'tone'

class Sampler {
    constructor(){
        this.instrument = new Tone.Sampler({
			'C3' : 'C3.[mp3|ogg]',

		}, {
			'release' : 1,
			'baseUrl' : 'static/audio/drone/'
		}).toMaster();
    }
  

  }
  
  const instance = new Sampler();
  Object.freeze(instance);
  
  export default instance;