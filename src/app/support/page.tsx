// components/SupportUs.tsx
import React from 'react';
import Head from 'next/head';
import Link from "next/link";

const SupportUs: React.FC = () => {
  return (
    <main className='bg-[#ECE3CE]'>
      <div className="support-us-container bg-gray-100 rounded-md shadow-md max-w-4xl mx-auto p-8 mt-11 text-center ">
        <div className="">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Support Park Istra</h1>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">
                            Wire Transfer Details
                        </h2>
                        <p className="text-gray-700">
                            <strong>Recipient:</strong> Park Istra
                            <br />
                            <strong>Address:</strong> Kastelec 21, 6275 Črni Kal
                            <br />
                            <strong>IBAN:</strong> SI56 6100 0001 3661 536 (Delavska hranilnica
                            d.d., Ljubljana)
                            <br />
                            <strong>SWIFT/BIC:</strong> HDELSI22
                            <br />
                            <strong>SEPA Purpose Code:</strong> CHAR
                            <br />
                            <strong>Purpose:</strong> Donation
                        </p>
                    </div>

                    <p className="text-gray-700 mb-6">THANK YOU FOR YOUR SUPPORT!</p>

<<<<<<< HEAD
                    <Link
                        className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                        href="https://www.paypal.com/donate?token=x0O6cwdUMrnpfXbPkRhidHmnpYittKEby2WAsxijoTt6tKdUdG4AWKQjWSIbKM5hYvlwXSP-12odx1jS"
                    >
                        {" "}
                        Paypal donation link
                    </Link>
                </div>
            </div>
        </main>
    );
=======
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
>>>>>>> 964ebb47a232d12152b7ea59c830dd4838ea079f
};

export default SupportUs;
