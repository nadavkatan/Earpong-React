import React, { useEffect, useState } from "react";
import * as Tone from "tone";

export const AppContext = React.createContext({});

const Context = ({ children }) => {

    //initial states
  const [soundGroups, setSoundGroups] = useState([
    {
      name: "italianDiatonicSounds",
      active: false,
      text: ["do", "re", "mi", "fa", "sol", "la", "si"],
      sounds: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
    },
    {
      name: "italianChromaticSounds",
      active: false,
      text: [
        "do",
        "do#",
        "re",
        "re#",
        "mi",
        "fa",
        "fa#",
        "sol",
        "sol#",
        "la",
        "la#",
        "si",
      ],
      sounds: [
        "C4",
        "C#4",
        "D4",
        "D#4",
        "E4",
        "F4",
        "F#4",
        "G4",
        "G#4",
        "A4",
        "A#4",
        "B4",
      ],
    },
    {
      name: "englishDiatonicSounds",
      active: true,
      sounds: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
      text: ["c", "d", "e", "f", "g", "a", "b"],
    },
    {
      name: "englishChromaticSounds",
      active: false,
      text: ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"],
      sounds: [
        "C4",
        "C#4",
        "D4",
        "D#4",
        "E4",
        "F4",
        "F#4",
        "G4",
        "G#4",
        "A4",
        "A#4",
        "B4",
      ],
    },
  ]);
  const [activeSoundGroup, setActiveSoundGroup] = useState(2);
  const [soundsAmount, setSoundsAmount] = useState(0);
  const [prevPlayedSound, setPrevPlayedSound] = useState({
    sound: "",
    index: "",
  });
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState(undefined);

  const synth = new Tone.Synth().toDestination();


  //set the amount of sounds to be practiced on, set the active sound group and proceed to the next step
  const settingSoundsAmount = (num)=>{
        setSoundsAmount(num)
    language === "english"
      ? soundsAmount === "chromatic"
        ? setActiveSoundGroup(3)
        : setActiveSoundGroup(2)
    : soundsAmount === "chromatic"
        ? setActiveSoundGroup(1)
        : setActiveSoundGroup(0);
         setActiveSoundGroup(0);

    setStep((prev) => prev + 1);


  }

  // The function is needed due to the separation between the source of the sound and the text that represents the sound on the button.
  //The funtion return a random source sound, and the index of the random source sound that matches to its repsective representing text
  const getRandomSound = (sounds) => {
    let randomIndex = Math.floor(Math.random() * soundsAmount);
    let randomSound = sounds[randomIndex];
    if (randomSound === prevPlayedSound.sound) {
      return getRandomSound(sounds);
    }
    return { randomSound, randomIndex };
  };

  //Play a random sound
  const playRandomSound = () => {
 
      //find the active sound array
      const activeSoundGroup = soundGroups.find(
        (soundGroup) => soundGroup.active === true
      );
      const { randomSound, randomIndex } = getRandomSound(
        activeSoundGroup.sounds
      );
      // store the played sound to be compared later with the user's answer
      setPrevPlayedSound({
        sound: randomSound,
        index: randomIndex,
      });
      //play the random sound
      synth.triggerAttackRelease(randomSound, "8n");
  };

  // Play the sound C to give the user a referece sound proir to the beginning of the practice
  const playC = () => {
    synth.triggerAttackRelease("C4", "8n");
  };

  // When the user submit it's answer, the index of the selected sound button will be given as an argument
  const checkAnswer = (index) => {

    //find the active sound array
    const activeSoundGroup = soundGroups.find(
      (soundGroup) => soundGroup.active === true
    );

    //play the sound that matches the button that the user pressed
    synth.triggerAttackRelease(activeSoundGroup.sounds[index], "8n");

    // check if the index of button that the user pressed matches the index of the played sound (prevPlayedSound)
    if (index === prevPlayedSound.index) {
      console.log("correct");
      setScore((prev) => prev + 1);
      return true;
    } else {
      console.log("wrong");
      setMistakes((prev) => prev + 1);
      return false;
    }
  };

  // after game over, reset the score and mistake states to 0, and send the steps back to either the amount of sounds choice step, or the play c for reference step
  const reset = (step) => {
    setScore(0);
    setStep(step);
    setMistakes(0);
  };

  return (
    <AppContext.Provider
      value={{
        soundGroups,
        playC,
        setScore,
        reset,
        step,
        setStep,
        language,
        setLanguage,
        mistakes,
        setActiveSoundGroup,
        soundsAmount,
        setSoundsAmount,
        activeSoundGroup,
        prevPlayedSound,
        score,
        playRandomSound,
        checkAnswer,
        settingSoundsAmount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
