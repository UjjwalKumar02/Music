import { useEffect, useState, type ReactNode } from "react";
import type { Song } from "../types/song.type";
import { dbPromise } from "../storage/db";
import { LibraryContext } from "./LibraryContext";

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [songs, setSongs] = useState<Song[]>([]);

  const loadSongs = async () => {
    const db = await dbPromise;

    const storedSongs: Song[] = await db.getAll("songs");

    const hydratedSongs = storedSongs.map((song) => ({
      ...song,
      url: URL.createObjectURL(song.file),
    }));

    setSongs(hydratedSongs);
  };

  useEffect(() => {
    loadSongs();
  }, []);

  const addSong = async (song: Song) => {
    const db = await dbPromise;

    await db.put("songs", song);

    const hydratedSong = {
      ...song,
      url: URL.createObjectURL(song.file),
    };

    setSongs((prev) => [...prev, hydratedSong]);
  };

  return (
    <LibraryContext.Provider
      value={{
        songs,
        addSong,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}
