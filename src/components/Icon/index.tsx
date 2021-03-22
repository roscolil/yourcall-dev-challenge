import * as React from 'react';
interface ImgProps {
  src: string | object;
  alt?: string;
  className?: string;
}
const Img: React.FC<ImgProps> = ({ src, alt, className }) =>
(
  <img
    className={className}
    src={src as string}
    alt={alt}
  />
);

export default Img;
