import { useEffect, useState } from "react";
import { audioEngine } from "../services/audio";

export default function Player() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = audioEngine.getCurrentTime();
      const duration = audioEngine.getDuration();

      if (duration) {
        setProgress((current / duration) * 100);
      }

      setPlaying(audioEngine.isPlaying());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const togglePlayback = () => {
    if (audioEngine.isPlaying()) {
      audioEngine.pause();
    } else {
      audioEngine.play();
    }

    setPlaying(audioEngine.isPlaying());
  };

  return (
    <div className="border-t border-neutral-800 bg-neutral-950 p-4">
      <div className="mb-3 h-1 w-full rounded bg-neutral-800">
        <div
          className="h-1 rounded bg-white"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={togglePlayback}
          className="rounded-full bg-white px-6 py-3 text-black"
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
