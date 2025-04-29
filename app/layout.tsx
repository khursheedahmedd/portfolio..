import { montserrat, poppins } from "@/constant/font";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Khursheed Ahmed",
    template: "%s | Khursheed Ahmed",
  },
  description:
    "Khursheed Ahmed is a passionate software engineer with expertise in web development, AI, and machine learning. Explore his portfolio to learn more about his projects, experience, and innovative solutions in the tech industry.",
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
