import BackgroundAudio from "../components/BackgroundAudio";
export default function gamePage() {
  return (
    <div
      className="flex items-center justify-around min-h-screen lg:bg-[url('/images/main-bg-large.png')] 
    xl:bg-[url('/images/game-bg.jpg')] bg-[url('/images/main-bg-small.png')] 
    bg-cover bg-center bg-no-repeat"
    >
      <div
        className="border-2 border-red-500 utensils lg:bg-[url('/images/marble.png')] 
    xl:bg-[url('/images/marble.png')] bg-[url('/images/marble.png')] 
    bg-cover bg-center bg-no-repeat min-h-screen bg-red-100 p-4 rounded-md"
      >
        <div className="pan w-56 h-56">
          <img src="/images/pot.png" alt="pot" />
        </div>
        <div className="spoon w-56 h-56">
          <img src="/images/spoon.png" alt="spoon" />
        </div>
        <div className="bowl w-56 h-56">
          <img src="/images/bowl.png" alt="spoon" />
        </div>
      </div>
      <div className="main  flex flex-col gap-4 border-2 border-red-500">
        <div className="audio-opt bg-white rounded-md flex flex-col items-center">
          <BackgroundAudio />
          <p
            className="xl:text-s text-s p-2 font-bold text-center text-white 
          bg-yellow-500 font-pixelify tracking-wider"
          >
            Press to enjoy some cozy ambience
          </p>
        </div>
        <div className="board flex flex-col h-96 w-96 justify-center items-center lg:bg-[url('/images/board.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="audio-opt bg-white rounded-md flex flex-col items-center">
          <p
            className="xl:text-s text-s p-2 font-bold text-center text-white 
          bg-yellow-500 font-pixelify tracking-wider"
          >
            This is where instructiond will be shown
          </p>
        </div>
      </div>
      <div
        className="ingredients lg:bg-[url('/images/marble.png')] 
    xl:bg-[url('/images/marble.png')] bg-[url('/images/marble.png')] 
    bg-cover bg-center bg-no-repeat min-h-screen border-2 border-red-500  bg-white p-4 rounded-md"
      >
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
  );
}
