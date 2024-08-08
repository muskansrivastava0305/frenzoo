import React from "react";
import "./loader.css"

function Loading({className}) {
  return <div className=" flex justify-center items-center mt-10">
    <span className={`${className} loader`}></span>
  </div>
}

export default Loading;