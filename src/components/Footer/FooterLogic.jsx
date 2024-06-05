const FooterLogic = () => {
    return (
      <footer className="w-full bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717613792/devSources/logoOtakuKaio_c7r103.png"
                alt="Brand Logo"
                className="w-auto h-40 md:h-30 rounded-full"
              />
              <a
                href="mailto:otakukaio@gmail.com"
                className="mt-4 py-2 px-4 text-blue-500 border border-blue-500 bg-white rounded-full hover:bg-blue-500 hover:text-white text-xs md:text-sm inline-block"
              >
                Contact Us
              </a>
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <h3 className="mb-2 text-sm font-bold text-gray-700 text-left">Navigation</h3>
              <ul className="list-unstyled text-left">
                <li className="mb-2">
                  <a href="/" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">Home</a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">About</a>
                </li>
                <li className="mb-2">
                  <a href="/store" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">Store</a>
                </li>
                <li className="mb-2">
                  <a href="/offers" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">Offers</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <h3 className="mb-2 text-sm font-bold text-gray-700 text-left">Contact</h3>
              <ul className="list-unstyled text-left">
                <li className="mb-2">
                  <a href="tel:+51964860363" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">
                    +51 964 860 363
                  </a>
                </li>
                <li className="mb-2">
                  <a href="tel:+51906590278" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">
                    +51 906 590 278
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <h3 className="mb-2 text-sm font-bold text-gray-700 text-left">Customer Services</h3>
              <ul className="list-unstyled text-left">
                <li className="mb-2">
                  <a href="/account" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">Account</a>
                </li>
                <li className="mb-2">
                  <a href="/cart" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">Cart</a>
                </li>
                <li className="mb-2">
                  <a href="/privacypolicy" className="text-gray-600 hover:text-blue-500 text-gray-500 hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-gray-500">
          Copyright © 2024 Otaku Kaio. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default FooterLogic;