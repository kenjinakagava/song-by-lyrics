import { Howl } from "howler";
import MusicPlayer from "./musicPlayer";

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
  return (
    <div>
      <MusicPlayer
        url={props.preview_url}
        isPlaying={props.isPlaying}
        setIsPlaying={props.setIsPlaying}
        song={props.song}
        setSong={props.setSong}
      />
      {props.name}
    </div>
  );
};

export default MusicPlayerContainer;
