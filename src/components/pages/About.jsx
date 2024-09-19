import React from 'react';
import FooterLogic from '../Footer/FooterLogic';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () =>  (
  <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/dv1mouzbi/image/upload/v1717009881/devSources/headeSectBackgrAbou_qjyzfz.png)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Otaku Kaio</h1>
          <p className="text-white text-xl mt-2">Your One-Stop Shop for All Things Otaku!</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">Welcome to Otaku Kaio</h2>
        <p className="text-lg mb-6">At Otaku Kaio, we are passionate about bringing the best of otaku culture to fans around the world. From anime-inspired clothing to collectible manga, we have everything you need to celebrate your favorite series.</p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
		  <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1716898280/devSources/introSecAbou1_u1chu4.png" alt="Otaku Culture" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
		  <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1716898291/devSources/introSectAbou2_cn2w8c.png" alt="Another Aspect of Otaku Culture" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
	    </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-lg mb-4">Otaku Kaio was founded in 2023 by a group of dedicated otakus who wanted to create a place where fans could find high-quality products and connect with a like-minded community. From humble beginnings as a small online store, we've grown into a beloved brand with customers worldwide.</p>
        <p className="text-lg mb-6">Our journey has been fueled by our love for anime and manga, and we strive to share that passion with every product we offer.</p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
		  <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1716899010/devSources/storySecAbou1_bk2tov.png" alt="Our Story" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
		  <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1716899018/devSources/storySecAbou2_aaa8xu.png" alt="Our Story 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
	    </div>
      </section>

      {/* Our Products Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717157127/devSources/clothesProduSectAbout_lyww5d.png" alt="Clothes" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">Clothes</h3>
            <p className="text-gray-700">Explore our collection of anime-inspired clothing and accessories.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717160206/devSources/mugsProduSectAbout_qqfwba.png" alt="Mugs" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">Mugs</h3>
            <p className="text-gray-700">Start your day with a coffee in one of our themed mugs.</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717249039/devSources/mangasProdSectAbout_fu31v7.png" alt="Mangas" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">Mangas</h3>
            <p className="text-gray-700">Discover our vast selection of popular and rare manga titles.</p>
          </div>
          <div className="lg:col-span-3 flex justify-center space-x-6">
	        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
	          <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717379971/devSources/dollProdSectAbou_mgd68j.png" alt="Dolls" className="w-full h-40 object-cover rounded-t-lg" />
	          <h3 className="text-xl font-semibold mt-2">Dolls</h3>
	          <p className="text-gray-700">Find beautifully crafted dolls and figures of your favorite characters.</p>
	        </div>
	        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
	          <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717382132/devSources/gameProdSectAbou_dbkug9.png" alt="Games" className="w-full h-40 object-cover rounded-t-lg" />
	          <h3 className="text-xl font-semibold mt-2">Games</h3>
	          <p className="text-gray-700">Get your hands on the latest anime-themed games and merchandise.</p>
	        </div>
	      </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6">Follow us on social media and become a part of our vibrant otaku community. Stay updated with the latest product releases, events, and more.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" aria-label="facebook" rel="noreferrer">
            <FaFacebook size={32} />
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="twitter" rel="noreferrer">
            <FaTwitter size={32} />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="instagram" rel="noreferrer">
            <FaInstagram size={32} />
          </a>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <div className="space-y-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <p className="text-gray-700 italic">"I love the variety of products at Otaku Kaio. The quality is always top-notch and the customer service is fantastic!"</p>
            <p className="text-gray-900 font-semibold mt-2">- Alex, Tokyo</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <p className="text-gray-700 italic">"Otaku Kaio is my go-to store for all my anime merch. They always have the latest releases!"</p>
            <p className="text-gray-900 font-semibold mt-2">- Maria, New York</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to talk about your favorite anime, we're here to help.</p>
        <p className="text-lg mb-6">You can reach us at:</p>
        <p className="text-lg mb-2">Email: <a href="mailto:support@otakukaio.com" className="text-blue-600">support@otakukaio.com</a></p>
        <p className="text-lg mb-6">Phone: <a href="tel:+51906590278" className="text-blue-600">+1 (234) 567-890</a></p>
      </section>

      {/* Footer */}
      <FooterLogic />
    </div>
  );

export default About;