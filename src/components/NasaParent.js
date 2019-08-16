import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaChild from "./NasaChild.js";

export default function NasaParent() {
  // NOTE: The value given to setState() must be of the same type as your value from your axios run is expected to be
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=qkf4vBys4Izwq8kblrCpc4CbUfCXQ4afhLfuSHEP&date=2019-08-15`, {
        params: {}
      })
      .then(response => {
        const info = response.data;
        console.log(info);
        setInfo(info);
      });
  }, []);

        return (
          <NasaChild
            description={info.explanation}
            picture={info.url}
            title={info.title}
            date={info.date}

          />
        );
};

//This Parent is going to have all of your data inside of the "parent" function. This will be your set state (specifically named to the item you're referencing), your array of data assigned to the useState and then you MUST return the Child inside the function and give the child PROPERTIES so prop.info etc will know what properties it is referencing. 
//if description = {info.explanation}... the PROPERTY is description. If you want this "info.explanation" response to appear, you must place {props.description} where you need it in the child file. If there is something (like a picture) you may use in the grandchild (if there is one) you MUST add the property when the child is originally getting it's properties, that way it will be avaible in the future in other pages. If you do not, you will not be able to use {props.image} because it is non-existant and has no where to point to.


