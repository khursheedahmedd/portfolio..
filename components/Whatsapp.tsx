import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const whatsappNumber = "+923417122946";

  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 text-white text-3xl z-50 shadow-lg hover:bg-green-600 transition duration-300"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default Whatsapp;
