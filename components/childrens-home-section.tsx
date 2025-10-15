"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Heart, BookOpen, Utensils, Stethoscope } from "lucide-react"
import { useState } from "react"

export function ChildrensHomeSection() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const services = [
    {
      icon: Home,
      title: "Hogar Seguro",
      description: "Un espacio cálido y protegido donde los niños encuentran estabilidad y amor.",
    },
    {
      icon: Utensils,
      title: "Alimentación",
      description: "Tres comidas nutritivas diarias y meriendas saludables para su desarrollo.",
    },
    {
      icon: BookOpen,
      title: "Educación",
      description: "Apoyo escolar, tutorías y acceso a materiales educativos de calidad.",
    },
    {
      icon: Stethoscope,
      title: "Salud",
      description: "Atención médica regular, controles preventivos y seguimiento personalizado.",
    },
    {
      icon: Users,
      title: "Desarrollo Social",
      description: "Actividades recreativas, deportivas y culturales para su crecimiento integral.",
    },
    {
      icon: Heart,
      title: "Apoyo Emocional",
      description: "Acompañamiento psicológico y afectivo para fortalecer su bienestar.",
    },
  ]

  return (
    <section id="hogar" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4 text-balance">
            Hogar de Niños Divina Misericordia
          </h2>
          <p className="text-xl text-[#636E72] max-w-2xl mx-auto text-pretty">
            Un refugio de amor y esperanza donde cada niño encuentra una familia y un futuro mejor
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6 h-[400px] md:h-[500px]">
              <img
                src={images[activeImage] || "/placeholder.svg"}
                alt="Hogar de Niños"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Nuestro Hogar</h3>
                <p className="text-lg">Un lugar donde los sueños se hacen realidad</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeImage === index ? "bg-[#E6127C] w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <Card className="border-none shadow-xl mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-[#636E72] leading-relaxed mb-4">
                  El <strong className="text-[#2D3436]">Hogar de Niños Divina Misericordia</strong> es el corazón de
                  nuestra fundación. Aquí brindamos un hogar temporal o permanente a niños y niñas en situación de
                  vulnerabilidad, ofreciéndoles no solo un techo, sino una familia que los acompaña en su crecimiento.
                </p>
                <p className="text-lg text-[#636E72] leading-relaxed mb-4">
                  Actualmente albergamos a <strong className="text-[#E6127C]">35 niños</strong> de entre 3 y 17 años,
                  quienes reciben atención integral las 24 horas del día, los 365 días del año. Nuestro equipo de
                  profesionales y voluntarios trabaja incansablemente para garantizar que cada niño tenga acceso a
                  educación, salud, alimentación y, sobre todo, amor.
                </p>
                <p className="text-lg text-[#636E72] leading-relaxed">
                  El hogar cuenta con instalaciones modernas y seguras, incluyendo dormitorios confortables, áreas de
                  estudio, espacios recreativos, comedor, enfermería y áreas verdes donde los niños pueden jugar y
                  desarrollarse en un ambiente sano y protegido.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6127C] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2D3436] mb-2">{service.title}</h4>
                      <p className="text-sm text-[#636E72] leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: "35", label: "Niños Albergados" },
              { number: "24/7", label: "Atención Continua" },
              { number: "100%", label: "Escolarizados" },
              { number: "15", label: "Cuidadores" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#E6127C] to-[#00B4D8] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#636E72] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
