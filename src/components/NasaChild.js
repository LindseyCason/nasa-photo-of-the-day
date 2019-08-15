import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaParent from "./NasaParent.js";

export default function NasaChild() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=qkf4vBys4Izwq8kblrCpc4CbUfCXQ4afhLfuSHEP&date=2019-02-20`, {
        params: {}
      })
      .then(response => {
        const info = response.data;
        console.log(info);
        setInfo(info);
      });
  }, []);

//   return (
//     <div className="Nasa-POD">
//       {info.map(info => {  //MAP ISN'T WORKING BECAUSE AXIOS LINK IS ONE OBJECT. NEED TO FIND THE FULL DATABASE OF IMAGES OR CREATE A DYNAMIC DATE TO SUB INTO THE URL TO CHANGE!
        return (
          <NasaParent
            description={info.explanation}
            picture={info.url}
            title={info.title}
            date={info.date}
          />
        );
    //   })}
    // </div>
//   );
};


