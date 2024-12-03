import BackgroundAudio from "../components/BackgroundAudio";
import lockIcon from "../assets/lock.svg";
export default function MainPage() {
  return (
    <div className="flex min-h-screen lg:bg-[url('/images/main-bg-large.png')] xl:bg-[url('/images/main-bg.png')] bg-[url('/images/main-bg-small.png')] bg-cover bg-center bg-no-repeat justify-center">
      <div className="flex flex-col  w-3/4 justify-around border-2 border-white">
        <div className="intro flex justify-center items-center border-2 border-white">
          <BackgroundAudio />
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
