import BackgroundAudio from "../components/BackgroundAudio";
import lockIcon from "../assets/lock.svg";
import doorSlam from "../assets/doorSlam.mp3";
import click from "../assets/click.mp3";
export default function MainPage() {
  const playHoverSound = (sound: any, volume: number) => {
    const audio = new Audio(sound);
    audio.volume = volume; // Adjust volume as needed (0.0 to 1.0)
    audio.play();
  };
  return (
    <div
      className="flex flex-col min-h-screen lg:bg-[url('/images/main-bg-large.png')] 
      xl:bg-[url('/images/main-bg.png')] bg-[url('/images/main-bg-small.png')] 
      bg-cover bg-center bg-no-repeat"
    >
      <div className="audio-opt flex flex-col max-w-48 max-h-36">
        <BackgroundAudio />
        <p
          className="xl:text-s text-s rounded-md font-bold text-center text-white 
          bg-yellow-500 font-pixelify tracking-wider"
        >
          Press to enjoy some cozy ambience
        </p>
      </div>
      <div className="main flex flex-col flex-grow justify-around">
        <div className="intro flex justify-center items-center">
          <h1
            className="xl:text-8xl text-6xl font-bold text-center text-white 
            font-pixelify tracking-wider"
          >
            rameown
          </h1>
        </div>
        <div className="buttons flex justify-around items-center">
          <button
            onClick={() => {
              playHoverSound(click, 1);
            }}
            className="level flex flex-col rounded-md border-4 border-yellow-500 
        bg-white transform transition-transform duration-200 
        hover:scale-105 justify-center items-center"
          >
            <img
              src="/ramen.svg"
              className="border-4 border-white lg:w-24 lg:h-24 xl:w-28 xl:h-28"
            ></img>
            <p
              className="border-4 bg-yellow-500 border-yellow-500 xl:text-lg lg:text-base 
        text-sm font-bold text-center text-white font-pixelify tracking-wider xl:w-28"
            >
              Level 1
            </p>
          </button>
          <button
            onClick={() => {
              playHoverSound(doorSlam, 0.1);
            }}
            className="level flex flex-col rounded-md border-4 border-yellow-500 
        bg-white transform transition-transform duration-200 
        hover:scale-105 justify-center items-center"
          >
            <img
              src={lockIcon}
              className="border-4 border-white lg:w-24 lg:h-24 xl:w-28 xl:h-28"
            ></img>
            <p
              className="border-4 bg-yellow-500 border-yellow-500 xl:text-lg lg:text-base 
        text-sm font-bold text-center text-white font-pixelify tracking-wider xl:w-28"
            >
              Level 2
            </p>
          </button>
          <button
            onClick={() => {
              playHoverSound(doorSlam, 0.1);
            }}
            className="level flex flex-col rounded-md border-4 border-yellow-500 
        bg-white transform transition-transform duration-200 
        hover:scale-105 justify-center items-center"
          >
            <img
              src={lockIcon}
              className="border-4 border-white lg:w-24 lg:h-24 xl:w-28 xl:h-28"
            ></img>
            <p
              className="border-4 bg-yellow-500 border-yellow-500 xl:text-lg lg:text-base 
        text-sm font-bold text-center text-white font-pixelify tracking-wider xl:w-28"
            >
              Level 3
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
