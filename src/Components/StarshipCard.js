import { useState, useEffect } from "react";
import getStarShips from "../services/starWar";

export default function GetAllStarships() {
  const [starShips, setStarShips] = useState([]);
  const getData = async () => {
    let data = await getStarShips();
    setStarShips(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const showStarShips = () => {
    return starShips.map((item, index) => (
      <div className="star-ship" key={index}>
        {item.name}
      </div>
    ));
  };

  return <>{showStarShips()}</>;
}
