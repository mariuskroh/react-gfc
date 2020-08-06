import { useState } from "react";

export default (initialVal) => {
  const [switches, setSwitches] = useState(initialVal);
  const [lastClicked, setLastClicked] = useState();
  const toggle = (e) => {
    const clicked = e.target.name;
    let checked = !e.target.checked;
    checked = !checked;
    setSwitches({ ...switches, [clicked]: checked });
    setLastClicked(clicked);
  };
  const uncheck = (name) => {
    setSwitches({ ...switches, [name]: false });
  };

  return [switches, toggle, lastClicked, uncheck];
};
