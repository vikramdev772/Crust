import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaSpinner } from "react-icons/fa";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    typeOfIncome: "Business",
    business: "",
    company: "",
    income: "",
    existingLoans: "",
    loanRequirement: "",
    location: "",
    loanType: "Personal Loan",
    remarks: "",
    followUpRequired: "Yes",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData({
            ...formData,
            location: `Lat: ${latitude}, Long: ${longitude}`,
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Geolocation Error:", error);
          alert("Unable to retrieve location.");
          setIsLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://crust-33g3.onrender.com/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert(`Error: ${data.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        typeOfIncome: "Business",
        business: "",
        company: "",
        income: "",
        existingLoans: "",
        loanRequirement: "",
        location: "",
        loanType: "Personal Loan",
        remarks: "",
        followUpRequired: "Yes",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 backdrop-blur-md border border-white/30 p-6 rounded-lg shadow-lg w-full max-w-4xl"
        style={{ width: '90%', maxWidth: '1200px', height: 'auto' }} // Adjusted width and height
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">User Information Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Type of Income */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Type of Income</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="typeOfIncome"
                  value="Business"
                  checked={formData.typeOfIncome === "Business"}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                Business
              </label>
              <label>
                <input
                  type="radio"
                  name="typeOfIncome"
                  value="Employee"
                  checked={formData.typeOfIncome === "Employee"}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                Employee
              </label>
            </div>
          </div>

          {/* Conditional Inputs for Business */}
          {formData.typeOfIncome === "Business" && (
            <div className="mb-4 col-span-1 md:col-span-2">
              <label className="block text-sm text-gray-400">Business</label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleInputChange}
                className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
                placeholder="Enter your business name"
                required
              />
            </div>
          )}
          {formData.typeOfIncome === "Employee" && (
            <div className="mb-4 col-span-1 md:col-span-2">
              <label className="block text-sm text-gray-400">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
                placeholder="Enter your company name"
                required
              />
            </div>
          )}

          {/* Common Inputs */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Income</label>
            <input
              type="text"
              name="income"
              value={formData.income}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your income"
              required
            />
          </div>

          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Existing Loans</label>
            <input
              type="text"
              name="existingLoans"
              value={formData.existingLoans}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your existing loans"
              required
            />
          </div>

          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Loan Requirement</label>
            <input
              type="text"
              name="loanRequirement"
              value={formData.loanRequirement}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your loan requirement"
              required
            />
          </div>

          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Type of Loan</label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
            >
              <option value="Personal Loan">Personal Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Auto Loan">Auto Loan</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Remarks</label>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter any remarks"
            />
          </div>

          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Follow-Up Required</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="followUpRequired"
                  value="Yes"
                  checked={formData.followUpRequired === "Yes"}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="followUpRequired"
                  value="No"
                  checked={formData.followUpRequired === "No"}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </div>

          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm text-gray-400">Location</label>
            <div className="flex flex-col">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-[#222630] px-4 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
                placeholder="Enter your location or click to get coordinates"
                required
              />
              <button
                type="button"
                onClick={handleLocationClick}
                className="mt-2 bg-[#596A95] text-white px-4 py-2 rounded-lg flex items-center"
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : <FaLocationArrow />}
                <span className="ml-2">Get Coordinates</span>
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className={`bg-[#596A95] text-white px-4 py-2 rounded-lg w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UserForm;
