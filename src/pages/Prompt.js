import React, { useState } from "react";
import Prompt from "../react-router-dom/Prompt";
import Link from "../react-router-dom/Link";
export default function Index() {
  const [bool, setConform] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setConform(!bool);
        }}
      >
        点我啊
      </button>
      <Link to="/">gohome</Link>
      <Prompt when={bool} message="你确定"></Prompt>
    </div>
  );
}
