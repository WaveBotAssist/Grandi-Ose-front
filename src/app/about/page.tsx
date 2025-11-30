
"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Section présentation */}
      <section className="py-16 my-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <Image
              src="/laura.jpg" // ta photo (place-la dans /public)
              alt="Laura - Coach Grandi’Ose"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              style={{ width: 300, height: 300 }}
            />
          </div>

          {/* Texte */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-4 underline">
              Services en éducation spécialisée
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Je propose des services d’accompagnement et d’intervention en
              éducation spécialisée destinés aux enfants, adolescents et à leurs
              familles. Mon objectif est de vous guider vers un équilibre
              psychosocial optimal, en respectant pleinement votre rythme et vos
              besoins uniques.
            </p>
            <p className="text-lg leading-relaxed">
              Ensemble, nous établissons des objectifs clairs et un plan
              d’action personnalisé, que nous ajustons en fonction de vos
              évolutions. Chaque suivi est conçu pour s’adapter à vos
              particularités, vos forces et vos défis.
            </p>
          </div>
        </div>
      </section>

      {/* Section parcours */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <h2 className="text-3xl font-bold mb-6 underline">
              Mon parcours professionnel
            </h2>
            <p className="mb-4 leading-relaxed">
              Depuis plus de 10 ans, j’ai travaillé dans différents secteurs :
              aide à la jeunesse, toxicomanie, pédopsychiatrie, services
              résidentiels pour jeunes, et planning familial.
            </p>
            <p className="mb-4 leading-relaxed">
              Cette diversité d’expériences m’a permis de développer une
              approche humaine, bienveillante et adaptée à chaque situation. Mon
              accompagnement allie écoute active, créativité et outils
              concrets.
            </p>
            <p className="leading-relaxed">
              Aujourd’hui, avec Grandi’Ose, je mets à profit ce parcours pour
              offrir un espace d’écoute et de transformation, où chacun peut
              retrouver confiance et avancer sereinement.
            </p>
          </div>

          {/* Image décorative */}
          <div>
            <Image
              src="/salon.jpg" // une image d’ambiance douce (mettre dans /public)
              alt="Cabinet Grandi’Ose"
              width={800}
              height={350}
              className="rounded-lg shadow-lg"
              style={{ width: 'auto', height: 'auto' }} // ✅ Maintient le ratio
            />
          </div>
        </div>
      </section>

      {/* Section conclusion */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image décorative */}
        <div>
          <Image
            src="/bureau.jpg" // autre image nature ou déco
            alt="Ambiance Grandi’Ose"
            width={800}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Texte */}
        <div>
          <p className="text-lg leading-relaxed mb-6">
            Dans mes interventions, je privilégie le lien sincère, la confiance
            et la collaboration. Mon objectif est d’aider chacun à renforcer ses
            ressources internes, gérer ses émotions, et développer ses
            compétences relationnelles et personnelles.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-2 border">
          <div className="flex flex-col md:flex-row md:justify-around md:items-center p-6">

            <Image
              src="/grandiose.jpg"
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
              6140 Fontaine-l’Évêque
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
