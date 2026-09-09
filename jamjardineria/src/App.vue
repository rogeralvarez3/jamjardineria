<template>
  <div class="min-h-screen bg-[#F8F9FA] font-sans text-gray-800">
    <!-- Navbar -->
    <header class="fixed w-full bg-white shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="text-3xl font-bold text-[#1A5336] tracking-tighter">JAM</span>
          <span class="text-xl font-light text-gray-600 border-l border-gray-300 pl-2">Jardinería</span>
        </div>
        <nav class="hidden md:flex gap-8 font-medium text-sm text-gray-600">
          <a href="#servicios" class="hover:text-[#2E8B57] transition-colors">Servicios</a>
          <a href="#galeria" class="hover:text-[#2E8B57] transition-colors">Nuestro Trabajo</a>
        </nav>
        <a :href="whatsappLink" target="_blank" class="bg-[#2E8B57] hover:bg-[#1A5336] text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md flex items-center gap-2">
          Cotizar Ahora
        </a>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 flex justify-center items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#1A5336]/10 to-[#2E8B57]/5 z-0"></div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold text-[#1A5336] leading-tight mb-6 font-serif">
          Transformamos tu terreno en un espacio vivo y elegante
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Especialistas en chapeo, limpieza de lotes y diseño de áreas verdes para hogares, condominios y empresas en Costa Rica.
        </p>
        <a :href="whatsappLink" target="_blank" class="inline-block bg-[#1A5336] hover:bg-[#113824] text-white text-lg px-8 py-4 rounded-full font-bold transition-transform transform hover:-translate-y-1 shadow-lg">
          Hablemos por WhatsApp
        </a>
      </div>
    </section>

    <!-- Servicios -->
    <section id="servicios" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-[#1A5336] mb-12">Nuestros Servicios</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(servicio, index) in servicios" :key="index" class="p-8 rounded-2xl bg-[#F8F9FA] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
            <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{{ servicio.icono }}</div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ servicio.titulo }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ servicio.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Galería -->
    <section id="galeria" class="py-20 bg-[#F8F9FA]">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-[#1A5336] mb-4">La Diferencia JAM</h2>
        <p class="text-center text-gray-600 mb-12">Desliza para ver la transformación de nuestros proyectos.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(img, index) in galeria" :key="index" class="overflow-hidden rounded-xl shadow-md group relative">
            <img :src="img.src" :alt="img.alt" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span class="text-white font-medium">{{ img.etiqueta }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#112419] text-white py-12 border-t-4 border-[#2E8B57]">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <div class="text-2xl font-bold tracking-widest text-[#4CAF50] mb-2">JAM Jardinería</div>
          <p class="text-gray-400 text-sm">Trabajos de pequeña y gran escala.</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-gray-300 font-medium">Bismar Álvarez</p>
          <div class="flex items-center justify-center md:justify-start gap-4">
            <a :href="`https://wa.me/50672110267`" class="hover:text-[#4CAF50] transition-colors">7211-0267</a>
            <span class="text-gray-600">|</span>
            <a :href="`https://wa.me/50683094039`" class="hover:text-[#4CAF50] transition-colors">8309-4039</a>
          </div>
          <a href="mailto:atencion@jamjardineria.com" class="text-gray-300 hover:text-[#4CAF50] transition-colors mt-1">atencion@jamjardineria.com</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import img1 from '/src/assets/WhatsApp Image 2026-09-08 at 20.29.28 (5).jpeg';
import img2 from '/src/assets/WhatsApp Image 2026-09-08 at 20.29.28 (1).jpeg';
import img3 from '/src/assets/WhatsApp Image 2026-09-08 at 20.29.28 (4).jpeg';

const whatsappLink = computed(() => {
  const mensaje = encodeURIComponent("¡Hola! Me gustaría cotizar un trabajo de jardinería según mi área y condiciones del terreno.");
  return `https://wa.me/50672110267?text=${mensaje}`;
});

const servicios = ref([
  {
    icono: '🌿',
    titulo: 'Limpieza de Terrenos',
    descripcion: 'Chapeo profundo de lotes baldíos con equipo especializado para eliminar maleza resistente.'
  },
  {
    icono: '🏡',
    titulo: 'Áreas Verdes',
    descripcion: 'Mantenimiento continuo para hogares, condominios y recintos empresariales.'
  },
  {
    icono: '🌱',
    titulo: 'Instalación de Zacate',
    descripcion: 'Siembra y tratamiento de césped para lograr un acabado uniforme y siempre verde.'
  },
  {
    icono: '✨',
    titulo: 'Decoración de Jardín',
    descripcion: 'Diseño paisajístico, poda estética y organización de plantas ornamentales.'
  }
]);

const galeria = ref([
  { src: img1, alt: 'Antes y Después', etiqueta: 'Transformación Completa' },
  { src: img2, alt: 'Entrada Condominio', etiqueta: 'Mantenimiento y Diseño' },
  { src: img3, alt: 'Área de Piscina', etiqueta: 'Zacate Residencial' }
]);
</script>

<style scoped>
/* Las clases de Tailwind manejan la mayor parte del diseño, 
   pero puedes agregar animaciones personalizadas aquí si lo deseas */
html {
  scroll-behavior: smooth;
}
</style>