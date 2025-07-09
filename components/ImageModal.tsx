"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { IoDownload } from "react-icons/io5";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              {/* Download Button */}
              {imageSrc && imageSrc !== "/certificates/placeholder.png" && (
                <a
                  href={imageSrc}
                  download
                  className="p-2 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
                  aria-label="Download image"
                >
                  <IoDownload className="text-xl text-gray-700" />
                </a>
              )}
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <IoClose className="text-2xl text-gray-700" />
              </button>
            </div>

            {/* Image */}
            <div className="relative w-full h-full">
              {imageSrc && imageSrc !== "/certificates/placeholder.png" ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center w-full h-64 bg-gray-100">
                  <div className="text-center text-gray-500">
                    <p className="text-lg">No image available</p>
                    <p className="text-sm">Add your certificate image to see it here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Image Alt Text */}
            {imageAlt && (
              <div className="p-4 bg-white border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">{imageAlt}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 