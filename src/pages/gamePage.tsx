import BackgroundAudio from "../components/BackgroundAudio";
export default function gamePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen lg:bg-[url('/images/main-bg-large.png')] 
    xl:bg-[url('/images/game-bg.jpg')] bg-[url('/images/main-bg-small.png')] 
    bg-cover bg-center bg-no-repeat"
    >
      <div className="audio-opt mb-5 bg-white rounded-md flex flex-col items-center">
        <BackgroundAudio />
        <p
          className="xl:text-s text-s p-2 font-bold text-center text-white 
          bg-yellow-500 font-pixelify tracking-wider"
        >
          Press to enjoy some cozy ambience
        </p>
      </div>
      <div className="kitchen-board border-2 border-white flex justify-center items-center w-full gap-4">
        <div className="utensils bg-white p-4 rounded-md">
          <div className="pan">pan</div>
          <div className="spoon">spoon</div>
          <div className="bowl">bowl</div>
        </div>
        <div className="board flex flex-col h-96 w-96 justify-center items-center lg:bg-[url('/images/board.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="ingredients bg-white p-4 rounded-md">
          <div className="ramen">ramen</div>
          <div className="carrot">carrot</div>
          <div className="carrot">carrot</div>
        </div>
      </div>
    </div>
  );
}
