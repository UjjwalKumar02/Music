export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  file: File;
  url?: string;
}
