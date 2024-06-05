import React from 'react';
import FooterLogic from '../Footer/FooterLogic';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mt-6 mb-4 text-center">Privacy Policy</h1>
      <img src="https://res.cloudinary.com/dv1mouzbi/image/upload/v1717606385/devSources/privacyPolicyTop_sc5vvf.png" alt="Privacy Policy" className="mx-auto mt-6 mb-8 w-1/2" />
      <p className="mb-4 text-left">
        Welcome to Otaku Kaio! This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from otakukaion.com (the “Site”).
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-left">PERSONAL INFORMATION WE COLLECT</h2>
      <p className="mb-4 text-left">
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-left">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
      <p className="mb-4 text-left">
        We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
      </p>
      <ul className="list-disc list-inside mb-4 text-left">
        <li>Communicate with you;</li>
        <li>Screen our orders for potential risk or fraud; and</li>
        <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-left">SHARING YOUR PERSONAL INFORMATION</h2>
      <p className="mb-4 text-left">
        We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/.
      </p>
      <p className="mb-4 text-left">
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-left">YOUR RIGHTS</h2>
      <p className="mb-4 text-left">
        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
      </p>
      <p className="mb-4 text-left">
        Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-left">DATA RETENTION</h2>
      <p className="mb-4 text-left">
        When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-left">MINORS</h2>
      <p className="mb-4 text-left">
        The Site is not intended for individuals under the age of 13.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-left">CHANGES</h2>
      <p className="mb-4 text-left">
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-left">CONTACT US</h2>
      <p className="mb-4 text-left">
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@otakukaio.com or by mail using the details provided below:
      </p>
      <p className="mb-4">
        Otaku Kaio <br/>
        Angamos Street 5015<br/>
        Lima, Lima Metropolitana, 1584 <br/>
        Perú
      </p>
      <FooterLogic />
    </div>
  );
};

export default PrivacyPolicy;