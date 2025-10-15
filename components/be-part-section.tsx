import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Building2, Calendar } from "lucide-react"
import Link from "next/link"
import { asset } from "@/lib/assetPath"

export function BePartSection() {
  const ways = [
    {
      icon: Heart,
      title: "Madrina / Padrino",
      description:
        "Apadriná a un niño y transformá su vida con tu apoyo mensual. Recibí actualizaciones sobre su progreso y creá un vínculo especial.",
      benefits: ["Apoyo mensual directo", "Informes de progreso", "Cartas y fotos", "Visitas programadas"],
      color: "from-[#E6127C] to-[#D61C6B]",
    },
    {
      icon: Building2,
      title: "Empresas Solidarias",
      description:
        "Sumá tu empresa a nuestra red de aliados. Juntos podemos multiplicar el impacto y generar cambios significativos en la comunidad.",
      benefits: ["Responsabilidad social", "Beneficios fiscales", "Visibilidad de marca", "Voluntariado corporativo"],
      color: "from-[#00B4D8] to-[#0099B8]",
    },
    {
      icon: Calendar,
      title: "Campañas y Eventos",
      description:
        "Participá en nuestras campañas solidarias y eventos especiales. Cada actividad es una oportunidad para hacer la diferencia.",
      benefits: ["Eventos mensuales", "Campañas temáticas", "Actividades recreativas", "Jornadas de voluntariado"],
      color: "from-[#20B2AA] to-[#00B4D8]",
    },
  ]

  return (
    <section id="se-parte" className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4 text-balance">Sé Parte del Cambio</h2>
          <p className="text-xl text-[#636E72] max-w-2xl mx-auto text-pretty">
            Hay muchas formas de colaborar. Elegí la que mejor se adapte a vos y comenzá a transformar vidas hoy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ways.map((way, index) => (
            <Card
              key={index}
              className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${way.color}`} />
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${way.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <way.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#2D3436]">{way.title}</CardTitle>
                <CardDescription className="text-base text-[#636E72] leading-relaxed">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {way.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#636E72]">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${way.color}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${way.color} hover:opacity-90 text-white shadow-lg`}
                >
                  <Link href="#contacto">Quiero Participar</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Campaigns */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-[#2D3436] mb-8 text-center">Campañas Activas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Vuelta a Clases 2025",
                image: "/placeholder.svg?height=300&width=400",
                description: "Ayudanos a equipar a 100 niños con útiles escolares para el nuevo año lectivo.",
                progress: 65,
              },
              {
                title: "Navidad Solidaria",
                image: "/placeholder.svg?height=300&width=400",
                description: "Regalá alegría en Navidad. Cada juguete es una sonrisa para un niño.",
                progress: 80,
              },
              {
                title: "Mejoras en el Hogar",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "Renovamos las instalaciones del Hogar Divina Misericordia para brindar mejor calidad de vida.",
                progress: 45,
              },
            ].map((campaign, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={asset(campaign.image || "/placeholder.svg")}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#E6127C]">
                    {campaign.progress}% completado
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-[#2D3436] mb-2">{campaign.title}</h4>
                  <p className="text-sm text-[#636E72] mb-4">{campaign.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-[#E6127C] to-[#00B4D8] h-2 rounded-full transition-all"
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white bg-transparent"
                  >
                    Colaborar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
