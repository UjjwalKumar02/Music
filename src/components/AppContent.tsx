import { useContext, useRef } from "react";
import { LibraryContext } from "../context/LibraryContext";
import type { Song } from "../types/song.type";
import SongList from "./SongList";
import Player from "./Player";

export default function AppContent() {
  const { addSong } = useContext(LibraryContext);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileRef.current?.click();
  };

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      const song: Song = {
        id: Date.now().toString() + Math.random(),
        title: file.name,
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 0,
        file,
      };

      await addSong(song);
    }

    e.target.value = "";
  };

  return (
    <div className="flex min-h-screen bg-neutral-950 text-white">

      <div className="flex flex-1 flex-col">
        <div className="border-b border-neutral-800 p-4">
          <button
            onClick={handleImportClick}
            className="rounded-lg bg-white px-4 py-2 text-black"
          >
            Import Songs
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="audio/*"
            multiple
            hidden
            onChange={handleFiles}
          />
        </div>

        <SongList />

        <Player />
      </div>
    </div>
  );
}
