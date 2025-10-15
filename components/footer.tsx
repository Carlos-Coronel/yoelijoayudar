import Link from "next/link"
import { Heart, Facebook, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:info@yoelijoayudar.org.py", label: "Email" },
  ]

  return (
    <footer className="bg-[#2D3436] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E6127C] to-[#00B4D8] flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-2xl">Yo Elijo Ayudar</span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto mb-6 leading-relaxed">
            Transformando vidas a través de la solidaridad desde 2008
          </p>
          <div className="flex gap-3 justify-center">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6127C] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Fundación Yo Elijo Ayudar</p>
            <span className="hidden md:inline text-gray-600">•</span>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#E6127C] transition-colors">
              Política de Privacidad
            </Link>
            <span className="hidden md:inline text-gray-600">•</span>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#E6127C] transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
