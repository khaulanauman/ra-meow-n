import BackgroundAudio from "../components/BackgroundAudio";
import { useState } from "react";
import click from "../assets/click.mp3";
import spices from "../assets/spices.mp3";
import boiling from "../assets/boiling-water.mp3";
import { motion } from "framer-motion";
import { GameState } from "../types";

export default function GamePage() {
  const playClickSound = (sound: any, volume: number) => {
    const audio = new Audio(sound);
    audio.volume = volume;
    audio.play();
  };

  const [gameState, setGameState] = useState<GameState>("empty");

  const handlePanClick = () => {
    playClickSound(click, 1);
    if (gameState === "empty") {
      setGameState("empty_pot");
    }
  };

  const handleRamenClick = () => {
    if (gameState === "boiling_pot_ready") {
      setGameState("ramen_pot");
      playClickSound(boiling, 1);
      setTimeout(() => {
        // After 5 seconds, show the instruction for adding ramen
        setGameState("ramen_pot_ready");
      }, 5000);
    }
  };
  const handleBowlClick = () => {
    playClickSound(click, 1);
    if (gameState === "ramen_pot_ready") {
      setGameState("ramen_bowl");
    }
  };

  const handleSpicesClick = () => {
    playClickSound(spices, 1);
    if (gameState === "ramen_bowl") {
      playClickSound(spices, 1); // Play boiling sound after state change
      setTimeout(() => {
        // After 5 seconds, show the instruction for adding ramen
        setGameState("ramen_spices");
      }, 3000);
    }
  };

  const handleEggClick = () => {
    playClickSound(click, 1);
    if (gameState === "ramen_spices") {
      setGameState("ramen_final");
    }
  };

  const handlePotClick = () => {
    if (gameState === "empty_pot") {
      setGameState("boiling_pot"); // First change the state to show boiling pot
      playClickSound(boiling, 1); // Play boiling sound after state change
      setTimeout(() => {
        // After 5 seconds, show the instruction for adding ramen
        setGameState("boiling_pot_ready");
      }, 5000);
    }
  };
  const getInstruction = () => {
    switch (gameState) {
      case "empty":
        return "Put the empty pan on stove to get started";
      case "empty_pot":
        return "Click on the pot to get the water boiling";
      case "boiling_pot":
        return "Wait 5 seconds";
      case "boiling_pot_ready":
        return "Now add the ramen to the pot";
      case "ramen_pot":
        return "Wait for the ramen to boil";
      case "ramen_pot_ready":
        return "Now add the ramen to bowl by clicking the bowl";
      case "ramen_bowl":
        return "Add spices";
      case "ramen_spices":
        return "Add an egg because NUTRITION?!";
      case "ramen_final":
        return "You did it champ!";
      default:
        return "";
    }
  };

  return (
    <div
      className="flex items-center justify-around lg:bg-[url('/images/main-bg-large.png')] 
    xl:bg-[url('/images/game-bg.jpg')] bg-[url('/images/main-bg-small.png')] 
    bg-cover bg-center bg-no-repeat"
    >
      <div
        className="flex items-center justify-between "
        style={{ minWidth: "100vw" }}
      >
        <div
          className="utensils border-2 flex flex-col justify-center items-center lg:bg-[url('/images/marble.png')] 
    xl:bg-[url('/images/marble.png')] bg-[url('/images/marble.png')] 
    bg-cover bg-center bg-no-repeat min-h-screen bg-red-100 px-4 rounded-md"
        >
          {/* Empty Pot */}
          {gameState === "empty" && (
            <motion.button
              onClick={() => handlePanClick()}
              className="pan cursor-pointer hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                className="w-52 h-46"
                src="/images/pot-empty.png"
                alt="pot"
              />
            </motion.button>
          )}

          {/* Bowl */}
          <motion.button
            onClick={() => handleBowlClick()}
            className={`bowl cursor-pointer transition-transform ${
              gameState === "ramen_pot_ready"
                ? "hover:scale-105"
                : "opacity-50 cursor-not-allowed"
            }`}
            whileHover={gameState === "ramen_pot_ready" ? { scale: 1.05 } : {}}
            whileTap={gameState === "ramen_pot_ready" ? { scale: 0.95 } : {}}
          >
            <img className="w-48 h-28" src="/images/bowl.png" alt="bowl" />
          </motion.button>
        </div>

        <div
          className="main  flex flex-col"
          style={{ minHeight: "100vh", justifyContent: "space-between" }}
        >
          <div className="audio-opt bg-white rounded-md flex flex-col items-center">
            <BackgroundAudio />
            <p className="xl:text-s text-s p-2 font-bold text-center text-white bg-yellow-500 font-pixelify tracking-wider">
              Press to enjoy some cozy ambience
            </p>
          </div>
          <div className="board flex flex-col min-h-96 min-w-96 justify-center items-center lg:bg-[url('/images/board.png')] bg-cover bg-center bg-no-repeat">
            {gameState !== "empty" && (
              <img
                onClick={handlePotClick}
                className="w-52 h-46 cursor-pointer hover:scale-105 transition-transform"
                src={`/images/${getBoardImage(gameState)}`}
                alt="cooking"
              />
            )}
          </div>
          <div className="instructions rounded-md w-full min-h-full">
            <p
              className="bg-white text-center text-yellow-700 font-pixelify tracking-wide font-semibold flex items-center justify-center"
              style={{ minHeight: "20vh", minWidth: "full " }}
            >
              {getInstruction()}
            </p>
          </div>
        </div>

        <div className="ingredients border-2 flex flex-col justify-center items-center lg:bg-[url('/images/marble.png')] xl:bg-[url('/images/marble.png')] bg-[url('/images/marble.png')] bg-cover bg-center bg-no-repeat min-h-screen bg-red-100 px-4 rounded-md">
          {/* Ramen */}
          <motion.button
            onClick={() => handleRamenClick()}
            className={`ramen cursor-pointer transition-transform ${
              gameState === "boiling_pot_ready"
                ? "hover:scale-105"
                : "opacity-50 cursor-not-allowed"
            }`}
            whileHover={
              gameState === "boiling_pot_ready" ? { scale: 1.05 } : {}
            }
            whileTap={gameState === "boiling_pot_ready" ? { scale: 0.95 } : {}}
          >
            <img className="w-44 h-56" src="/images/ramen.png" alt="ramen" />
          </motion.button>

          {/* Spices */}
          <motion.button
            onClick={() => handleSpicesClick()}
            className={`spices cursor-pointer transition-transform ${
              gameState === "ramen_bowl"
                ? "hover:scale-105"
                : "opacity-50 cursor-not-allowed"
            }`}
            whileHover={gameState === "ramen_bowl" ? { scale: 1.05 } : {}}
            whileTap={gameState === "ramen_bowl" ? { scale: 0.95 } : {}}
          >
            <img className="w-36 h-36" src="/images/spices.png" alt="spices" />
          </motion.button>

          {/* Egg */}
          <motion.button
            onClick={() => handleEggClick()}
            className={`egg cursor-pointer transition-transform ${
              gameState === "ramen_spices"
                ? "hover:scale-105"
                : "opacity-50 cursor-not-allowed"
            }`}
            whileHover={gameState === "ramen_spices" ? { scale: 1.05 } : {}}
            whileTap={gameState === "ramen_spices" ? { scale: 0.95 } : {}}
          >
            <img className="w-44 h-44" src="/images/egg.png" alt="egg" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

const getBoardImage = (gameState: GameState) => {
  switch (gameState) {
    case "empty_pot":
      return "pot-empty.png";
    case "boiling_pot":
      return "pot-boiling.png";
    case "boiling_pot_ready":
      return "pot-boiling.png";
    case "ramen_pot":
      return "pot-ramen.png";
    case "ramen_pot_ready":
      return "pot-ramen.png";
    case "ramen_bowl":
      return "bowl-ramen.png";
    case "ramen_spices":
      return "bowl-spices.png";
    case "ramen_final":
      return "bowl-final.png";
    default:
      return "pot-empty.png";
  }
};
