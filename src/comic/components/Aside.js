import React from 'react';
import { Link } from 'react-router-dom';

// import Back from './Back';
import Close from './Close';
import Acrylic from '../../core/components/Acrylic';


// const BackButton = () => (
//   <Link to="/" id="back-button">
//     <Back />
//   </Link>
// );

const CloseButton = () => (
  <Link to="/" id="back-button">
    <Close />
  </Link>
);

const Aside = ({ alt, image }) => (
  <aside>
    <Acrylic image={image}>
      {/* Image */}
      <img src={image} alt={alt} />

      {/* Back / Close Button */}
      <CloseButton />
    </Acrylic>
  </aside>
)

export default Aside;
