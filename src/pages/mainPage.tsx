import BackgroundAudio from "../components/BackgroundAudio";
import lockIcon from "../assets/lock.svg";
export default function MainPage() {
  const playHoverSound = () => {
    const audio = new Audio(lockedDoor);
    audio.volume = 0.5; // Adjust volume as needed (0.0 to 1.0)
    audio.play();
  };
  return (
    <div className="flex flex-col min-h-screen lg:bg-[url('/images/main-bg-large.png')] xl:bg-[url('/images/main-bg.png')] bg-[url('/images/main-bg-small.png')] bg-cover bg-center bg-no-repeat">
      <div className="audio-opt flex flex-col max-w-48 max-h-36 border-2 border-white">
        <BackgroundAudio />
        <p className=" xl:text-s text-s font-bold text-center text-white font-pixelify tracking-wider">
          Press to enjoy some cozy ambience
        </p>
      </div>
      <div className="main flex flex-col flex-grow justify-around border-2 border-white ">
        <div className="intro flex justify-center items-center border-2 border-white">
          <h1 className="border-2 border-white xl:text-8xl text-6xl font-bold text-center text-white font-pixelify tracking-wider">
            rameown
          </h1>
        </div>
        <div className=" border-2 border-white buttons flex justify-around items-center">
          <button className="flex justify-center items-center">
            <img src="/ramen.svg" className="w-32 h-32"></img>
          </button>
          <button className="flex justify-center items-center ">
            <img src={lockIcon} className="w-32 h-32"></img>
          </button>
          <button className="flex justify-center items-center">
            <img src={lockIcon} className="w-32 h-32"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
