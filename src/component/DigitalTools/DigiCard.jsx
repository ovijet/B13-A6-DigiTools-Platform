import React from "react";

const DigiCard = ({ cart }) => {
  console.log(cart, "oviiiiiii");
  return (
    <div>
      {cart.map((addCard) => {
        return (
          <>
            <div>
                <p>{addCard.name}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DigiCard;
