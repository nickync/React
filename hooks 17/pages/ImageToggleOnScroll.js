import React, { useEffect, useState } from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

export default function ImageChangeOnMouseOver() {

  const [currentImage, setCurrentImage] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect( () => {
    window.document.title = `Random: ${value}`;
    console.log(`useEffect: setting title to ${value}`)
  })

  const value = Math.random();

  return (
    <div key={value}
     onMouseOver={() => {
      setCurrentImage(value);
      setMouseEventCnt(mouseEventCnt + 1);
      console.log(`onMouseOver: ${value}`)}}>

      <span>mouseEventCnt: {mouseEventCnt} </span>

      
      <ImageToggleOnScroll key={Math.random()} primary="/static/pictures/executable_jar.png" secondary="/static/pictures/executable_jar_1.png" alt='' />
      <hr></hr>
      <ImageToggleOnMouseOver key={Math.random()} primary="/static/pictures/executable_jar.png" secondary="/static/pictures/executable_jar_1.png" alt='' />
    </div>
  )
}
