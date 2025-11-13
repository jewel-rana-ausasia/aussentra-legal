"use client";

import { useState } from "react";
import { FaArrowRight, FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/admin/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError("Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full mx-auto bg-white shadow-2xl rounded-xl border border-gray-200 font-playfair
                p-6 md:p-8 lg:p-10"
    >
      {" "}
      {/* compact padding for sm/md, original for lg+ */}
      <div className="mb-4 md:mb-5 lg:mb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900">
          Let's Get In Touch<span className="text-[#ac835d]">.</span>
        </h2>
      </div>
      {success && (
        <p className="text-green-600 mb-3 md:mb-4">{`Form submitted successfully!`}</p>
      )}
      {error && <p className="text-red-600 mb-3 md:mb-4">{error}</p>}
      <form
        className="space-y-4 md:space-y-5 lg:space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-4">
          <div>
            <label className="block text-sm md:text-sm lg:text-sm font-medium text-gray-700 mb-1 md:mb-2">
              First Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full border border-gray-300 rounded-md pl-9 md:pl-11 pr-3 md:pr-4 py-2 md:py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all text-sm md:text-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm md:text-sm lg:text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Last Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full border border-gray-300 rounded-md pl-9 md:pl-11 pr-3 md:pr-4 py-2 md:py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all text-sm md:text-base"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm md:text-sm lg:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Email Address
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md pl-9 md:pl-11 pr-3 md:pr-4 py-2 md:py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all text-sm md:text-base"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm md:text-sm lg:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Phone Number
          </label>
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full border border-gray-300 rounded-md pl-9 md:pl-11 pr-3 md:pr-4 py-2 md:py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all text-sm md:text-base"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm md:text-sm lg:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message..."
            maxLength={300}
            required
            className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 h-24 md:h-32 resize-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all text-sm md:text-base"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1.5">Maximum 300 characters</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#daa22d] via-[#d3a225] to-[#cf9d12] text-white py-2 md:py-2.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#956f4d] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 text-sm md:text-base"
        >
          {loading ? "Submitting..." : "Submit Form"}{" "}
          <FaArrowRight className="text-sm md:text-sm" />
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
