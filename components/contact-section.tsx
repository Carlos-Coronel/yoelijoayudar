"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4 text-balance">Contactanos</h2>
          <p className="text-xl text-[#636E72] max-w-2xl mx-auto text-pretty">
            ¿Tenés preguntas o querés saber más sobre cómo ayudar? Estamos aquí para vos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6127C] to-[#D61C6B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3436] mb-1">Dirección</h4>
                    <p className="text-[#636E72]">
                      Av. Principal 1234
                      <br />
                      Coronel Oviedo, Caaguazú
                      <br />
                      Paraguay
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0099B8] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3436] mb-1">Teléfono</h4>
                    <p className="text-[#636E72]">
                      +595 521 123 456
                      <br />
                      +595 981 123 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#20B2AA] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3436] mb-1">Email</h4>
                    <p className="text-[#636E72]">
                      info@yoelijoayudar.org.py
                      <br />
                      contacto@yoelijoayudar.org.py
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9F43] to-[#E6127C] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3436] mb-1">Horario de Atención</h4>
                    <p className="text-[#636E72]">
                      Lunes a Viernes: 8:00 - 17:00
                      <br />
                      Sábados: 8:00 - 12:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-full min-h-[400px] bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2!2d-56.4!3d-25.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI0JzAwLjAiUyA1NsKwMjQnMDAuMCJX!5e0!3m2!1ses!2spy!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Fundación Yo Elijo Ayudar"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
