<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let animationFrame;
let canvas, ctx;

const initCanvas = () => {
  canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  
  ctx = canvas.getContext('2d');
  
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  const particles = [];
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${Math.random() * 0.5 + 0.2})`,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5
    });
  }
  
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
    });
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(120, 120, 255, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    animationFrame = requestAnimationFrame(animate);
  };
  
  animate();
  
  return () => {
    window.removeEventListener('resize', resizeCanvas);
    cancelAnimationFrame(animationFrame);
  };
};

onMounted(() => {
  const cleanup = initCanvas();
  
  onBeforeUnmount(() => {
    if (cleanup) cleanup();
  });
});
</script>
<template>
  <div class="min-h-screen bg-gray-900 text-white overflow-hidden relative">
    <div class="absolute inset-0 opacity a-0 overflow-hidden">
      <canvas id="bgCanvas" class="absolute inset-0"></canvas>
    </div>
    <div class="container max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col items-center justify-center min-h-screen">
      <div class="w-full max-w-2xl backdrop-blur-lg bg-gray-800/40 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-700/50 transform transition-all duration-500 hover:shadow-purple-500/10">
        <div class="flex flex-col gap-6">
          <div class="inline-flex items-center self-start px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <span class="relative flex h-2 w-2 mr-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Developer Intern @ ZasmLabs
          </div>
          <div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hi, I'm Rutuja
            </h1>
            <!-- <h2 class="text-xl md:text-2xl text-gray-300 font-light mb-6">
             Msc Computer Science 
            </h2> -->
            <p class="text-lg md:text-xl font-medium text-gray-100 border-l-2 border-purple-500 pl-4 italic">
             Developer by role, storyteller by design
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            <div class="flex flex-col p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
              <span class="text-xs text-gray-400">Experience</span>
              <span class="text-lg font-medium">8 months </span>
            </div>
            <div class="flex flex-col p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
              <span class="text-xs text-gray-400">Projects</span>
              <span class="text-lg font-medium">5+ Completed</span>
            </div>
            <div class="flex flex-col p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
              <span class="text-xs text-gray-400">Primary Stack</span>
              <span class="text-lg font-medium">MERN</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mt-4">
            <NuxtLink to="/about" class="px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-300 flex items-center gap-2">
              <span>About Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/projects" class="px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-all duration-300 border border-gray-700 flex items-center gap-2">
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12M8 12h12M8 17h12M4 7h0m0 5h0m0 5h0" />
              </svg>
            </NuxtLink>
            <a href="/Rutuja_Kirad_Resume.pdf" download class="px-5 py-3 bg-transparent hover:bg-gray-800 rounded-lg text-gray-300 font-medium transition-all duration-300 border border-gray-700 flex items-center gap-2">
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center space-x-6">
        <a href="https://github.com/Rutujakirad" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/rutuja-kirad" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
        </a>
        <a href="mailto:chinmayikirad31@gmail.com" class="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

