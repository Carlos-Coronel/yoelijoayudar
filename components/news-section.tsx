import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { asset } from "@/lib/assetPath"

export function NewsSection() {
  const news = [
    {
      title: "Exitosa Jornada de Voluntariado Corporativo",
      date: "15 de Enero, 2025",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Más de 50 voluntarios de empresas locales participaron en la renovación de nuestras instalaciones.",
      category: "Eventos",
    },
    {
      title: "Nuevos Padrinos se Suman a Nuestra Causa",
      date: "10 de Enero, 2025",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "20 nuevas familias decidieron apadrinar a nuestros niños, garantizando su educación y bienestar.",
      category: "Noticias",
    },
    {
      title: "Graduación de Talleres de Verano",
      date: "5 de Enero, 2025",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Los niños del hogar completaron exitosamente los talleres de arte, música y deportes.",
      category: "Logros",
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-[#FF0000]" },
  ]

  return (
    <section id="noticias" className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4 text-balance">Noticias y Novedades</h2>
          <p className="text-xl text-[#636E72] max-w-2xl mx-auto text-pretty">
            Mantente informado sobre nuestras actividades, logros y el impacto que estamos generando juntos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* News Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {news.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={asset(item.image || "/placeholder.svg")}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#E6127C]">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[#636E72] mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3 line-clamp-2 group-hover:text-[#E6127C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#636E72] mb-4 line-clamp-3">{item.excerpt}</p>
                  <Button variant="ghost" className="text-[#00B4D8] hover:text-[#0099B8] p-0 h-auto group/btn">
                    Leer más
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media Section */}
          <Card className="border-none shadow-xl bg-gradient-to-br from-[#E6127C] to-[#00B4D8] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">Seguinos en Redes Sociales</h3>
                <p className="text-lg mb-8 text-white/90">
                  Unite a nuestra comunidad online y mantente al día con todas nuestras actividades, historias
                  inspiradoras y formas de colaborar.
                </p>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-[#2D3436] transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
