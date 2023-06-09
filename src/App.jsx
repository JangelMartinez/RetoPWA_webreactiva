import { useState } from "react";
import ControlsAudio from "./Components/ControlsAudio/ControlsAudio";
import Header from "./Components/Header/Header";
import Podcasts from "./Components/Podcasts/podcasts";

function App() {

  const [ listenAudio, setListenAudio ] = useState({})

  const changeAudio = ( audio ) => {
    setListenAudio(audio);
  }

  return (
    <>
      <Header />
      <ControlsAudio audio={listenAudio} />
      <Podcasts changeAudio={changeAudio} />
    </>
  )
}

export default App
