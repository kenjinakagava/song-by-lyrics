import "./musicPlayerContainer.scss";
import { Howl } from "howler";
import MusicPlayer from "./musicPlayer";
import { useState } from "react";

interface MusicPlayerProps {
  name: string;
  preview_url: string;
  spotify_url: string;
  lyrics?: string;
  isPlaying: string;
  setIsPlaying: React.Dispatch<React.SetStateAction<string>>;
  song: Howl;
  setSong: React.Dispatch<React.SetStateAction<Howl>>;
}

const MusicPlayerContainer = (props: MusicPlayerProps) => {
  const [fullLyrics, setFullLyrics] = useState(false);

  return (
    <>
      <div className="container-top">
        <MusicPlayer
          url={props.preview_url}
          isPlaying={props.isPlaying}
          setIsPlaying={props.setIsPlaying}
          song={props.song}
          setSong={props.setSong}
        />
        <h2>{props.name}</h2>
      </div>
      <p className={fullLyrics ? "" : "truncate"}>
        lyrics Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
        corporis optio laborum facere ducimus ad, maxime sunt fugit voluptates
        voluptatem laboriosam sit in, hic expedita earum quia nihil architecto
        rerum autem illum a eum. Repellat ab, dolorum vitae obcaecati minus nisi
        magnam assumenda rerum eos fugit saepe labore distinctio nihil! Animi a
        veniam facere, delectus quidem officiis deserunt quia et aut laudantium
        harum temporibus unde architecto accusantium praesentium sit minima
        illum dicta facilis, non natus! Error ipsa commodi quis consequuntur a
        neque! Reprehenderit, commodi blanditiis dolores ut voluptatibus,
        aliquam similique nam neque, harum autem inventore quam minima
        repellendus tempore provident.
      </p>
      <button
        onClick={() =>
          fullLyrics ? setFullLyrics(false) : setFullLyrics(true)
        }
        className="toggle-lyrics"
      >
        {fullLyrics ? "hide" : "show"} full lyrics
      </button>
    </>
  );
};

export default MusicPlayerContainer;
