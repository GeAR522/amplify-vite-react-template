import { FoodItem } from '../../types/FoodItem';
import CounterButton from '../buttons/CounterButton';

interface IFoodItemCard {
  foodItem: FoodItem;
  numberOfFoodItems: number;
  addFoodItem: (id: string) => void;
  removeFoodItem: (id: string) => void;
}

export default function FoodItemCard({
  foodItem,
  numberOfFoodItems,
  addFoodItem,
  removeFoodItem,
}: IFoodItemCard) {
  const hasAllergies = foodItem.allergys.length > 0;

  function addToOrder() {
    addFoodItem(foodItem.id);
  }
  function removeFromOrder() {
    if (numberOfFoodItems > 0) {
      removeFoodItem(foodItem.id);
    }
  }

  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap p-5 w-full min-h-[200px] justify-between ">
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
        <div
          id="img-container"
          className="sm:pl-4 sm:pt-0 pt-4 sm:w-2/5 h-2/5 sm:ml-[12px] justify-center"
        >
          <img
            className="border-[2px] border-stone-500 border-opacity-30 max-h-[180px]"
            src={foodItem.img}
            alt={foodItem.name}
          />
        </div>
      )}
    </div>
  );
}
