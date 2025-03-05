//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatbotButton from "../components/chatbotButton";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Congo Parking Service",
  description: "Le parking c'est nous!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <ChatbotButton/>
        <Footer/>
      </body>
    </html>
  );
}
