import React, { useRef, useState, useEffect } from "react";
import sound from "../assets/fire.mp3";

const BackgroundAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance once when component mounts
    audioRef.current = new Audio(sound);
    audioRef.current.loop = true;
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Modern browsers require user interaction before playing audio
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Playback failed:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="">
      <button
        onClick={toggleAudio}
        className="mt-4 transform transition-transform duration-300 hover:scale-110"
        aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
      >
        <svg
          fill="#ffb22e"
          width="70px"
          height="70px"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffb22e"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M189.02051,145.33984A31.35052,31.35052,0,0,1,174.0918,126.606a47.99847,47.99847,0,0,0-92.18262-.00635,31.35,31.35,0,0,1-14.92969,18.74023,44.00739,44.00739,0,0,0,38.11719,79.21094,60.16331,60.16331,0,0,1,45.80664,0,44.00678,44.00678,0,0,0,38.11719-79.21094ZM168,204a19.86485,19.86485,0,0,1-7.80078-1.57568c-.04395-.019-.08887-.0376-.13379-.05616a84.02637,84.02637,0,0,0-64.13086,0c-.04492.01856-.08984.03711-.13379.05616a20.00673,20.00673,0,0,1-17.31445-36.02246c.03515-.01954.07129-.03907.10644-.05909A55.21137,55.21137,0,0,0,104.957,133.29541a23.99908,23.99908,0,0,1,46.08887.00439,55.20367,55.20367,0,0,0,26.36133,33.043c.03515.02.07129.03955.10644.05909A20.00364,20.00364,0,0,1,168,204Zm64-100a24,24,0,1,1-24-24A23.99994,23.99994,0,0,1,232,104ZM48,128a24,24,0,1,1,24-24A23.99994,23.99994,0,0,1,48,128ZM72,56A24,24,0,1,1,96,80,23.99994,23.99994,0,0,1,72,56Zm64,0a24,24,0,1,1,24,24A23.99994,23.99994,0,0,1,136,56Z"></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default BackgroundAudio;
