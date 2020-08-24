export default class Note {
  constructor(midiNote) {
    const sound = midiNote;
    this.audio = new Audio(require('../../../sound/piano/'+sound+'.wav'));
    this.play();
  }

  play() {
    this.audio.play();
    this.timeout = setTimeout(() => {
      this.fadeOut();
    }, 3000);
  }

  fadeOut() {
    const reduceVolume = setInterval(() => {
      if (this.audio.volume >= 0.01) {
        this.audio.volume -= 0.01;
      } else {
        this.audio.volume = 0;
        clearInterval(reduceVolume);
      }
    }, 5);
  }
}
