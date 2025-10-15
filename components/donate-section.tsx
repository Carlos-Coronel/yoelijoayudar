"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart } from "lucide-react"

export function DonateSection() {
  return (
    <section id="donar" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4 text-balance">
            Tu Donación Transforma Vidas
          </h2>
          <p className="text-xl text-[#636E72] max-w-2xl mx-auto text-pretty">
            Cada aporte, sin importar el monto, hace una diferencia real en la vida de nuestros niños
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2D3436] flex items-center gap-2">
                <Heart className="w-6 h-6 text-[#E6127C]" fill="currentColor" />
                Doná Ahora
              </CardTitle>
              <CardDescription>Completá el formulario y nos pondremos en contacto con vos</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#2D3436]">
                    Nombres y Apellidos
                  </Label>
                  <Input id="name" placeholder="Juan Pérez" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#2D3436]">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#2D3436]">
                    Teléfono
                  </Label>
                  <Input id="phone" type="tel" placeholder="0981 123 456" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[#2D3436]">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Dejanos tu mensaje..."
                    className="mt-2 resize-none"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E6127C] to-[#D61C6B] hover:from-[#D61C6B] hover:to-[#E6127C] text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <Heart className="mr-2 w-5 h-5" fill="currentColor" />
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
