const FooterLogic = () => {
    return (
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 flex items-center">
              <img
                src="logo.png"
                alt="Brand Logo"
                className="w-auto h-8 md:h-10"
              />
              <a
                href="mailto:otakukaio@gmail.com"
                className="ml-4 btn-primary btn-sm inline-block"
              >
                Contact Us
              </a>
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <h3 className="mb-2 text-sm font-medium text-gray-700">Navigation</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
                </li>
                <li>
                  <a href="/store" className="text-gray-600 hover:text-blue-500">Store</a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-blue-500">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <h3 className="mb-2 text-sm font-medium text-gray-700">Contact</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="tel:+51964860363" className="text-gray-600 hover:text-blue-500">
                    +51 964 860 363
                  </a>
                </li>
                <li>
                  <a href="tel:+51906590278" className="text-gray-600 hover:text-blue-500">
                    +51 906 590 278
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <h3 className="mb-2 text-sm font-medium text-gray-700">Customer Services</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/account" className="text-gray-600 hover:text-blue-500">Account</a>
                </li>
                <li>
                  <a href="/cart" className="text-gray-600 hover:text-blue-500">Cart</a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-gray-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          Copyright © 2024 Otaku Kaio. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default FooterLogic;