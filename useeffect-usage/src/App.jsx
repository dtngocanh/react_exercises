import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import ColorSplash from "./components/ColorSplash";
import MountNotice from "./components/MountNotice";
import PageTitle from "./components/PageTitle/PageTitle";
import CountDisplay from "./components/CountDisplay/CountDisplay";
import ThemeSwitcher from "./components/ThemeBox/ThemeBox";
import MirrorInputs from "./components/MirrorInputs/MirrorInputs";
import Farewell from "./components/Farewell/Farewell";
import UnmountTracker from "./components/UnmountedTracker/UnmountedTracker";
import SessionEnd from "./components/SessionEnd/SessionEnd";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import MousePosition from "./components/MousePosition/MousePosition";
import WindowDimensions from "./components/WindowDimensions/WindowDimensions";
import KeyDisplay from "./components/KeyDisplay/KeyDisplay";
import ColorFlasher from "./components/ColorFlasher/ColorFlasher";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* <WelcomeMessage /> */}
      {/* <ColorSplash/> */}
      {/* <MountNotice/> */}

      <PageTitle />

      <CountDisplay />

      <ThemeSwitcher />

      <MirrorInputs />

      <Farewell />

      <SessionEnd />

      <div>
        <button onClick={() => setShow((preV) => !preV)}>
          {show ? "Unmount All" : "Mount All"}
        </button>

        {show && (
          <>
            <Stopwatch />
            <MousePosition />
            <WindowDimensions />
            <KeyDisplay />
            <ColorFlasher />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
