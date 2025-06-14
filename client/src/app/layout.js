import { Open_Sans } from "next/font/google";
import "./styles/globals.css";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ['latin']
});

const openSansMono = Open_Sans({
  variable: "--font-open-sans-mono",
  subsets: ['latin']
})

export const metadata = {
  title: "Indic-down",
  description: "Seguimiento del estado de Àliga Indic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${openSans.className} ${openSansMono.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
