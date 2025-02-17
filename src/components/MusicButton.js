import { useState, useRef, useEffect } from "react";
import "./MusicButton.css";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio("/music.mp3")); // Cambia por la ruta de tu música

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Música en bucle
    audio.play().catch((err) => console.log("Autoplay bloqueado:", err));
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="music-button" onClick={togglePlay}>
      <span className={`icon ${isPlaying ? "pause" : "play"}`}></span>
    </button>
  );
}
