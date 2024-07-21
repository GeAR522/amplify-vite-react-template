import React from 'react';

interface IMenuCard {
  children: React.ReactNode;
  restaurantName: string;
  totalCost: number;
}
// slate-500 slate-200
function MenuCard({ children, restaurantName }: IMenuCard) {
  return (
    <div
      id="menu-card"
      className="p-8 mb-16 flex flex-col w-full h-full justify-center border-2 border-solid rounded-2xl bg-gradient-to-br from-pink-900 to-slate-100"
    >
      <div
        className="flex flex-row justify-between items-center"
        id="menu-header"
      >
        <div className="flex flex-col">
          <h2 className="flex mb-6 w-full h-full text-4xl text-white font-bold">
            {restaurantName}
          </h2>
          <div id="total-cost" className="flex justify-between">
            <div className="mb-4 pl-4 text-white">
              {/* <h5 className="text-lg font-bold">Contact Details</h5> */}
              <p>1234 Street Address, City, State, 12345</p>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="text-3xl opacity-20">Map goes here</div>
      </div>
      {children}
    </div>
  );
}

export default MenuCard;
