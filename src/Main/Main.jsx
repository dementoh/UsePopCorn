import React from "react";

import ListBox from "./ListBox/ListBox";
import WatchedBox from "./Watched/WatchedBox";

export default function Main() {
  return (
    <main className="main">
      <ListBox />
      <WatchedBox />
    </main>
  );
}
