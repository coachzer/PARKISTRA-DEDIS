// components/SupportUs.tsx
import React from 'react';
import Head from 'next/head';

const SupportUs: React.FC = () => {
  return (
    <main className='bg-[#ECE3CE]'>
      <div className="support-us-container bg-gray-100 rounded-md shadow-md max-w-4xl mx-auto p-8 mt-11 text-center ">
        <div className="">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Support Park Istra</h1>

          <p className="text-gray-700 mb-6">
            You can contribute to our cause by making a donation through wire transfer. Here are the details:
          </p>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-700">Wire Transfer Details</h2>
            <p className="text-gray-700">
              <strong>Recipient:</strong> Park Istra<br />
              <strong>Address:</strong> Kastelec 21, 6275 Črni Kal<br />
              <strong>IBAN:</strong> SI56 6100 0001 3661 536 (Delavska hranilnica d.d., Ljubljana)<br />
              <strong>SWIFT/BIC:</strong> HDELSI22<br />
              <strong>SEPA Purpose Code:</strong> CHAR<br />
              <strong>Purpose:</strong> Donation
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            THANK YOU FOR YOUR SUPPORT!
          </p>

          {/* Donation Form (Placeholder) */}
          <form className="mb-6">
            {/* Your donation form fields go here */}
            <label className="block text-gray-700 font-bold mb-2" htmlFor="donationAmount">
              Donation Amount:
            </label>
            <input
              type="text"
              id="donationAmount"
              name="donationAmount"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter amount in EUR"
            />

            {/* Add more form fields as needed */}

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Submit Donation
            </button>
          </form>
        </div>
      </div>
      
      </main>

  );
};

export default SupportUs;
