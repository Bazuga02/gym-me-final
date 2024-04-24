import React, { useState } from "react";
import signupImage from "../assets/LOGO2.png";
import { useNavigate } from "react-router-dom";
// import { footer } from "../data";

const Signup = () => {
  const navigate = useNavigate(); // Import and use useNavigate hook

  // const { logo, copyrightText } = footer;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Check if required fields are empty
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!formData.country.trim()) {
      errors.country = "Country is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <>
      <div className="py-16  bg-neutral-950  h-auto ">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border-2  border-primary-200  mt-10   ">
          <div className="w-full p-8 lg:w-1/2 bg-neutral-500   ">
            <img
              src="http://localhost:3000/static/media/logo.6705e9395036155b8061dd44378e56e7.svg"
              alt=""
              className=" flex  mb-3  mx-auto "
            />
            <p className="text-2xl  text-center font-semibold    text-primary-200 ">
              Start Your Fitness Journey!!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${
                    formErrors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded py-2 px-4 block w-full appearance-none`}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {formErrors.firstName}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${
                    formErrors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded py-2 px-4 block w-full appearance-none`}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {formErrors.lastName}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${
                    formErrors.phoneNumber
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded py-2 px-4 block w-full appearance-none`}
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {formErrors.phoneNumber}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Country
                </label>
                <input
                  className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${
                    formErrors.country ? "border-red-500" : "border-gray-300"
                  } rounded py-2 px-4 block w-full appearance-none`}
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
                {formErrors.country && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {formErrors.country}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } rounded py-2 px-4 block w-full appearance-none`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-white text-sm font-bold mb-2">
                    Password
                  </label>
                </div>
                <input
                  className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${
                    formErrors.password ? "border-red-500" : "border-gray-300"
                  } rounded py-2 px-4 block w-full appearance-none`}
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {formErrors.password}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-white text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${
                    formErrors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded py-2 px-4 block w-full appearance-none`}
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {formErrors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className=" py-2 px-4 w-full rounded btn btn-primary btn-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-gray-500 uppercase"
                onClick={() => navigate("/login")}
              >
                or login
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>

          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url(${signupImage})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
