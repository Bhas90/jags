import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logo from "./assets/jagsons.jpg";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agreeTerms: false,
    ip: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  /* ---------- FETCH IP ---------- */
  useEffect(() => {
    axios
      .get("https://api64.ipify.org?format=json")
      .then((res) =>
        setFormData((prev) => ({ ...prev, ip: res.data.ip }))
      )
      .catch(() =>
        setFormData((prev) => ({ ...prev, ip: "unknown" }))
      );
  }, []);

  /* ---------- INPUT ---------- */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ---------- VALIDATION ---------- */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (formData.mobile.replace(/\D/g, "").length < 10)
      newErrors.mobile = "Mobile must be at least 10 digits";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------- SUBMIT ---------- */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://api.ramkyone-odyssey.in/home/send-email",
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile.replace(/\D/g, ""),
          ip: formData.ip,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      // ✅ Update URL for tracking
      window.history.pushState({}, "", "?submitted=true");

      // ✅ Show popup
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        agreeTerms: false,
        ip: formData.ip,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        error.response?.data?.error ||
          "Submission failed. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= BANNER ================= */}
      <div
        className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-12 py-6"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-6">

          {/* ---------- LEFT CONTENT ---------- */}
          <div className="p-4 md:p-6 lg:p-8 text-white max-w-md md:w-1/2 z-10 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
              Jagsons Pride – Premium Homes in Suraram
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-4">
              Discover thoughtfully crafted{" "}
              <span className="text-[#f97316] font-semibold">
                2 & 3 BHK residences
              </span>{" "}
              in a fast-growing residential corridor of Hyderabad.
            </p>

            <hr className="border-gray-500 my-3" />
         </div>

          {/* ---------- FORM ---------- */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-lg z-10">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              REQUEST CALLBACK TODAY!
            </h2>

            <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>

              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name*"
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address*"
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              {/* Phone */}
              <PhoneInput
                country="in"
                value={formData.mobile}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, mobile: value }))
                }
                containerClass="!w-full"
                inputClass="!w-full !py-3 !pl-14 !border !border-gray-300 !rounded"
                buttonClass="!border !border-gray-300 !rounded-l"
              />

              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}

              {/* Terms */}
              <div className="flex items-start text-sm">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mr-2 mt-1"
                />
                <span>
                  I accept <strong>Terms</strong> and{" "}
                  <strong>Privacy Policy</strong>.
                </span>
              </div>

              {errors.agreeTerms && (
                <p className="text-red-500 text-sm">{errors.agreeTerms}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white p-3 rounded text-lg bg-gradient-to-r from-[#002954] to-[#00b4e6] hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit your request"}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* ================= SUCCESS POPUP ================= */}
      {showSuccess && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-xl">

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You!
            </h3>

            <p className="text-gray-600 mb-6">
              Your enquiry has been submitted successfully. Our team will
              contact you shortly.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#002954] text-white px-8 py-2 rounded-full hover:bg-[#001c3d]"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
