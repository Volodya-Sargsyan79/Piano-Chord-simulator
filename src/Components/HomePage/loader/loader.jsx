import React from "react";
import './loader.scss'
const { useState, useEffect, useRef } = React;



const Loader = () => {
  return (
    <div className = 'lds-spinner-wrap'>
    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};


export default Loader