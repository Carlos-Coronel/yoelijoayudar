"use client"

import {useState, useEffect} from "react"
import Link from "next/link"
import Image from 'next/image'
import {Menu, X} from "lucide-react"
import {Button} from "@/components/ui/button"
import { asset } from "@/lib/assetPath"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        {href: "#inicio", label: "Inicio"},
        {href: "#nosotros", label: "Nosotros"},
        {href: "#se-parte", label: "Sé Parte"},
        {href: "#hogar", label: "Hogar de Niños"},
        {href: "#noticias", label: "Noticias"},
        {href: "#contacto", label: "Contacto"},
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div
                            className="w-30 h-11 rounded-full overflow-hidden transition-transform group-hover:scale-110">
                            <Image
                                src={asset("/logo.png")}
                                alt="Yo Elijo Ayudar Logo"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[#636E72] hover:text-[#E6127C] transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button
                            asChild
                            className="bg-gradient-to-r from-[#E6127C] to-[#D61C6B] hover:from-[#D61C6B] hover:to-[#E6127C] text-white shadow-lg hover:shadow-xl transition-all"
                        >
                            <Link href="#donar">Doná Ahora</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-[#2D3436] hover:text-[#E6127C] transition-colors"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-[#636E72] hover:text-[#E6127C] transition-colors font-medium py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button asChild className="bg-gradient-to-r from-[#E6127C] to-[#D61C6B] text-white w-full">
                                <Link href="#donar" onClick={() => setIsMobileMenuOpen(false)}>
                                    Doná Ahora
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
