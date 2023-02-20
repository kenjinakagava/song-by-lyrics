export interface Song {
  name: string;
  preview_url: string;
  spotify_url: string;
  lyrics?: string;
}

export interface SongList {
  songs: Song[];
}
