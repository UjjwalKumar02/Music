import { createContext } from "react";
import type { Song } from "../types/song.type";

type LibraryContextType = {
  songs: Song[];
  addSong: (song: Song) => Promise<void>;
};

export const LibraryContext = createContext<LibraryContextType>({
  songs: [],
  addSong: async () => {},
});
