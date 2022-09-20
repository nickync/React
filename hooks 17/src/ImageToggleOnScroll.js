import React, { useEffect, useState } from 'react'
import {useRef} from 'react';

export default function ImageToggleOnScroll({primary, secondary}) {

    const imageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const  [inView, setInView] = useState(false);

    useEffect(() => {
      setIsLoading(false);
      setInView(isInView());
      window.addEventListener("scroll", scrollHandler);
      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }, []);

    const scrollHandler = () => {
      setInView(isInView());
    };

  return (
    
        <img 
         src={isLoading ? "na" : inView ? primary : secondary} alt='' ref={imageRef} style={{width: "30%"}}/>
  
  )
}
