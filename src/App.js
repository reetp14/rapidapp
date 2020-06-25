import React from "react";
import Mainlist from "./components/mainList";
import "./App.css";
import axios from "axios";

function App() {
  const [mainListItems, setMainListItems] = React.useState({ items: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      let results = await axios.get("https://www.reddit.com/r/aww.json", {});

      console.log(results.data);

      setMainListItems({ items: results.data.data.children });
    };

    // const fetchPrice = async () => {
    //   let price = await fetch("https://coingecko.p.rapidapi.com/simple/price", {
    //     method: "GET",
    //     mode: "no-cors"
    //     headers: {
    //       "x-rapidapi-host": "coingecko.p.rapidapi.com",
    //       "x-rapidapi-key":
    //         "3324f6e115msh4cc8dab6fc3f512p1ce99bjsn4395c68d95fc",
    //     },
    //   });

    //   console.log(await price);
    // };
    fetchData();
    // fetchPrice();
  }, []);

  return (
    <div className="App">
      <Mainlist listitem={mainListItems.items} />
    </div>
  );
}

export default App;
