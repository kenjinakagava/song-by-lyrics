import { Howl, Howler } from "howler";
import { useState } from "react";

interface MusicPlayerProps {
  url: string;
  isPlaying: string;
  setIsPlaying: React.Dispatch<React.SetStateAction<string>>;
  song: Howl;
  setSong: React.Dispatch<React.SetStateAction<Howl>>;
}

const MusicPlayer = ({
  url,
  isPlaying,
  setIsPlaying,
  song,
  setSong,
}: MusicPlayerProps) => {
  const newSong = new Howl({
    src: [url],
    html5: true,
    onend: () => {
      setIsPlaying("");
    },
  });

  const toggleIsPlaying = () => {
    // if we click on the button that corresponds to the song currently playing
    // we will stop the song from playing
    if (isPlaying === url && song) {
      song.stop();
      setIsPlaying("");
      // if we click on another song's play button
    } else {
      setSong(newSong);
      setIsPlaying(url);
      song.stop();
      newSong.play();
    }
  };

  return (
    <button className="play-button" onClick={toggleIsPlaying}>
      {isPlaying === url ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 4v16l13 -8z" />
        </svg>
      )}
    </button>
  );
};

export default MusicPlayer;
