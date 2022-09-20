import React from 'react'
import {useRef} from 'react';

export default function ImageToggleOnMouseOver({primary, secondary}) {

    const imageRef = useRef(null);

  return (
    
        <img onMouseOver={() => {imageRef.current.src = secondary}} onMouseOut = {() => { imageRef.current.src = primary}}
         src={primary} alt='' ref={imageRef} style={{width: "30%"}}/>
  
  )
}
