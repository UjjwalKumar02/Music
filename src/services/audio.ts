class AudioEngine {
  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.preload = "metadata";
    // @ts-ignore // important for phones
    this.audio.playsInline = true;
  }

  load(src: string) {
    this.audio.src = src;
  }

  async play() {
    return this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  seek(time: number) {
    this.audio.currentTime = time;
  }

  setVolume(volume: number) {
    this.audio.volume = volume;
  }

  getCurrentTime() {
    return this.audio.currentTime;
  }

  getDuration() {
    return this.audio.duration;
  }

  isPlaying() {
    return !this.audio.paused;
  }
}

export const audioEngine = new AudioEngine();
