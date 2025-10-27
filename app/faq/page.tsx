"use client";

import { Accordion } from "@/components/Accordion";
import BannerHeader from "@/components/BannerHeader";
import { FaArrowRight, FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Do all estates require probate?",
    content:
      "Not all estates need to go through probate. If assets are jointly owned or have designated beneficiaries, like superannuation or insurance policies, they typically transfer directly without the need for probate. However, if assets are solely in the deceased's name, especially valuable ones like property or large bank accounts, probate is usually required to manage the estate.",
  },
  {
    title: "What is the role of an executor or administrator?",
    content:
      "An executor (appointed in a will) or an administrator (appointed when there's no will) is responsible for managing the deceased's estate. This includes applying for probate or letters of administration, paying debts, distributing assets to beneficiaries, and handling any legal or tax matters. It's a significant responsibility that requires careful attention to detail.",
  },
  {
    title: "How long does the probate process take?",
    content:
      "The duration of probate varies depending on the estate's complexity and the jurisdiction. While some straightforward estates can be processed in a few months, others may take longer due to factors like asset valuation, debt settlement, or family disputes. It's essential to be patient and prepared for potential delays.",
  },
  {
    title: "Are there any taxes or fees associated with probate?",
    content:
      "Currently, there are no death duties or inheritance taxes in Australia. However, probate applications involve court filing fees, which can vary based on the estate's value. For instance, in Victoria, probate fees have been significantly increased.",
  },
  {
    title: "What happens if there's no valid will?",
    content:
      "If someone passes away without a valid will (intestate), the estate is distributed according to the laws of intestacy in the relevant jurisdiction. Typically, the deceased's assets are divided among close relatives, such as spouses, children, or parents. An administrator is appointed by the court to manage the estate in this scenario.",
  },
  {
    title: "Can a will be contested?",
    content:
      "Yes, wills can be contested. Common grounds for contesting a will include claims of undue influence, lack of testamentary capacity, or failure to provide adequate provision for dependents. If someone believes they have a valid claim, they must typically lodge it within a specific timeframe, which varies by jurisdiction",
  },
  {
    title: "Can probate be avoided altogether?",
    content:
      "In some cases, probate can be avoided. If the deceased’s assets were held jointly (like a joint bank account or jointly owned home), or if they nominated beneficiaries for certain assets (such as superannuation funds or life insurance policies), those assets pass directly to the surviving joint owner or nominated beneficiary. Establishing a comprehensive estate plan during one’s lifetime can help reduce the need for probate.",
  },
  {
    title: "What happens if someone contests the will during probate?",
    content:
      "If a will is contested during probate, the process is paused until the dispute is resolved. The court will review the evidence and determine whether the will is valid and fair. This can extend the probate timeline significantly and may require mediation or a hearing. Having a well-drafted will and clear communication with family members can help minimise the chances of disputes arising.",
  },
];

const FaqPage: React.FC = () => {
  return (
    <div>
      <BannerHeader
        title="Frequently Asked"
        subtitle="Questions"
        caption="Popular questions"
        iconClass="flaticon-courthouse"
        backgroundImage="/about/about-law-firm.jpg"
        overlayDark={5}
      />

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-5 lg:0 py-20 gap-20 items-center">
        <div className="lg:sticky lg:top-28 self-start">
          <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200 font-playfair">
            <div className="mb-5">
              <h2 className="text-3xl font-bold  text-gray-900">
                Let's Get In Touch<span className="text-[#ac835d]">.</span>
              </h2>
            </div>

            <form className="space-y-6">
              {/* First + Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Enter your text.."
                  maxLength={300}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 h-32 resize-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1.5">
                  Maximum 300 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#daa22d] via-[#d3a225] to-[#cf9d12] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#956f4d] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Submit Form <FaArrowRight className="text-sm" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Accordion */}
        <div>
          <Accordion items={accordionData} />
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
