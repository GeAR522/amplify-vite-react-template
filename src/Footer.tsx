import React from 'react';

interface IFooter {
  totalCost: number;
  clearOrder: () => void;
}

export default function Footer({ totalCost, clearOrder }: IFooter) {
  return (
    <footer className="bg-gradient-to-r from-pink-900 via-transparent to-pink-400 text-white py-2 absolute bottom-0 w-full h-[80px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Follow Us</h5>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
          <div className="text-center text-3xl font-semibold flex flex-row">
            <p>Total Cost: £ {totalCost}</p>
            <button
              id="clear-order"
              className="ml-6 border-2 bg-transparent border-white hover:border-stone-500 hover:text-stone-600 text-sm text-white w-[70px] h-[40px]"
              onClick={clearOrder}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
