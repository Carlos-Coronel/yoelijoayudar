"use client"

import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #E6127C 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#00B4D8]/20 blur-2xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#E6127C]/20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#20B2AA]/20 blur-2xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-[#FF9F43]/15 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-[#E6127C] animate-float"
            style={{
              left: `${(i * 8) % 100}%`,
              bottom: 0,
              width: `${24 + (i % 3) * 12}px`,
              height: `${24 + (i % 3) * 12}px`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${12 + (i % 4) * 3}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { color: "#00B4D8", size: 60 },
          { color: "#E6127C", size: 80 },
          { color: "#20B2AA", size: 50 },
          { color: "#FF9F43", size: 70 },
          { color: "#00B4D8", size: 55 },
          { color: "#E6127C", size: 65 },
          { color: "#20B2AA", size: 75 },
          { color: "#FF9F43", size: 45 },
        ].map((bubble, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full blur-xl animate-bubble"
            style={{
              left: `${(i * 12 + 5) % 95}%`,
              bottom: 0,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              backgroundColor: bubble.color,
              opacity: 0,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + (i % 3) * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-8 animate-in fade-in slide-in-from-top duration-700">
            <Heart className="w-4 h-4 text-[#E6127C]" fill="currentColor" />
            <span className="text-sm font-medium text-[#2D3436]">Fundación en Coronel Oviedo, Paraguay</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D3436] mb-6 leading-tight text-balance animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Juntos Construimos
            <span className="block bg-gradient-to-r from-[#E6127C] via-[#00B4D8] to-[#20B2AA] bg-clip-text text-transparent">
              Un Futuro Mejor
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#636E72] mb-12 max-w-2xl mx-auto leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            En Fundación Yo Elijo Ayudar, transformamos vidas a través de la solidaridad, el amor y el compromiso con
            nuestra comunidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#E6127C] to-[#D61C6B] hover:from-[#D61C6B] hover:to-[#E6127C] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 group"
            >
              <Link href="#donar">
                Doná Ahora
                <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6 group bg-transparent"
            >
              <Link href="#nosotros">
                Conocé Más
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            {[
              { number: "500+", label: "Niños Ayudados" },
              { number: "15+", label: "Años de Impacto" },
              { number: "200+", label: "Voluntarios" },
              { number: "50+", label: "Empresas Aliadas" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E6127C] to-[#00B4D8] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#636E72] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#E6127C] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#E6127C] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
