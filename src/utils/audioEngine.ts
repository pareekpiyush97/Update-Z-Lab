// Synthetic Engine Ambient Sound Generator using Web Audio API
class EngineSoundSynthesizer {
  private audioCtx: AudioContext | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioCtx();

      // Low rumble V8 engine simulation
      this.osc1 = this.audioCtx.createOscillator();
      this.osc2 = this.audioCtx.createOscillator();
      this.gainNode = this.audioCtx.createGain();

      this.osc1.type = 'sawtooth';
      this.osc1.frequency.setValueAtTime(42, this.audioCtx.currentTime); // Deep V8 idle rumble

      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(84, this.audioCtx.currentTime); // Harmonic pitch

      this.gainNode.gain.setValueAtTime(0.08, this.audioCtx.currentTime); // Subtle ambient background

      this.osc1.connect(this.gainNode);
      this.osc2.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.osc1.start();
      this.osc2.start();
      this.isPlaying = true;
    } catch (e) {
      console.warn('AudioContext not allowed or supported', e);
      this.isPlaying = false;
    }
  }

  public stop() {
    if (this.osc1) {
      try { this.osc1.stop(); } catch (e) {}
    }
    if (this.osc2) {
      try { this.osc2.stop(); } catch (e) {}
    }
    if (this.audioCtx) {
      try { this.audioCtx.close(); } catch (e) {}
    }
    this.isPlaying = false;
  }
}

export const audioEngine = new EngineSoundSynthesizer();
