import React from 'react';
import style from './Dog.module.css';

const {
  container,
  container8,
  photo,
  photoWrapper8,
  photoWrapper,
  title,
  description,
} = style;

function Dog({ numberCard, card }) {
  const {
    name,
    bred_for,
    breed_group,
    image,
    reference_image_id,
    temperament,
  } = card;
  return (
    <div className={numberCard === 3 ? container : container8}>
      <div
        className={numberCard === 3 ? photoWrapper : photoWrapper8}
        key={reference_image_id}
      >
        <img className={photo} src={image.url} alt={name} />
      </div>
      <h4 className={title}>{name}</h4>
      <p className={description}>{bred_for}</p>
      <p className={description}>{breed_group}</p>
      <p className={description}>{temperament}</p>
    </div>
  );
}

export default Dog;
