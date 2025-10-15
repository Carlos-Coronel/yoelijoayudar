"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Target, Heart, Shield, Users, Award } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Solidaridad",
      description: "Actuamos con empatía y compromiso hacia quienes más lo necesitan.",
    },
    {
      icon: Shield,
      title: "Transparencia",
      description: "Gestionamos con honestidad y rendimos cuentas de cada acción.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Trabajamos juntos para crear un impacto duradero y significativo.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos esforzamos por la calidad en cada proyecto que emprendemos.",
    },
  ]

  const team = [
    { name: "María González", role: "Directora Ejecutiva", image: "/placeholder.svg?height=200&width=200" },
    { name: "Carlos Benítez", role: "Coordinador de Proyectos", image: "/placeholder.svg?height=200&width=200" },
    { name: "Ana Martínez", role: "Responsable de Voluntariado", image: "/placeholder.svg?height=200&width=200" },
    { name: "Roberto Silva", role: "Administrador", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4 text-balance">Conocé Nuestra Fundación</h2>
          <p className="text-xl text-[#636E72] max-w-2xl mx-auto text-pretty">
            Comprometidos con el bienestar de nuestra comunidad desde hace más de 15 años
          </p>
        </div>

        <Tabs defaultValue="vision" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-12 bg-[#F8F9FA] p-2 rounded-xl">
            <TabsTrigger value="vision" className="data-[state=active]:bg-white data-[state=active]:text-[#E6127C]">
              Visión
            </TabsTrigger>
            <TabsTrigger value="mision" className="data-[state=active]:bg-white data-[state=active]:text-[#E6127C]">
              Misión
            </TabsTrigger>
            <TabsTrigger value="valores" className="data-[state=active]:bg-white data-[state=active]:text-[#E6127C]">
              Valores
            </TabsTrigger>
            <TabsTrigger value="gobierno" className="data-[state=active]:bg-white data-[state=active]:text-[#E6127C]">
              Gobierno
            </TabsTrigger>
            <TabsTrigger value="etica" className="data-[state=active]:bg-white data-[state=active]:text-[#E6127C]">
              Ética
            </TabsTrigger>
            <TabsTrigger value="equipo" className="data-[state=active]:bg-white data-[state=active]:text-[#E6127C]">
              Equipo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vision" className="animate-in fade-in slide-in-from-bottom duration-500">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E6127C] to-[#D61C6B] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Nuestra Visión</h3>
                    <p className="text-lg text-[#636E72] leading-relaxed">
                      Ser una fundación referente en Paraguay, reconocida por su impacto transformador en la vida de
                      niños y familias vulnerables, promoviendo una sociedad más justa, solidaria e inclusiva donde cada
                      persona tenga la oportunidad de desarrollar su máximo potencial.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mision" className="animate-in fade-in slide-in-from-bottom duration-500">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0099B8] flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Nuestra Misión</h3>
                    <p className="text-lg text-[#636E72] leading-relaxed">
                      Brindar apoyo integral a niños, niñas y familias en situación de vulnerabilidad en Coronel Oviedo
                      y sus alrededores, a través de programas de educación, salud, alimentación y desarrollo
                      comunitario, trabajando con transparencia, compromiso y amor para construir un futuro mejor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="valores" className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#20B2AA] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#2D3436] mb-2">{value.title}</h4>
                        <p className="text-[#636E72] leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gobierno" className="animate-in fade-in slide-in-from-bottom duration-500">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#2D3436] mb-6">Política de Buen Gobierno</h3>
                <div className="space-y-4 text-[#636E72] leading-relaxed">
                  <p>
                    Nuestra fundación se rige por principios de transparencia, responsabilidad y ética en todas nuestras
                    operaciones. Contamos con un Consejo Directivo activo que supervisa la gestión y asegura el
                    cumplimiento de nuestra misión.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Rendición de cuentas periódica a donantes y comunidad</li>
                    <li>Auditorías externas anuales de nuestras finanzas</li>
                    <li>Publicación de informes de gestión y estados financieros</li>
                    <li>Procesos de toma de decisiones participativos y democráticos</li>
                    <li>Evaluación continua del impacto de nuestros programas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="etica" className="animate-in fade-in slide-in-from-bottom duration-500">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#2D3436] mb-6">Código de Ética</h3>
                <div className="space-y-4 text-[#636E72] leading-relaxed">
                  <p>
                    Todos los miembros de nuestra fundación, desde el Consejo Directivo hasta los voluntarios, se
                    comprometen a actuar con integridad y respeto en todo momento.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#F8F9FA] p-4 rounded-lg">
                      <h4 className="font-bold text-[#2D3436] mb-2">Respeto y Dignidad</h4>
                      <p className="text-sm">
                        Tratamos a todas las personas con respeto, sin discriminación de ningún tipo.
                      </p>
                    </div>
                    <div className="bg-[#F8F9FA] p-4 rounded-lg">
                      <h4 className="font-bold text-[#2D3436] mb-2">Confidencialidad</h4>
                      <p className="text-sm">Protegemos la privacidad y datos personales de nuestros beneficiarios.</p>
                    </div>
                    <div className="bg-[#F8F9FA] p-4 rounded-lg">
                      <h4 className="font-bold text-[#2D3436] mb-2">Uso Responsable</h4>
                      <p className="text-sm">Administramos los recursos con responsabilidad y eficiencia.</p>
                    </div>
                    <div className="bg-[#F8F9FA] p-4 rounded-lg">
                      <h4 className="font-bold text-[#2D3436] mb-2">Conflicto de Intereses</h4>
                      <p className="text-sm">Evitamos situaciones que comprometan nuestra imparcialidad.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="equipo" className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-[#E6127C] to-[#00B4D8] p-1">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full bg-white"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-[#2D3436] mb-1">{member.name}</h4>
                    <p className="text-sm text-[#636E72]">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
