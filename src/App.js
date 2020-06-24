import React from "react";
import Mainlist from "./components/mainList";
import "./App.css";
import axios from "axios";

function App() {
  const [mainListItems, setMainListItems] = React.useState({ items: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      let results = await fetch("https://reddit.com/r/aww.json", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      let data = await results.json();
      setMainListItems({ items: data.data.children });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Mainlist listitem={mainListItems.items} />
    </div>
  );
}

export default App;
