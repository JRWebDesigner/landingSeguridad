"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Eye,
  Clock,
  MapPin,
  Users,
  BarChart3,
  Smartphone,
  Zap,
  CheckCircle,
  Star,
  Menu,
  X,
  ArrowRight,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function SecurityMonitoringLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

     
      <section className="relative z-10 min-h-screen flex items-center justify-center flex-wrap px-4">
        <div className="x-auto text-center mt-10">
          <div
            className="transform transition-all duration-1000 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <Badge className="mb-6 bg-red-900/20 text-red-400 border-red-500/30 animate-pulse">
              🔴 MONITOREO EN VIVO
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent animate-gradient">
                Monitoreo Inteligente
              </span>
              <br />
              <span className="text-red-500 animate-pulse">en Tiempo Real</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              El sistema inteligente OnPatrol, te permite monitorear en tiempo real, auditar recorridos, registrar accesos y responder con evidencia a cualquier incidente, todo desde tu celular o PC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                Comenzar Demo Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Ver Video
              </Button>
            </div>
          </div> 
        </div>
        {/*<img 
            src="./mobile2.png"
            alt='mobile app'
            className="h-[300px] transform transition-all duration-1000 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        /> */}
        <img 
            src="./mobile2.png"
            alt='mobile app'
           
            className="transform transition-all duration-1000 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px)`}}
        /> 
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-red-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 border-2 border-red-500 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-3 h-3 bg-red-400 rounded-full opacity-50"></div>
        </div>
      </section>

      <section id="características" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                ¡ESTOS SON LOS ERRORES QUE PONEN EN RIESGO TU OPERACIÓN!
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                description:
                  "Probablemente tengas guardias que reportan rondas sin haberlos realizado realmente.",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Clock,
                description: "Es probable que hasta ahora sigas realizando informes en papel que lamentablemente se pierden, se ensucian o se manipulan",
                color: "from-red-600 to-red-700",
              },
              {
                icon: MapPin,
                description:
                  "Posiblemente una de las debilidades que tienes, es la falta de control sobre accesos y entradas.",
                color: "from-red-700 to-red-800",
              },
              {
                icon: Smartphone,
                title: "App Móvil Intuitiva",
                description:
                  "Lo grave es que todos estos problemas te pueden llevar a la pérdida de contratos por fallas operativas y eso representa un daño económico terrible.",
                color: "from-red-500 to-red-700",
              },
              {
                icon: BarChart3,
                description: "Quizás los supervisores operan a ciegas y sin herramientas tecnológicas apropiadas",
                color: "from-red-600 to-red-800",
              },
              {
                icon: Zap,
                title: "Alertas Instantáneas",
                description: "Es casi frecuente tener reclamos de clientes, pero lamentablemente no tiene evidencia para responder a estos reclamos.",
                color: "from-red-700 to-red-900",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-red-900/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/*
      {/* Benefits Section 
      <section id="beneficios" className="relative z-10 py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                  Transforma tu Seguridad
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Más que un software de monitoreo, es tu socio estratégico para una seguridad inteligente y eficiente.
              </p>

              <div className="space-y-6">
                {[
                  "Reduce costos operativos hasta un 40%",
                  "Mejora la eficiencia del personal en un 60%",
                  "Respuesta a incidentes 5x más rápida",
                  "Reportes automáticos y cumplimiento normativo",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="h-6 w-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl p-8 backdrop-blur-sm border border-red-500/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, label: "Personal", value: "24/7" },
                    { icon: Shield, label: "Seguridad", value: "100%" },
                    { icon: BarChart3, label: "Eficiencia", value: "+60%" },
                    { icon: Clock, label: "Tiempo Real", value: "<1s" },
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-red-500 mb-1">{item.value}</div>
                      <div className="text-gray-400 text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials 
      <section id="testimonios" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                Lo que Dicen Nuestros Clientes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendoza",
                position: "Director de Seguridad",
                company: "Centro Comercial Plaza Norte",
                content:
                  "GuardWatch Pro revolucionó completamente nuestra operación. Ahora tenemos control total y nuestros incidentes se redujeron en un 80%.",
                rating: 5,
              },
              {
                name: "Ana García",
                position: "Gerente General",
                company: "Corporativo Torres",
                content:
                  "La mejor inversión que hemos hecho. El ROI fue evidente desde el primer mes. Recomiendo GuardWatch Pro sin dudarlo.",
                rating: 5,
              },
              {
                name: "Roberto Silva",
                position: "Jefe de Operaciones",
                company: "Industrial Park",
                content:
                  "Increíble la facilidad de uso y la potencia del sistema. Nuestros guardias están más motivados y somos más eficientes.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-red-900/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-red-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-red-900/20 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-red-400 text-sm">{testimonial.position}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing 
      <section id="precios" className="relative z-10 py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                Planes que se Adaptan a Ti
              </span>
            </h2>
            <p className="text-xl text-gray-300">Elige el plan perfecto para tu negocio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Básico",
                price: "$99",
                period: "/mes",
                description: "Perfecto para pequeñas empresas",
                features: [
                  "Hasta 5 guardias",
                  "Monitoreo en tiempo real",
                  "Reportes básicos",
                  "Soporte por email",
                  "App móvil",
                ],
                popular: false,
              },
              {
                name: "Profesional",
                price: "$199",
                period: "/mes",
                description: "Ideal para empresas medianas",
                features: [
                  "Hasta 20 guardias",
                  "Todas las características básicas",
                  "Reportes avanzados",
                  "Alertas personalizadas",
                  "Soporte prioritario",
                  "Integración API",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Personalizado",
                period: "",
                description: "Para grandes corporaciones",
                features: [
                  "Guardias ilimitados",
                  "Todas las características",
                  "Reportes personalizados",
                  "Soporte 24/7",
                  "Implementación dedicada",
                  "SLA garantizado",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gray-900/50 border-red-900/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group hover:scale-105 ${plan.popular ? "ring-2 ring-red-500 shadow-2xl shadow-red-500/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1">MÁS POPULAR</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-500">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-500/25"
                        : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    } transition-all duration-300`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contactar Ventas" : "Comenzar Ahora"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA 
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
                ¿Listo para Revolucionar tu Seguridad?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Únete a más de 500 empresas que ya confían en GuardWatch Pro para proteger lo que más importa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                Comenzar Demo Gratis
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <p className="text-gray-400">✅ Sin compromiso • ✅ Configuración en 24 horas • ✅ Soporte completo</p>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="relative z-10 border-t border-red-900/20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-red-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                  GuardWatch Pro
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                La plataforma líder en monitoreo inteligente de seguridad. Protegemos tu negocio con tecnología de
                vanguardia.
              </p>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-all duration-300">
                      <span className="text-sm">{social[0]}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Producto</h3>
              <ul className="space-y-2">
                {["Características", "Precios", "Demo", "API"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2">
                {["Contacto", "Ayuda", "Documentación", "Estado"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-red-900/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 GuardWatch Pro. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300">
                Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    */}
    </div>
  )
}
