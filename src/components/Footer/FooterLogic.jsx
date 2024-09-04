const FooterLogic = () => {
    return (
      <footer className="w-full bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Logo and Contact Button */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717613792/devSources/logoOtakuKaio_c7r103.png"
              alt="Brand Logo"
              className="w-32 h-32 md:h-40 rounded-full"
            />
            <a
              href="mailto:otakukaio@gmail.com"
              className="mt-4 py-2 px-4 text-blue-500 border border-blue-500 bg-white rounded-full hover:bg-blue-500 hover:text-white text-xs md:text-sm inline-block"
            >
              Contact Us
            </a>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-gray-700 text-center md:text-left">Navigation</h3>
            <ul className="text-center md:text-left">
              <li className="mb-2">
                <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-600 hover:text-blue-500">About</a>
              </li>
              <li className="mb-2">
                <a href="/store" className="text-gray-600 hover:text-blue-500">Store</a>
              </li>
              <li className="mb-2">
                <a href="/offers" className="text-gray-600 hover:text-blue-500">Offers</a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-gray-700 text-center md:text-left">Contact</h3>
            <ul className="text-center md:text-left">
              <li className="mb-2">
                <a href="tel:+51964860363" className="text-gray-600 hover:text-blue-500">+51 964 860 363</a>
              </li>
              <li className="mb-2">
                <a href="tel:+51906590278" className="text-gray-600 hover:text-blue-500">+51 906 590 278</a>
              </li>
            </ul>
          </div>
          {/* Customer Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-gray-700 text-center md:text-left">Customer Services</h3>
            <ul className="text-center md:text-left">
              <li className="mb-2">
                <a href="/account" className="text-gray-600 hover:text-blue-500">Account</a>
              </li>
              <li className="mb-2">
                <a href="/cart" className="text-gray-600 hover:text-blue-500">Cart</a>
              </li>
              <li className="mb-2">
                <a href="/privacypolicy" className="text-gray-600 hover:text-blue-500">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © 2024 Otaku Kaio. All rights reserved.
      </div>
    </footer>
    );
  };
  
  export default FooterLogic;