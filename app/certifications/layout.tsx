import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications and achievements that validate Khursheed Ahmed's expertise in web development, AI, and machine learning.",
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 