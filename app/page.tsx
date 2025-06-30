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

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setIsOpen(false);
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);


  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#ff0000] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

         <img className='relative z-10 mx-auto' src="./logo.png" width='280px'/>
      <section className="relative z-10 min-h-[80%] flex items-center justify-center flex-wrap px-2 md:px-4">

        <div className="x-auto text-center mt-5 p-[2rem]">
          <div
            className="transform transition-all duration-1000 ease-out "
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <Badge className="mb-6 bg-red-900/20 text-red-400 border-red-500/30 animate-pulse">
              🔴 MONITOREO EN VIVO
            </Badge>

            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-[#ff0000] bg-clip-text text-transparent animate-gradient">
                ¿ESTÁS SEGURO DE QUE TUS <br/ > GUARDIAS Y SUPERVISORES <br /> ESTÁN CUMPLIENDO <br/> SU TRABAJO?
              </span>
              <br />
              <span className="text-red-500 animate-pulse">¿O SIMPLEMENTE <br/> LO SUPONES?</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed w-[90%] md:w-auto">
              El sistema inteligente OnPatrol, te permite controlar a tus supervisores y guardias, las rondas que realizan, registro de evidencias, incidentes, eventos o novedades, registro en los accesos o ingresos, todo esto en tiempo real, desde tu celular o una PC, sin complicaciones.
            </p>

            <div className="flex flex-col gap-4 justify-center items-center mb-12">
              <Button
                size="xl"
                className="bg-gradient-to-r from-red-900 via-red-500 to-[#ff0000] text-white px-3 md:px-8 py-4 text-2xl shadow-2xl shadow-red-500/30 transition-all duration-300 transform hover:scale-105 group animate-gradient"
              >
                <a className="flex gap-1 items-center" href="https://wa.link/70maca" target="blank"> <img src="./whatsapp.svg" className="hidden md:flex"/> Comenzar Demo Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /> </a>
              </Button>
              <Button
                onClick={() => setIsOpen(true)}
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
           
            className="h-[350px] md:h-auto transform transition-all duration-1000 ease-out"
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
{isOpen && (
                <div
                  onClick={closeModal}
                  className="fixed inset-0 bg-black/90 backdrop-blur-sm z-20 flex items-center justify-center p-4"
                >
                  <div className="relative w-full max-w-4xl">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
                      aria-label="Cerrar modal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <div className="aspect-video bg-black rounded-lg overflow-hidden">
                      <video
                        className="w-full h-full"
                        controls
                        autoPlay
                        playsInline
                      >
                        <source src="https://video.wixstatic.com/video/15c93a_5ee452d982524d83a4f5fbefa40d9ff7/1080p/mp4/file.mp4" type="video/mp4" />
                        Tu navegador no soporta videos HTML5
                      </video>
                    </div>
                  </div>
                </div>
              )}
      <section id="características" className="relative z-10 py-20 px-2 md:px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#ff0000] bg-clip-text text-transparent">
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
                color: "from-red-700 to-[#ff0000]",
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
                color: "from-red-600 to-[#ff0000]",
              },
              {
                icon: Zap,
                title: "Alertas Instantáneas",
                description: "Es casi frecuente tener reclamos de clientes, pero lamentablemente no tienes evidencia para responder a estos reclamos.",
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
                  <p className="md:text-xl text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <h3 className="text-center text-xl md:text-3xl font-bold mt-20">
                <span className="bg-gradient-to-r from-white to-[#ff0000] bg-clip-text text-transparent">
                  La seguridad no se improvisa. Se controla. Se verifica. Se prueba.
                </span>
           </h3>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="relative z-10 py-20 md:px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-[#ff0000] bg-clip-text text-transparent">
                  Transforma tu Seguridad
                </span>
              </h2>
              <p className="md:text-xl text-xl text-gray-300 mb-8">
                Todo lo que necesitas para tener el control real de toda tu operación de seguridad, es una sola plataforma.
              </p>
              <div className="space-y-6">
                {[
                  "Geolocalización en tiempo real",
                  "Dashboard para supervisores       ",
                  "Programación automática de rondas",
                  "Escaneo con evidencia (QR + multimedia)",
                  "Control Indoor y Outdoor sin límites",
                  "Bitácoras digitales y reportes inteligentes",
                  "Control de accesos con evidencia",
                  "Todo desde la nube, sin hardware adicional",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-9 w-9 text-[#ff0000] transition-transform duration-300" />
                    <span className="text-gray-300 transition-colors duration-300 w-[90%] md:w-auto text-xl md:text-2xl">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-[95%] md:w-[70%]">
              <div className="bg-gradient-to-r from-red-600/20 to-[#ff0000]/20 rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-red-500/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, label: "Personal", value: "24/7" },
                    { icon: Shield, label: "Seguridad", value: "100%" },
                    { icon: BarChart3, label: "Eficiencia", value: "+60%" },
                    { icon: Clock, label: "Tiempo Real", value: "Al Instante" },
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-sm md:text-2xl font-bold text-red-500 mb-1">{item.value}</div>
                      <div className="text-gray-400 text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-20 py-20 md:px-4">
        <div className="container mx-auto grid gap-24">
          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
           <div className="mx-auto">
              <h3 className="font-bold text-2xl">
                Geolocalización en tiempo real
              </h3>
              <p className="md:text-xl text-gray-400 leading-relaxed">
                Puedes supervisar a tus guardias minuto a minuto visualizando recorridos exactos con GPS. Además, recibirás alertas si hay desvíos o si se saltan puntos de marcación y con ello sabrás quién está cumpliendo y quién no.
              </p>
            </div>
            <img 
              src="./monitoreo.png" 
              className="md:w-[55%] shadow-xl shadow-red-500 rounded-2xl" 
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-6">
           <div className=" mx-auto">
              <h3 className="font-bold text-2xl mt-8 md:text-right">
                Dashboard para supervisores
              </h3>
              <p className="md:text-xl text-gray-400 leading-relaxed text-justify md:text-right">
                Solo necesitas un panel visual y profesional para ver todas las rondas: rondas cumplidas, cuales están activos o cual han sido fallidos. El sistema te muestra colores que indican el estado y reportes descargables en segundos. Ya no necesitarás más hojas de Excel, no más llamadas para saber qué pasa.
              </p>
            </div>
            <img src="./monitoreo2.webp"  className="md:w-[55%] shadow-xl shadow-red-500 rounded-2xl" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
           <div>
              <h3 className="font-bold text-2xl">
                Escaneo con evidencia (QR + multimedia)
              </h3>
              <p className="md:text-xl text-gray-400 leading-relaxed text-justify md:text-left">
                Puedes verificar que el guardia ha escaneado en el lugar correcto con QR o TAG. Te permite agregar fotos, audios, firmas digitales o formularios. Cada escaneo es una prueba legal y operativa.
              </p>
            </div>
            <img src="./qr.png"  className="md:w-[55%] shadow-xl shadow-red-500 rounded-2xl" />
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-6">
           <div className=" mx-auto">
              <h3 className="font-bold text-2xl md:text-right">
                Indoor y Outdoor sin límites
              </h3>
              <p className="md:text-xl text-gray-400 leading-relaxed text-justify md:text-right">
                Puedes usar GPS para espacios exteriores. Códigos QR + IoT para interiores donde el GPS no llega. Esta solución es ideal para fábricas, hospitales, centros logísticos o edificios corporativos.
              </p>
            </div>
            <img src="./rondin2.png"  className="md:w-[55%] shadow-xl shadow-red-500 rounded-2xl" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
           <div>
              <h3 className="font-bold text-2xl">
                Bitácoras digitales y reportes inteligentes
              </h3>
              <p className="md:text-xl text-gray-400 leading-relaxed text-justify md:text-left">
                Es una solución en el que todo queda registrado. Puedes filtrar por persona, zona, horario o cumplimiento. Puedes exportar evidencias con un clic. Te permite mostrar profesionalismo ante clientes y auditorías.
              </p>
            </div>
            <img src="./rondin.png"  className="md:w-[55%] shadow-xl shadow-red-500 rounded-2xl" />
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-6">
           <div className="md:w-[50%]">
              <h3 className="font-bold text-2xl md:text-right">
                Control de accesos con evidencia
              </h3>
              <p className="md:text-xl text-gray-400 leading-relaxed text-justify md:text-right">
                Puedes registrar entradas y salidas con fotos de personas, cédulas y vehículos. Las bitácoras estarás seguras en la nube. Podrás acceder fácilmente a la información, pudiendo auditar por 3 años.
              </p>
            </div>
            <img src="./reportes.png"  className="md:w-[30%] shadow-xl shadow-red-500 rounded-2xl" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
           <div className="md:w-[50%]">
              <h3 className="font-bold text-2xl">
                Todo desde la nube, sin hardware adicional
              </h3>
              <p className="md:text-xl text-gray-400 leading-relaxed text-justify md:text-left">
                Solo necesitarás un celular Android por guardia o por puesto desde donde podrás acceder desde cualquier navegador. La implementación es sumamente rápida, lo que no frenar tu operación.
              </p>
            </div>
            <img src="./mobile.png" className="md:w-[30%] shadow-xl shadow-red-500 rounded-2xl" />
          </div>
         </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonios" className="relative z-10 py-20 px-2 md:px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#ff0000] bg-clip-text text-transparent">
                Lo que Dicen Nuestros Clientes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Carlos M.",
                position: "Gerente de Seguridad Logística",
                company: "Centro Comercial Plaza Norte",
                content:
                  "Antes dependía de la palabra del guardia. Hoy tengo pruebas. Los clientes están más tranquilos y yo también.",
                rating: 5,
              },
              {
                name: "Ana R. ",
                position: "Supervisora de Seguridad Corporativa",
                company: "Corporativo Torres",
                content:
                  "Lo implementamos en menos de una semana. Todo el control está en la palma de mi mano.",
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
                  <p className="md:text-xl text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-red-900/20 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-red-400 text-sm">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 md:px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-red-200 to-[#ff0000] bg-clip-text text-transparent">
                ¿Listo para Revolucionar tu Seguridad?
              </span>
            </h2>
            <p className="md:text-xl text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Únete a más de 500 empresas que ya confíaron para proteger lo que más importa. ¡Está en tus manos dar el siguiente paso! La seguridad profesional empieza con decisiones inteligentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-12">
              <a href="https://wa.link/70maca">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-[#ff0000] text-white px-12 py-6 text-sm md:text-xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 group w-[300px] md:w-auto"
              >
                QUIERO MI DEMO GRATUITA AHORA
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              </a>
            </div>
            <p className="text-2xl font-bold text-white mt-7">(30 días sin compromiso - Implementación inmediata - Resultados desde el primer día)</p>
          </div>
          <Card className="md:container md:w-[80%] bg-gray-900/50 border-red-900/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 shadow-2xl shadow-red-500/10 mt-12 w-full">
                <CardContent className="">
                  <form className="space-y-6" action="https://formsubmit.co/info@corporacionrojo.com" method="POST">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nomre"
                        name="nombre"
                        required
                        className="w-full px-2 md:px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        className="w-full px-2 md:px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium text-gray-300">
                        WhatsApp o Correo Electrónico *
                      </label>
                      <input
                        type="text"
                        id="contacto"
                        name="contacto"
                        required
                        className="w-full px-2 md:px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
                        placeholder="WhatsApp: +12 345 678 90 o email@empresa.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Mensaje (Opcional)
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        className="w-full px-2 md:px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Cuéntanos sobre tus necesidades específicas..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-[#ff0000] text-white py-4 text-lg shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 group"
                    >
                      Solicitar Demo Gratis
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
        </div>
      </section>
      <footer className='relative z-10 flex justify-center items-center flex-col my-8 gap-2 text-center p-5'>
         <img src="./logolook.png" width="100px" />
         <img src="./logob.png" width='270px' />
         <span>Dirección: Calle 1 Obrajes Edificio Torres Sur Of. TS17</span>
         <div className="flex justify-around flex-wrap items-center gap-5">
         <span>Teléf: +591-2-2780683 - 75363523 </span>
         <span>Correo: <a href="mailto:info@corporacionrojo.com">info@corporacionrojo.com</a></span>
          </div>
         <span><a target="_blank" href="https://www.corporacionrojo.com">www.corporacionrojo.com</a></span>
         <span>Copyright © 2025 CORPORACIONROJO, Todos los derechos reservados</span>
      </footer>
    </div>
  )
}
