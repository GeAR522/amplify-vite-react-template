import * as React from 'react';
import { FoodItem } from '../../types/FoodItem';
import CounterButton from '../buttons/CounterButton';

interface IFoodItemCard {
  foodItem: FoodItem;
  addFoodItem: (id: string) => void;
  removeFoodItem: (is: string) => void;
}

export default function FoodItemCard({
  foodItem,
  addFoodItem,
  removeFoodItem,
}: IFoodItemCard) {
  const hasAllergies = foodItem.allergys.length > 0;
  const [numberOfFoodItems, setNumberOfFoodItems] = React.useState(0);

  function addToOrder() {
    setNumberOfFoodItems((prev) => prev + 1);
    addFoodItem(foodItem.id);
  }
  function removeFromOrder() {
    if (numberOfFoodItems > 0) {
      setNumberOfFoodItems((prev) => prev - 1);
      removeFoodItem(foodItem.id);
    }
  }

  return (
    <div className="flex flex-row p-5 w-full min-h-[200px] justify-between ">
      <div
        id="food-item-details"
        className="flex flex-col justify-center w-full"
      >
        <div className="flex flex-row justify-between items-center pb-2">
          <h3 className=" flex text-white text-2xl font-bold" id="food-item">
            {foodItem.name}
          </h3>
          <div
            id="price-calc"
            className="flex flex-row items-center justify-end"
          >
            <p
              className="text-white text-lg mr-4 font-bold"
              id="food-item-price"
            >
              {numberOfFoodItems} x £ {foodItem.price}
            </p>
            <CounterButton plusOrMinus="plus" onClick={addToOrder} />
            <CounterButton plusOrMinus="minus" onClick={removeFromOrder} />
          </div>
        </div>
        <p className="text-white text-lg w-2/3">{foodItem.description}</p>
        {hasAllergies && (
          <p
            id="allergy-information"
            className="text-white text-sm italic pt-6"
          >
            This food item may contain the following:{' '}
            {foodItem.allergys.join(', ')}.
          </p>
        )}
      </div>

      {foodItem.img && (
        <div id="img-container" className="pl-4 w-2/5 h-2/5 ml-[12px]">
          <img
            className="border-[2px] border-stone-500 border-opacity-30 max-h-[180px] w-full"
            src={foodItem.img}
            alt={foodItem.name}
          />
        </div>
      )}
    </div>
  );
}
