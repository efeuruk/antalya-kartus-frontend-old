import React from "react";
import Button from "../Button";

export default function Card({
  fullImage,
  imageSrc,
  imageAlt,
  cardTitle,
  cardDesc,
  withButton,
  light,
  buttonVariant,
  buttonTarget,
  buttonText,
}) {
  return (
    <div className={`card ${light ? "light" : null}`}>
      <div className={`card__image ${fullImage ? "full" : null}`}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <h4>{cardTitle}</h4>
      {cardDesc ? <p className="card__description">{cardDesc}</p> : null}
      {withButton ? (
        <Button
          variant={buttonVariant}
          target={buttonTarget}
          text={buttonText}
        />
      ) : null}
    </div>
  );
}
