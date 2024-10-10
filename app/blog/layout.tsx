import React from "react";
import Footer from "@components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Blogs",
    template: "%s | Khursheed Ahmed",
  },
  description:
    "Explore insightful articles and blogs by Khursheed Ahmed, covering topics like software development, AI, machine learning, web technologies, and more. Stay updated with the latest trends and innovations in the tech world.",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
