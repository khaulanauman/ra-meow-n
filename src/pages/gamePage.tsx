import BackgroundAudio from "../components/BackgroundAudio";
export default function gamePage() {
  return (
    <div
      className="flex flex-col items-center min-h-screen lg:bg-[url('/images/main-bg-large.png')] 
    xl:bg-[url('/images/game-bg.jpg')] bg-[url('/images/main-bg-small.png')] 
    bg-cover bg-center bg-no-repeat"
    >
      <div className="audio-opt mt-5 mb-5 bg-white rounded-md flex flex-col items-center">
        <BackgroundAudio />
        <p
          className="xl:text-s text-s p-2 font-bold text-center text-white 
          bg-yellow-500 font-pixelify tracking-wider"
        >
          Press to enjoy some cozy ambience
        </p>
      </div>
      <div className="board flex flex-col h-96 w-96 justify-center items-center lg:bg-[url('/images/board.png')] bg-cover bg-center bg-no-repeat">
        HIIIIIIIIIIII
      </div>
    </div>
  );
}
