import { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext";
import { audioEngine } from "../services/audio";

export default function SongList() {
  const { songs } = useContext(LibraryContext);

  const playSong = async (song: any) => {
    if (!song.url) return;

    audioEngine.load(song.url);

    try {
      await audioEngine.play();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="space-y-2">
        {songs.map((song) => (
          <button
            key={song.id}
            onClick={() => playSong(song)}
            className="flex w-full items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-left hover:bg-neutral-800"
          >
            <div>
              <div className="font-medium">{song.title}</div>

              <div className="text-sm text-neutral-400">{song.artist}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
