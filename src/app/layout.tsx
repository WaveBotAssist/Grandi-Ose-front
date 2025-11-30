
import "./globals.css";
//import de la font
import { source_Sans_3 } from "./fonts";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
// import du bouton WhatsApp
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={source_Sans_3.className}>
      <body className="flex flex-col min-h-screen" >
        <NavBar />
        {/*flex-grow = prend tout l'espace restant entre la navbar et le footer*/}
        <main className="flex-grow">
          {children}
           <WhatsAppButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
