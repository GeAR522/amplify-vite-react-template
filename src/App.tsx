import * as React from 'react';
// import type { Schema } from '../amplify/data/resource';
// import { generateClient } from 'aws-amplify/data';
import CenteredContent from '../components/content/CenteredContent';
import ContentCard from '../components/cards/ContentCard';
import MenuCard from '../components/cards/MenuCard';
import FoodItemCard from '../components/cards/FoodItemCard';
import foodItems from '../temp_food_items.ts';
import '../styles/no-scrollbar.css';
import Footer from './Footer.tsx';

// This type uses the id of the foodItem as the key, then the price and the quantity being ordered in the array for the value.
type FoodOrder = Record<string, [number, number]>;

function App() {
  const [order, setOrder] = React.useState<FoodOrder>(
    generateInitialFoodItemSchema,
  );

  const totalCost = React.useMemo(() => {
    let subTotal = 0;
    Object.values(order).forEach((priceAndCount) => {
      const value = priceAndCount[0] * priceAndCount[1];
      subTotal = parseFloat((subTotal + value).toFixed(2));
    });
    return subTotal;
  }, [order]);

  function generateInitialFoodItemSchema() {
    const initialOrder: FoodOrder = {};
    foodItems.forEach((item) => {
      initialOrder[item.id] = [item.price, 0];
    });
    return initialOrder;
  }

  function addFoodItem(id: string) {
    setOrder((prev) => {
      return { ...prev, [id]: [prev[id][0], prev[id][1] + 1] };
    });
  }
  function removeFoodItem(id: string) {
    setOrder((prev) => {
      return { ...prev, [id]: [prev[id][0], prev[id][1] - 1] };
    });
  }

  function clearOrder() {
    setOrder(generateInitialFoodItemSchema);
  }

  return (
    <div className=" overflow-hidden flex flex-row w-full h-full">
      <main className="overflow-y-auto no-scrollbar w-full h-full">
        <CenteredContent>
          <ContentCard>
            <MenuCard
              restaurantName="Minako's Bespoke Sushi"
              totalCost={totalCost}
            >
              {foodItems.map((foodItem, index) => {
                const numberOfFoodItems = order[foodItem.id][1];

                return (
                  <FoodItemCard
                    key={index}
                    addFoodItem={addFoodItem}
                    removeFoodItem={removeFoodItem}
                    numberOfFoodItems={numberOfFoodItems}
                    foodItem={foodItem}
                  />
                );
              })}
            </MenuCard>
          </ContentCard>
        </CenteredContent>
        <Footer totalCost={totalCost} clearOrder={clearOrder} />
      </main>
    </div>
  );
}

export default App;
