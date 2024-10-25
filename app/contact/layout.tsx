import React from "react";
import Footer from "@components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Contact",
    template: "%s | Khursheed Ahmed",
  },
  description:
    "Explore the diverse portfolio of projects by Khursheed Ahmed, showcasing innovative solutions in web development, AI, machine learning, and software engineering.",
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
