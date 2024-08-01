import React from 'react';

interface IMenuCard {
  children: React.ReactNode;
  restaurantName: string;
  totalCost: number;
}
function MenuCard({ children, restaurantName }: IMenuCard) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

  return (
    <div
      id="menu-card"
      className="p-8 mb-20 sm:mb-16 flex flex-col w-full h-full justify-center border-2 border-solid rounded-2xl bg-gradient-to-br from-pink-900 to-slate-100"
    >
      <div
        className="flex flex-row justify-between items-center"
        id="menu-header"
      >
        <div className="flex flex-col">
          <h2 className="flex pl-4 sm:pl-0 mb-6 w-full h-full text-4xl text-white font-bold">
            {restaurantName}
          </h2>
          <div id="total-cost" className="flex justify-between">
            <div className="mb-4 pl-4 text-white">
              <p>1234 Street Address, City, State, 12345</p>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div id="google-map" className="pb-4 hidden md:block">
          <iframe
            width="400"
            height="250"
            style={{ border: '0' }}
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
    &q=St+Helier,Jersey`}
          ></iframe>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MenuCard;
