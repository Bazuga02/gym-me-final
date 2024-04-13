import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import iconspay from "../assets/iconspay.png";

const PopUp = ({ isOpen, onClose, plan }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can proceed with checkout
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({ name: "", email: "", address: "" });
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-neutral-500/50 z-10">
      <div className="p-8 rounded-lg bg-neutral-500  border-2    border-primary-200  ">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold mx-auto text-primary-200">
            GYM CART
          </div>
          <button
            onClick={onClose}
            className=" text-white  hover:text-neutral-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          <div className="flex flex-col md:w-1/2">
            <div className="text-lg font-bold mb-4">{plan.name}</div>
            <div className="text-xl font-bold mb-4 ">
              AMOUNT: <span className="  text-yellow-400 ">${plan.price}</span>
            </div>
            <ul className="flex flex-col gap-y-4">
              {plan.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-x-[10px]">
                  <BsCheckCircleFill className="text-lg text-primary-200 " />
                  <div>{item.name}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:w-1/2">
            <div className="text-lg font-bold mb-4 italic">Checkout</div>
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="border border-neutral-300 rounded-lg p-2"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <div className="text-red-500 italic ">{formErrors.name}</div>
              )}
              <input
                type="email"
                placeholder="Email"
                className="border border-neutral-300 rounded-lg p-2"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <div className="text-red-500 italic ">{formErrors.email}</div>
              )}
              <input
                type="text"
                placeholder="Address"
                className="border border-neutral-300 rounded-lg p-2"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <div className="text-red-500 italic ">{formErrors.address}</div>
              )}
              <button className="btn btn-lg btn-primary rounded-[1px]">
                Checkout
              </button>
              <img src={iconspay} className="w-60" alt="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
