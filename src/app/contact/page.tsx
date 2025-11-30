"use client";

import Image from "next/image";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";


function ModalMerci({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="
        fixed inset-0 bg-black/50 flex items-center justify-center
        animate-fadeIn z-50
      "
    >
      <div
        className="
          bg-white rounded-xl shadow-xl p-8 w-11/12 max-w-md text-center
          animate-zoomIn
        "
      >
        <h2 className="text-2xl font-bold text-emerald-900 mb-4">
          Merci !
        </h2>

        <p className="text-gray-700 mb-6">
          Votre message a bien été envoyé. Vous serez recontacté très bientôt !
        </p>

        <button
          onClick={onClose}
          className="
            bg-emerald-900 text-white px-6 py-2 rounded-lg 
            hover:bg-emerald-700 transition
          "
        >
          OK
        </button>
      </div>
    </div>
  );
}



export default function Contact() {
  const [status, setStatus] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingSubmit(true)
    const form = new FormData(e.target as HTMLFormElement);

    const res = await sendEmail({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });

    setStatus(res.success ? "Message envoyé !" : "Erreur d’envoi");
    if (res.success) {
      (e.target as HTMLFormElement).reset(); // ✔ reset reconnu
    }
    setLoadingSubmit(false)
  }



  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {status === "Message envoyé !" && (
        <ModalMerci onClose={() => setStatus("")} />
      )}
      {/* Hero image */}
      <section className="relative w-full h-64 md:h-80">
        <Image
          src="/contact1.jpg" // Mets une belle image (bois, carnet, nature) dans /public
          alt="Contact Grandi’Ose"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Me contacter
          </h1>
        </div>
      </section>

      {/* Contact form & info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 underline">
            Écrivez-moi
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Adresse e-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>

            <button
              type="submit"
              className="h-12 w-70 bg-emerald-900 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-700 transition"
            >
              {!loadingSubmit ? 'Envoyer le formulaire' : "Envoi en cours…"}
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 underline">
            Coordonnées
          </h2>
          <p className="mb-4 leading-relaxed">
            Pour toute question, n’hésitez pas à me contacter par e-mail ou via
            le formulaire ci-contre.
          </p>
          <ul className="space-y-3">
            <li>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:grandi-ose@outlook.com"
                className="text-emerald-700 hover:underline"
              >
                grandi-ose@outlook.com
              </a>
            </li>
            <li>
              <strong>Téléphone :</strong>{" "}
              <a
                href="tel:+32497241353"
                className="text-emerald-700 hover:underline"
              >
                0497 24 13 53
              </a>
            </li>
            <li>
              <strong>Région :</strong> Charleroi, Belgique
            </li>
          </ul>

          {/* Icône réseau social */}
          <div className="mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61573555133764&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4V12H18l-.5 3h-2.8v7A10 10 0 0 0 22 12" />
              </svg>
              Page Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="w-full h-80">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.953741811533!2d4.314838049791179!3d50.41139088298093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c23aea9c2edac1%3A0x19d3e8af368e4e29!2sBd%20Allende%2046%2F3%2C%206140%20Fontaine-l&#39;%C3%89v%C3%AAque!5e0!3m2!1sfr!2sbe!4v1758193063463!5m2!1sfr!2sbe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>

  );
}
