import React from 'react';
import { Figure } from 'react-bootstrap';

const CustomFigure = ({ src, caption }) => (
  <Figure className='text-center mx-2'>
    <Figure.Image
      width={100}
      alt={caption}
      src={src}
     />
    <Figure.Caption>{caption}</Figure.Caption>
  </Figure>
);

export default CustomFigure;
