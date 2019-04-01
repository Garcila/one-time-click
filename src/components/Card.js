import React from 'react';

const styles = {
  card: {
    boxShadow: '0px 4px 11px -2px rgba(38,38,38,0.32)',
    maxHeight: '150px',
  }
}
export default function Card() {
  const imgURL = `https://res.cloudinary.com/garcila/image/upload/b_rgb:ffffff,bo_8px_solid_rgb:f7f0f0,c_thumb,g_north,h_200,w_150/v1554048429/vanGogh/Zelfportret_als_schilder_-_s0022V1962_-_Van_Gogh_Museum.jpg`;
  const {card} = styles;
  return (
    <div>
      <img style={card} src={imgURL} alt='img'/>
    </div>
  );
}
