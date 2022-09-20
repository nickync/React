import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

export default function ImageChangeOnMouseOver() {
  return (
    <div>
        <ImageToggleOnMouseOver primary="/static/pictures/executable_jar.png" secondary="/static/pictures/executable_jar_1.png" alt='' />
        <h1>asdfasfd</h1>
        <ImageToggleOnMouseOver primary="/static/pictures/executable_jar.png" secondary="/static/pictures/executable_jar_1.png" alt='' />
    </div>
  )
}
