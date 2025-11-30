"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


export default function Accueil() {
  return (
    <div className="min-h-screen flex flex-col ">
      <section className="bg-emerald-50 py-16 min-h-screen ">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-6">
          <div className="flex justify-center">
            <Image
              src="/grandiose.jpg"
              alt="Logo Grandi’Ose"
              width={300}
              height={300}
              className="rounded-full border-emerald-900 shadow-lg object-cover"
               style={{ width: 'auto', height: 'auto' }} // ✅ Maintient le ratio
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-6">
              <span className="text-emerald-500 text-5xl">Grandi’Ose</span>
            </h2>
            <h4 className="text-3xl md:text-2xl font-extrabold text-emerald-700 mb-6">Centre de développement personnel et <span className="text-blue-900">d’accompagnement psycho-éducatif</span></h4>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              J’accompagne les adolescents et les adultes qui souhaitent mieux se connaître, retrouver confiance et dépasser leurs blocages.
              Mon approche est bienveillante, humaine et concrète, pour t’aider à grandir et oser construire une vie qui te ressemble.
            </p>
          </div>
        </div>
      </section>

      {/* Section présentation */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 underline">
            Comment se passe une séance ?
          </h2>
          <ul className="space-y-3 text-lg">
            <li>Une séance avec moi, c’est bien plus qu’un simple moment de discussion : c’est un espace pour toi, où tu peux déposer tes émotions,
              tes doutes et tes envies, sans jugement.</li>
            <li>Ensemble, nous allons :</li>
            <li><span className="font-extrabold text-4xl">. </span> Clarifier tes objectifs : ce que tu veux changer, améliorer ou développer dans ta vie.</li>
            <li><span className="font-extrabold text-4xl">. </span> Explorer tes forces et tes blocages : pour comprendre ce qui t’empêche d’avancer.</li>
            <li>
              <span className="font-extrabold text-4xl">. </span>
              Découvrir des outils concrets et variés : exercices pratiques, supports visuels, techniques de gestion des émotions, mises en situation…
            </li>
            <li className="ml-4">
              tout ce qu’il faut pour t’aider à progresser pas à pas.
            </li>
            <li><span className="font-extrabold text-4xl">. </span> Mettre en place des actions simples et efficaces : que tu pourras utiliser au quotidien, même en dehors des séances.</li>
            <li> Chaque rencontre est une bulle de bienveillance et de motivation, où tu repars avec plus de clarté, de confiance et l’élan nécessaire pour continuer ton chemin.</li>
            <li> Mon but ? T’aider à grandir, oser et t’épanouir pleinement.</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-2">
            <div className="flex flex-col md:flex-row md:justify-around md:items-center p-6">

              <Image
                src="/grandiOse.jpg"
                alt="Logo Grandi’Ose"
                width={150}
                height={150}
                className="rounded-full mx-auto md:mx-0"
                style={{ width: 'auto', height: 'auto' }} // ✅ Maintient le ratio
              />

              <div className="text-center flex flex-col space-y-4 m-5">
                <div>
                  <FontAwesomeIcon icon={faPhone} className="text-emerald-700 text-xl" />
                </div>
                <strong className="text-3xl">Téléphone :</strong>
                <a
                  href="tel:+32497241353"
                  className="text-emerald-700 hover:underline"
                >
                  0497 24 13 53
                </a>
              </div>

              <div className="text-center flex flex-col space-y-4 m-5">
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-700 text-xl" />
                </div>
                <strong className="text-3xl">Adresse :</strong>
                Boulevard Allende n 46/3
                <br />
                 6140 fontaine l'éveques
              </div>

              <div className="text-center flex flex-col space-y-4 m-5">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="text-emerald-700 text-xl" />
                </div>
                <strong className="text-3xl">Email :</strong>
                <a
                  href="mailto:grandi-ose@outlook.com"
                  className="text-emerald-700 hover:underline"
                >
                  grandi-ose@outlook.com
                </a>
              </div>
            </div>
        </div>
      </section>

    </div>
  );
}