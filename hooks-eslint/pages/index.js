import React, { useEffect, useState } from 'react'

export default function InputElement() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    })

  return (
    isLoading ? <div>Loading</div> : <input placeholder='Enter text' />
  )
}
