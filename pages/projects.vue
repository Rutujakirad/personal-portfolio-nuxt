<template>
  <div class="min-h-screen bg-gray-900 text-white pb-16">
    <!-- Unique back navigation -->
    <div class="fixed top-6 left-6 z-50">
      <div class="flex items-center space-x-4">
        <!-- Home -->
        <div class="group relative" @click="$router.push('/')" title="Home">
          <div class="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center border border-gray-700/50 transition-all duration-300 group-hover:bg-purple-600/30 group-hover:border-purple-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div class="absolute inset-0 rounded-full scale-0 opacity-0 bg-purple-500/20 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700"></div>
          <span class="absolute left-14 top-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-800 px-2 py-1 rounded">Home</span>
        </div>
        
        <!-- About -->
        <div class="group relative" @click="$router.push('/about')" title="About">
          <div class="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center border border-gray-700/50 transition-all duration-300 group-hover:bg-blue-600/30 group-hover:border-blue-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div class="absolute inset-0 rounded-full scale-0 opacity-0 bg-blue-500/20 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700"></div>
          <span class="absolute left-14 top-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-800 px-2 py-1 rounded">About</span>
        </div>
      </div>
    </div>

    <!-- Content container -->
    <div class="container max-w-6xl mx-auto px-4 pt-24 pb-8">
      <!-- Section title -->
      <div class="flex items-center space-x-4 mb-12">
        <div class="h-px bg-gradient-to-r from-blue-500 to-transparent flex-grow max-w-xs"></div>
        <h1 class="text-4xl md:text-5xl font-bold">Projects</h1>
        <div class="h-px bg-gradient-to-l from-blue-500 to-transparent flex-grow max-w-xs"></div>
      </div>

      <!-- Professional Projects section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8 text-blue-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Professional Projects
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- ONTAS Project Card -->
          <div class="project-card group backdrop-blur-md bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg transition-all duration-500 hover:shadow-blue-600/10 hover:border-blue-600/30 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="p-6 relative z-10">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-white">ONTAS</h3>
                <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">ZasmLabs</span>
              </div>
              <p class="text-gray-300 mb-4"> An Offline Navigation Application  for Navigation and Avalanche Detection </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Optimized React UIs for 30% performance gain</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>95% on-time delivery with PostgreSQL integration</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Agile workflow with Git and Azure DevOps</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">JavaScript</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">React.js</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">PostgreSQL</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Git</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Azure DevOps</span>
              </div>
            </div>
          </div>

          <!-- IAWNS Project Card -->
          <div class="project-card group backdrop-blur-md bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg transition-all duration-500 hover:shadow-blue-600/10 hover:border-blue-600/30 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="p-6 relative z-10">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-white">IAWNS</h3>
                <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">ZasmLabs</span>
              </div>
              <p class="text-gray-300 mb-4">An Integrated system for Offline Weather and Avalanche detection  </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Manual testing with 50+ test cases</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>95% bug resolution rate through regression testing</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>SRS/STP documentation and QA support</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Manual Testing</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Jira</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Documentation</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">QA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal Projects section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8 text-green-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Personal Projects
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Attendance Management System -->
          <div class="project-card group backdrop-blur-md bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg transition-all duration-500 hover:shadow-green-600/10 hover:border-green-600/30 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="p-6 relative z-10">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-white">Attendance Management System</h3>
                <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">Personal</span>
              </div>
              <p class="text-gray-300 mb-4">A comprehensive system built with MERN stack for managing attendance with role-based authentication and real-time tracking.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Role-based authentication with JWT</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Real-time tracking with Socket.io</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Containerized with Docker for easy deployment</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">MongoDB</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Express.js</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">React.js</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Node.js</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Docker</span>
              </div>
            </div>
          </div>

          <!-- University Management System -->
          <div class="project-card group backdrop-blur-md bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg transition-all duration-500 hover:shadow-green-600/10 hover:border-green-600/30 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="p-6 relative z-10">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-white">University Management System</h3>
                <span class="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs border border-teal-500/30">Personal</span>
              </div>
              <p class="text-gray-300 mb-4">A Java and MySQL based management system for universities with custom admin dashboards and extensive record handling.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-teal-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Managed 1,000+ student and faculty records</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-teal-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Custom admin dashboards with reporting features</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-teal-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Optimized database queries for fast performance</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Java</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">MySQL</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Swing</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">JDBC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Open Source Projects section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8 text-amber-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Open Source Contributions
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Dark Mode Toggle -->
          <div class="project-card group backdrop-blur-md bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg transition-all duration-500 hover:shadow-amber-600/10 hover:border-amber-600/30 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="p-6 relative z-10">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-white">Dark Mode Toggle</h3>
                <span class="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs border border-amber-500/30">Open Source</span>
              </div>
              <p class="text-gray-300 mb-4">A customizable web component for implementing dark mode with localStorage persistence and CSS variables support.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-amber-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Available on NPM as 'darkthemewc'</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-amber-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Uses localStorage for user preference persistence</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-amber-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Dynamic CSS variable support for theme customization</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">JavaScript</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Web Components</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">CSS</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">NPM</span>
              </div>
              <div class="mt-4 flex items-center">
                <a href="https://github.com/Rutujakirad/DarkEaseToggle-" target="_blank" class="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
            </div>
          </div>

          <!-- Neumorphic Card -->
          <div class="project-card group backdrop-blur-md bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg transition-all duration-500 hover:shadow-amber-600/10 hover:border-amber-600/30 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="p-6 relative z-10">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-white">Neumorphic Card</h3>
                <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs border border-orange-500/30">Open Source</span>
              </div>
              <p class="text-gray-300 mb-4">A customizable web component implementing neumorphic design patterns with soft shadows and gradients.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Responsive design with adaptive properties</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Customizable with soft shadows and subtle gradients</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Available on NPM as 'neumorphiccardwc'</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">JavaScript</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">Web Components</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">CSS</span>
                <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">NPM</span>
              </div>
              <div class="mt-4 flex items-center">
                <a href="https://github.com/Rutujakirad/neumorphic-card-web-component" target="_blank" class="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
            </div>
          </div>
      <!-- Call to action -->
      <div class="text-center mt-16 backdrop-blur-md bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 shadow-lg">
        <h2 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Want to collaborate on a project?</h2>
        <p class="text-gray-300 mb-6 max-w-2xl mx-auto">I'm always looking for interesting projects and collaborations. If you have an idea or project you'd like to discuss, feel free to reach out!</p>
        <button
          @click="$router.push('/contact')"
          class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95 flex items-center mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get In Touch
        </button>
      </div>

</template>

<style scoped>
.project-card {
  transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
}
.project-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 12px 32px 0 rgba(59,130,246,0.15), 0 1.5px 4px 0 rgba(59,130,246,0.10);
  border-color: #3b82f6;
}

/* Add custom animations for cards */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Add hover effect for badges */
.project-card span.px-3:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

/* Adjust for mobile devices */
@media (max-width: 640px) {
  .project-card {
    margin-bottom: 1.5rem;
  }
  
  .container {
    padding-top: 5rem;
  }
}
</style>