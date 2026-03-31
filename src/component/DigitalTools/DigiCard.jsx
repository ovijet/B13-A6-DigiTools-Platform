import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { toast } from "react-toastify";

const DigiCard = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => {
    const cleanPrice = item.price.split("/")[0].replace("$", "");
    return sum + Number(cleanPrice);
  }, 0);

  console.log(total);

  const handleDelete = (addCard) => {
    const filtered = cart.filter((card) => card.id !== addCard.id);
    setCart(filtered);
    toast.error("Card Remove!");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Proceed to Checkout!");
  };
  return (
    <div className=" mt-10 shadow-2xl container mx-auto">
      <p className="text-2xl font-semibold">Your cart</p>

      {cart.map((addCard) => {
        return (
          <>
            <div className="mt-5">
              <div className="flex justify-between rounded-2xl w-[80%] p-4 border items-center   border-red-400 max-w-6xl mx-auto">
                <div>
                  <h2 className="text-xl font-semibold"> {addCard.name}</h2>
                  <p>{addCard.price}</p>
                </div>
                <div>
                  <p
                    className="text-red-500 text-xl"
                    onClick={() => handleDelete(addCard)}
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {cart.length === 0 ? (
        <div>
          <div className="text-center">
            <LuShoppingCart className="flex justify-center items-center w-full text-9xl opacity-33"></LuShoppingCart>
            <p className="text-gray-400">Your card is empty</p>
          </div>
        </div>
      ) : (
        <>
          <div className="text-2xl max-w-6xl mx-auto mt-4">
            <button
              onClick={handleCheckout}
              className="btn text-white bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] btn-block rounded-full"
            >
              Proceed to Checkout
            </button>
          </div>
          <div className="flex justify-between text-2xl max-w-6xl mx-auto items-center space-y-3 mt-4">
            <p>Total:</p>
            <span>${total}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default DigiCard;
