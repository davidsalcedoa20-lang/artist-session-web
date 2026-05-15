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
            DIEGO RUIZ
          </h1>

          <nav className="hidden md:flex gap-10 text-sm tracking-[2px]">

            <a href="#gallery" className="hover:text-gray-400 transition">
              GALERÍA
            </a>

            <a href="#video" className="hover:text-gray-400 transition">
              VIDEO
            </a>

            <a
              href="https://instagram.com/diegoruizoficiall"
              target="_blank"
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
    src="/images/hero.jpg"
    alt="Artist"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-black/55"></div>

  {/* CONTENIDO */}

  <div className="relative z-10 px-6 md:px-20 pb-24 max-w-5xl">

    <p className="text-sm tracking-[5px] text-gray-300 mb-5">
      LIVE SESSION
    </p>

    <h2 className="text-6xl md:text-8xl font-black leading-none mb-8">
      ARTIST
      <br />
      LIVE
    </h2>

    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
      Tu energía sobre el escenario, inmortalizada.
    </p>

    <div className="flex flex-wrap gap-5">

      <a
        href="https://instagram.com/diegoruizoficiall"
        target="_blank"
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
      LIVE AT ELITE
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
        src="/images/gallery1.jpg"
        onClick={() => setSelectedImage("/images/gallery1.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/gallery2.jpg"
        onClick={() => setSelectedImage("/images/gallery2.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/gallery3.jpg"
        onClick={() => setSelectedImage("/images/gallery3.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/gallery4.jpg"
        onClick={() => setSelectedImage("/images/gallery4.jpg")}
        className="w-[260px] h-[460px] object-cover rounded-[30px] flex-shrink-0 transition duration-500 hover:scale-[1.03] cursor-pointer"
      />

      <img
        src="/images/gallery5.jpg"
        onClick={() => setSelectedImage("/images/gallery5.jpg")}
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

      {/* VIDEO */}

      <section
        id="video"
        className="px-6 md:px-20 py-28"
      >

        <div className="mb-16">

          <p className="text-sm tracking-[5px] text-gray-500 mb-4">
            EVENT FILM
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            VIDEO RECAP
          </h2>

        </div>

        <div className="overflow-hidden rounded-[40px] border border-white/10">

          <video
            controls
            className="w-full"
            poster="/images/hero.jpg"
          >

            <source
              src="/videos/artist-video.mp4"
              type="video/mp4"
            />

          </video>

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