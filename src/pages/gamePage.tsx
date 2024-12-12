import BackgroundAudio from "../components/BackgroundAudio";
export default function gamePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen lg:bg-[url('/images/main-bg-large.png')] 
    xl:bg-[url('/images/game-bg.jpg')] bg-[url('/images/main-bg-small.png')] 
    bg-cover bg-center bg-no-repeat"
    >
      <div className="kitchen-board border-2 border-white flex justify-center items-center w-full gap-4">
        <div className="utensils bg-red-100 p-4 rounded-md">
          <div className="pan w-56 h-56">
            <img src="/images/pot.png" alt="pot" />
          </div>
          <div className="spoon w-56 h-56">
            <img src="/images/spoon.png" alt="spoon" />
          </div>
          <div className="bowl w-56 h-56">bowl</div>
        </div>
        <div className="board flex flex-col h-96 w-96 justify-center items-center lg:bg-[url('/images/board.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="ingredients min-h-full bg-white p-4 rounded-md">
          <div className="ramen w-56 h-56">
            <img src="/images/ramen.png" alt="ramen" />
          </div>
          <div className="spices w-36 h-36">
            <img src="/images/spices.png" alt="spices" />
          </div>
          <div className="egg w-44 h-44">
            <img src="/images/egg.png" alt="egg" />
          </div>
        </div>
      </div>
      <div className="audio-opt mb-5 bg-white rounded-md flex flex-col items-center">
        <BackgroundAudio />
        <p
          className="xl:text-s text-s p-2 font-bold text-center text-white 
          bg-yellow-500 font-pixelify tracking-wider"
        >
          Press to enjoy some cozy ambience
        </p>
      </div>
    </div>
  );
}
