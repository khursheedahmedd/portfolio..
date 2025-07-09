"use client";

import { motion } from "framer-motion";
import { IoMdOpen } from "react-icons/io";
import { BsShieldCheck } from "react-icons/bs";
import { FaExpand } from "react-icons/fa";
import Image from "next/image";
import { Certificate } from "@/constant/certificates";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  inView: boolean;
}

export default function CertificateCard({ certificate, index, inView }: CertificateCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleImageClick = () => {
    if (certificate.image && certificate.image !== "/certificates/placeholder.png") {
      setIsImageModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
      >
                    {/* Certificate Image */}
              <div className="relative h-48 bg-gray overflow-hidden">
                {certificate.image && certificate.image !== "/certificates/placeholder.png" ? (
                  <div 
                    className="relative w-full h-full cursor-pointer group/image"
                    onClick={handleImageClick}
                  >
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Expand Icon Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <FaExpand className="text-white text-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 mx-auto mb-1" />
                        <p className="text-white text-xs opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          Click to view
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BsShieldCheck className="text-6xl mx-auto mb-2" />
                      <p className="text-sm">Certificate Image</p>
                      <p className="text-xs">(Add your certificate image here)</p>
                    </div>
                  </div>
                )}
                
                {/* Platform Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-accent shadow-md">
                  {certificate.platform}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    certificate.category === "web-development" ? "bg-blue-500" :
                    certificate.category === "ai-ml" ? "bg-purple-500" :
                    certificate.category === "cloud" ? "bg-orange-500" :
                    "bg-gray-500"
                  }`}>
                    {certificate.category.replace("-", " ").toUpperCase()}
                  </span>
                </div>
              </div>

      {/* Certificate Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-accent mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {certificate.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {certificate.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500">
            Issued: {certificate.issueDate}
          </span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
            <BsShieldCheck className="text-xs" />
            Verified
          </span>
        </div>

        {/* Verify Button */}
        <a
          href={certificate.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 gradient-btn rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 group/btn"
        >
          <IoMdOpen className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
          Verify Certificate
        </a>
      </div>
    </motion.div>

    {/* Image Modal */}
    <ImageModal
      isOpen={isImageModalOpen}
      onClose={() => setIsImageModalOpen(false)}
      imageSrc={certificate.image}
      imageAlt={certificate.title}
    />
    </>
  );
} 