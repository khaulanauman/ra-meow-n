import BackgroundAudio from "../components/BackgroundAudio";

export default function MainPage() {
  return (
    <div className="min-h-screen lg:bg-[url('/images/main-bg-large.png')] xl:bg-[url('/images/main-bg.png')] bg-[url('/images/main-bg-small.png')] bg-cover bg-center bg-no-repeat bg-opacity-85">
      <BackgroundAudio />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="xl:text-7xl text-6xl font-bold mb-8 text-center text-white font-pixelify tracking-wider">
          rameown
        </h1>
      </div>
    </div>
  );
}
