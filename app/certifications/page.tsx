"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsShieldCheck } from "react-icons/bs";
import styles from "../home.module.css";
import { useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import { certificates, categories } from "@/constant/certificates";

export default function CertificationsPage() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCertificates = selectedCategory === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="safe-layout">
      <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
        <div className="text-center">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className={styles.sectionTitle}
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className={`${styles.sectionDescription} max-w-[960px] mx-auto`}
          >
            Professional certifications that validate my expertise in various technologies and domains.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12 mb-16"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "gradient-bg text-white shadow-lg"
                  : "bg-gray text-accent hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-6xl mb-4">
              <BsShieldCheck className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-accent mb-2">
              No certificates found
            </h3>
            <p className="text-gray-600">
              No certificates match the selected category.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
} 