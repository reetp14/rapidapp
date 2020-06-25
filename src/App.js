import React from "react";
import Mainlist from "./components/mainList";
import "./App.css";
import axios from "axios";
require("dotenv").config();

function App() {
  const [mainListItems, setMainListItems] = React.useState({ items: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let results = await axios.get("https://www.reddit.com/r/aww.json", {});
        console.log(results.data);

        setMainListItems({ items: results.data.data.children });
      } catch (error) {
        alert(error);
      }
    };

    const fetchPrice = async () => {
      let price = await axios({
        method: "GET",
        url: "https://coingecko.p.rapidapi.com/simple/price",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "coingecko.p.rapidapi.com",
          "x-rapidapi-key":
            "3324f6e115msh4cc8dab6fc3f512p1ce99bjsn4395c68d95fc",
          useQueryString: true,
        },
        params: {
          ids: "bitcoin,ethereum",
          vs_currencies: "usd",
        },
      }).catch((error) => console.log(error));

      console.log("coin", price.data);
    };
    fetchData();
    fetchPrice();
  }, []);

  return (
    <div className="App">
      <Mainlist listitem={mainListItems.items} />
    </div>
  );
}

export default App;
