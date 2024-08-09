import React from "react";
import "./loader.css"

function Loading({className}) {
  return <div className={` flex justify-center items-center`}>
    <span className={` ${className} border-2 loader`}></span>
  </div>
}

export default Loading;