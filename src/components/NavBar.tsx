"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
//usePathname sert à récupérer le chemin de l’URL actuelle (ex. /accueil, /about, /contact).
import { usePathname } from "next/navigation"

export default function Header() {
  const logo = "/grandiOse.jpg"
  const [menuOpen, setMenuOpen] = useState(false)
  //pathname = "/accueil" "about" etc..
  const pathname = usePathname()

  // Fonction qui renvoie la classe si actif
  const linkClass = (path: string) =>
    pathname === path
      ? "text-emerald-300 font-semibold border-b-2 border-emerald-300 pb-1"
      : "hover:text-emerald-200"


  return (
    <header className="bg-emerald-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo Grandi'Ose"
            width={48}
            height={48}
            className="rounded-full border border-white shadow"
          />
          <h1 className="text-2xl font-bold tracking-wide">Grandi’Ose</h1>
        </div>

        {/* Liens desktop */}
        <nav className="hidden md:flex gap-6 text-lg">
          <Link href="/accueil" className={linkClass("/accueil")}>
            Accueil
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            À propos
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Bouton hamburger pour mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 cursor-pointer "
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-emerald-800 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/accueil"
            className={linkClass("/accueil")}
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className={linkClass("/about")}
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className={linkClass("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

