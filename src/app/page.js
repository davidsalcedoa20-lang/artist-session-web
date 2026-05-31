"use client";

import { useRef, useState } from "react";
export default function Home() {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

const scrollLeft = () => {
  galleryRef.current.scrollBy({
    left: -320,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  galleryRef.current.scrollBy({
    left: 320,
    behavior: "smooth",
  });
};
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <h1 className="text-xl md:text-2xl font-bold tracking-[4px]">
            PORTAFOLIO
          </h1>

          <nav className="hidden md:flex gap-10 text-sm tracking-[2px]">

            <a href="#gallery" className="hover:text-gray-400 transition">
              GALERÍA
            </a>

            <a
             href="#sobre-mi"
             className="hover:text-gray-400 transition"
            >
             SOBRE MÍ
            </a>

            <a
              href="https://drive.google.com/drive/folders/1Cf3ju_kk60u9tZ3xQwl9nRYzy4uz2cMB?usp=sharing"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              DESCARGAS
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}

<section className="relative h-screen flex items-end overflow-hidden">

  {/* IMAGEN */}

  <img
    src="/images/Hero.jpg"
    alt="Artist"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-black/55"></div>

  {/* CONTENIDO */}

  <div className="relative z-10 px-6 md:px-20 pb-24 max-w-5xl">

    <p className="text-sm tracking-[5px] text-gray-300 mb-5">
      
    </p>

    <h2 className="text-6xl md:text-8xl font-black leading-none mb-8">
      DJ
      <br />
      MIGUEL
    </h2>

    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
      Mi trayectoria como DJ ha sido un constante proceso de aprendizaje, 
      evolución y conexión a través de la música. 
      Aunque esta galería reúne imágenes de mi presentación más reciente, 
      cada fotografía representa la experiencia acumulada durante años de trabajo, 
      dedicación y pasión por crear momentos memorables en cada escenario. 
      Este espacio refleja no solo una noche en particular, 
      sino el recorrido que me ha llevado hasta aquí.
    </p>

    <div className="flex flex-wrap gap-5">

      <a
  href="#sobre-mi"
  className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
>
  SOBRE MÍ
</a>

      <a
        href="https://drive.google.com/drive/folders/1Cf3ju_kk60u9tZ3xQwl9nRYzy4uz2cMB?usp=sharing"
        target="_blank"
        className="px-8 py-4 bg-white text-black rounded-full hover:opacity-80 transition"
      >
        DESCARGAS
      </a>

    </div>

  </div>

</section>
<section
  id="sobre-mi"
  className="w-full py-28 px-6 md:px-20 bg-black text-white"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-sm tracking-[5px] text-gray-500 mb-4">
      SOBRE MÍ
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mb-16">
      MIGUEL TOLOZA DJ
    </h2>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <img
          src="/images/mail.jpg"
          alt="Miguel Toloza DJ"
          className="w-full rounded-[30px] object-cover"
        />
      </div>

      <div>

        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          13 años de trayectoria llevando la música crossover y urbana a escenarios nacionales e internacionales.
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          Miguel Toloza DJ cuenta con una trayectoria de 13 años en la industria musical,
          destacándose por su versatilidad en géneros crossover y urbanos.
          Su energía en tarima, creatividad y conexión con el público lo han
          consolidado como uno de los DJs con mayor proyección en la región.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          A lo largo de su carrera ha participado en eventos de gran nivel,
          llevando su propuesta musical a diferentes escenarios y construyendo
          una identidad artística basada en la pasión, el profesionalismo y la
          constante evolución.
        </p>

        <div className="grid grid-cols-2 gap-4">

          <div className="border border-white/10 rounded-3xl p-6">
            <h4 className="text-4xl font-bold mb-2">13+</h4>
            <p className="text-gray-400 text-sm">
              Años de trayectoria
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6">
            <h4 className="text-4xl font-bold mb-2">2025</h4>
            <p className="text-gray-400 text-sm">
              World Tour DJ Latin
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6">
            <h4 className="text-4xl font-bold mb-2">TOP</h4>
            <p className="text-gray-400 text-sm">
              DJ destacado de la región
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6">
            <h4 className="text-4xl font-bold mb-2">LIVE</h4>
            <p className="text-gray-400 text-sm">
              Shows nacionales e internacionales
            </p>
          </div>

        </div>

      </div>

    </div>

    <div className="mt-20 border border-white/10 rounded-[30px] p-8">

      <h3 className="text-2xl font-semibold mb-8">
        Artistas destacados
      </h3>

      <div className="flex flex-wrap gap-4">

        <span className="px-5 py-3 border border-white/10 rounded-full">
          La Factoria
        </span>

        <span className="px-5 py-3 border border-white/10 rounded-full">
          Andy Rivera
        </span>

        <span className="px-5 py-3 border border-white/10 rounded-full">
          Sergio Vargas
        </span>

        <span className="px-5 py-3 border border-white/10 rounded-full">
          Jean Carlos Centeno
        </span>

        <span className="px-5 py-3 border border-white/10 rounded-full">
          Mono Zabaleta
        </span>

        <span className="px-5 py-3 border border-white/10 rounded-full">
          Samuel Morales
        </span>

      </div>

      <div className="mt-10 space-y-6 text-gray-300 leading-relaxed">

        <p>
          Durante su trayectoria ha compartido escenario y participado en
          eventos junto a reconocidos artistas nacionales e internacionales.
          También trabajó junto al participante de Yo Me Llamo Maluma,
          quien obtuvo el segundo lugar en el reconocido programa
          Yo Me Llamo Colombia.
        </p>

        <p>
          Su talento lo ha llevado a participar y ganar importantes
          competencias de DJs en Norte de Santander, obteniendo reconocimiento
          por su técnica, creatividad y capacidad para conectar con el público
          en cada presentación.
        </p>

        <p>
          En 2025 realizó su WORLD TOUR DJ LATIN por el continente europeo,
          llevando la música latina y urbana a escenarios internacionales y
          marcando uno de los hitos más importantes de su carrera.
        </p>

      </div>

    </div>

  </div>
</section>
      {/* GALERÍA */}

<section
  id="gallery"
  className="px-6 md:px-20 py-28 overflow-hidden"
>

  <div className="mb-16">

    <p className="text-sm tracking-[5px] text-gray-500 mb-4">
      GALLERY
    </p>

    <h2 className="text-4xl md:text-6xl font-bold">
      Recent Show
    </h2>

  </div>

  <div className="relative">

    {/* BOTÓN IZQUIERDO */}

    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 border border-white/10 w-14 h-14 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
    >
      ←
    </button>

    {/* GALERÍA */}

    <div
      ref={galleryRef}
      className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-16"
    >

      <img
        src="/images/Estudio1.jpg"
        onClick={() => setSelectedImage("/images/Estudio1.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/Estudio2.jpg"
        onClick={() => setSelectedImage("/images/Estudioy2.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/Estudio3.jpg"
        onClick={() => setSelectedImage("/images/Estudio3.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/Estudio4.jpg"
        onClick={() => setSelectedImage("/images/Estudio4.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/Estudio5.jpg"
        onClick={() => setSelectedImage("/images/Estudio5.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

    </div>

    {/* BOTÓN DERECHO */}

    <button
      onClick={scrollRight}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 border border-white/10 w-14 h-14 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
    >
      →
    </button>

  </div>

</section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-gray-500 text-sm">
          © 2026 NEXA Visuales
        </p>

        <div className="flex gap-8 text-sm tracking-[2px]">

          <a
  href="https://instagram.com/nexa_visuales"
  target="_blank"
  className="hover:text-gray-400 transition"
>
  INSTAGRAM
</a>

          <a
            href="https://drive.google.com/drive/folders/1Cf3ju_kk60u9tZ3xQwl9nRYzy4uz2cMB?usp=sharing"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            DESCARGAS
          </a>

        </div>

      </footer>
{/* LIGHTBOX FULLSCREEN */}

{selectedImage && (

  <div
    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
    onClick={() => setSelectedImage(null)}
  >

    <button
      className="absolute top-6 right-6 text-white text-5xl"
    >
      ×
    </button>

    <img
      src={selectedImage}
      className="max-w-full max-h-full rounded-[30px] object-contain"
    />

  </div>

)}
    </main>
  );
}