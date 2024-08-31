import React from "react";
import Head from "next/head";
import Link from "next/link";

const SupportUs: React.FC = () => {
    return (
        <main className="bg-[#ECE3CE]">
            <div className="support-us-container bg-gray-100 rounded-md shadow-md max-w-6xl mx-auto p-8 mt-11 mb-11">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">
                        WHY DOES PARK ISTRA NEED DONATIONS AND WHAT WILL THEY BE USED FOR?
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Park Istria`s volunteer programme is also covered by donations. Each year,
                        Park Istria organises a large number of volunteer actions and covers the
                        costs of materials, tools and protective equipment for the volunteers who
                        take part in these actions. Donations are also needed to provide food,
                        transport and accommodation for the volunteers who take part in these
                        actions each year.
                    </p>
                    <p className="text-gray-700 mb-6">
                        <Link
                            className="link link-primary"
                            href="https://parkistra.com/wp-content/uploads/2023/03/AJPES-LP-2022.pdf"
                        >
                            Here you can read the financial report for 2022
                        </Link>
                        . In 2022 we had two employees, both on minimum wage.
                    </p>
                    <p>
                        If you would like to contribute to the project as sponsors or material
                        donors, please contact us at{" "}
                        <Link href="mailto:info@parkistra.com">info@parkistra.com</Link>
                    </p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Support Park Istra</h1>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <div className="bg-gray-200 rounded-md p-6 mb-6">
                            <h2 className="text-2xl font-bold mb-2 text-gray-700">
                                DONATE 1% OF YOUR INCOME TAX TO PARK ISTRA
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Park Istra is an organisation working in the public interest, so you
                                can donate 1% of your income tax. Such a donation does not cost you
                                anything, as your percentage of income tax goes to the state budget.
                            </p>
                            <p className="text-gray-700 mb-4">
                                You can donate your percentage by downloading the{" "}
                                <Link
                                    className="link link-primary"
                                    href="https://www.cnvos.si/pdf/genPDFfromPOST/?template=dobrodelen_pdf&amp;filename=obrazec_enprocent&amp;source_domain=Widget v1: parkistra.com&amp;selected_orgs=Park Istra|=|41963571|=|1.0&amp;name=&amp;address=&amp;postalCode=&amp;city=&amp;taxNumber="
                                    download="zahteva_za_namenitev_dela_dohodnine.pdf"
                                    target="_blank"
                                >
                                    form
                                </Link>{" "}
                                as a pdf, printing it, signing it and sending it to the address of
                                the competent financial office. Alternatively, you can submit the
                                form via the eTaxes portal{" "}
                                <Link
                                    className="link link-primary"
                                    href="https://www.cnvos.si/enprocent/"
                                >
                                    link
                                </Link>
                                . Thank you!
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-gray-200 rounded-md p-6 mb-6">
                            <h2 className="text-2xl font-bold mb-2 text-gray-700">
                                Wire Transfer Details
                            </h2>
                            <p className="text-gray-700 mb-4">
                                <strong>Recipient:</strong> Park Istra
                                <br />
                                <strong>Address:</strong> Kastelec 21, 6275 Črni Kal
                                <br />
                                <strong>IBAN:</strong> SI56 6100 0001 3661 536 <br />
                                (Delavska hranilnica d.d., Ljubljana)
                                <br />
                                <strong>SWIFT/BIC:</strong> HDELSI22
                                <br />
                                <strong>SEPA Purpose Code:</strong> CHAR
                                <br />
                                <strong>Purpose:</strong> Donation
                            </p>
                            <Link
                                className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                                href="https://www.paypal.com/donate/?token=KqJjBanE4sefclXYIaVT_65jTALCLkrhwEpGfom7rseA4VuqcRqEZ410_hkD2ZLumE-tCCWuiOgK6E2p"
                                target="_blank"
                            >
                                Donate via PayPal
                            </Link>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">
                        THANK YOU FOR YOUR SUPPORT!
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default SupportUs;
