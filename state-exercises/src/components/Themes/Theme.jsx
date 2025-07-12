import { useState } from "react";
import SettingPanel from "./SettingPanel";

function Theme() {
  const [theme, setTheme] = useState("light");
  return <SettingPanel theme={theme} />;
}

export default Theme;
