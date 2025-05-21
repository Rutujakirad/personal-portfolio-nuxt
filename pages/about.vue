<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';

let skillsChartInstance;

onMounted(() => {
  // Initialize skills radar chart
  const skillsCtx = document.getElementById('skillsChart');
  if (skillsCtx) {
    skillsChartInstance = new Chart(skillsCtx, {
      type: 'radar',
      data: {
        labels: ['Frontend', 'Backend', 'UI/UX', 'Testing', 'DevOps', 'Database'],
        datasets: [{
          label: 'Skills',
          data: [85, 75, 80, 65, 60, 70],
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          borderColor: 'rgba(139, 92, 246, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(139, 92, 246)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(139, 92, 246)'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            pointLabels: {
              color: 'rgba(255, 255, 255, 0.7)',
              font: {
                size: 12
              }
            },
            ticks: {
              backdropColor: 'transparent',
              color: 'rgba(255, 255, 255, 0.5)',
              z: 1,
              display: false
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
});

onBeforeUnmount(() => {
  if (skillsChartInstance) {
    skillsChartInstance.destroy();
  }
});
</script>

<template>
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
      </div>
    </div>
        
  <div class="min-h-screen bg-gray-900 text-white pb-16">
   
    <!-- Content container -->
    <div class="container max-w-6xl mx-auto px-4 pt-24 pb-8">
      <!-- Section title -->
      <div class="flex items-center space-x-4 mb-12">
        <div class="h-px bg-gradient-to-r from-purple-500 to-transparent flex-grow max-w-xs"></div>
        <h1 class="text-4xl md:text-5xl font-bold">About Me</h1>
        <div class="h-px bg-gradient-to-l from-purple-500 to-transparent flex-grow max-w-xs"></div>
      </div>

      <!-- About content -->
      <div class="grid md:grid-cols-12 gap-8">
        <!-- Bio & Career Column -->
        <div class="md:col-span-7 space-y-8">
          <!-- Bio Section -->
          <div class="backdrop-blur-md bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 shadow-lg transform transition-all duration-300 hover:shadow-purple-500/10">
            <h2 class="text-2xl font-bold mb-4 text-purple-300">Hello there!</h2>
            <p class="text-gray-300 mb-4">
              I'm Rutuja Kirad, a developer intern with a passion for building responsive, user-centered web applications.
              Currently pursuing my MSc in Computer Science, I'm focused on full-stack development with expertise
              in React.js, Node.js, MongoDB, and SQL.
            </p>
            <p class="text-gray-300">
              I love exploring UI design systems and aesthetics, and I'm obsessed with crafting polished user experiences that actually work.
              My approach combines technical precision with creative problem-solving to deliver solutions that exceed expectations.
            </p>
          </div>

          <!-- Experience Timeline -->
          <div class="backdrop-blur-md bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-purple-300">Experience</h2>
            
            <div class="space-y-6">
              <!-- ZasmLabs -->
              <div class="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-purple-500 before:to-blue-500">
                <div class="absolute left-0 top-2 w-4 h-4 rounded-full bg-purple-500 -translate-x-1.5"></div>
                <h3 class="text-xl font-bold text-white">ZasmLabs Pvt Ltd</h3>
                <p class="text-gray-400 text-sm mb-2">Dec 2024 – Present</p>
                <p class="text-gray-300 mb-4">Working as a Developer Intern on multiple projects:</p>
                
                <!-- Project 1 -->
                <div class="mb-4 bg-gray-800/50 rounded-lg p-4 border-l-2 border-purple-500">
                  <h4 class="font-medium text-lg text-white mb-2">ONTAS</h4>
                  <ul class="text-gray-300 space-y-1 list-disc pl-5">
                    <li>Tech: JavaScript, React.js, PostgreSQL, Git, Azure DevOps</li>
                    <li>Optimized UIs for 30% performance gain</li>
                    <li>Delivered features with 95% on-time rate</li>
                    <li>Used Agile, Jira, Git for collaboration</li>
                  </ul>
                </div>
                
                <!-- Project 2 -->
                <div class="bg-gray-800/50 rounded-lg p-4 border-l-2 border-blue-500">
                  <h4 class="font-medium text-lg text-white mb-2">IAWNS</h4>
                  <ul class="text-gray-300 space-y-1 list-disc pl-5">
                    <li>Manual testing, Jira, Project Documentation</li>
                    <li>Wrote 50+ test cases with 95% bug resolution</li>
                    <li>SRS/STP compliance & QA support</li>
                  </ul>
                </div>
              </div>
              
              <!-- InternPe -->
              <div class="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-500 before:to-transparent">
                <div class="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1.5"></div>
                <h3 class="text-xl font-bold text-white">InternPe</h3>
                <p class="text-gray-400 text-sm mb-2">Summer 2023</p>
                <div class="bg-gray-800/50 rounded-lg p-4 border-l-2 border-blue-400">
                  <ul class="text-gray-300 space-y-1 list-disc pl-5">
                    <li>Built React dashboards with mobile-first design</li>
                    <li>Integrated Excel workflows, reducing dev time by 25%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="backdrop-blur-md bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-purple-300">Education</h2>
            
            <div class="space-y-6">
              <!-- MSc -->
              <div class="bg-gray-800/50 rounded-lg p-4 border-l-2 border-indigo-500">
                <h3 class="text-xl font-bold text-white">MSc in Computer Science</h3>
                <p class="text-gray-400 text-sm mb-1">Nowrosjee Wadia College, 2023–2025</p>
                <p class="text-gray-300">CGPA: 8.05</p>
              </div>
              
              <!-- BSc -->
              <div class="bg-gray-800/50 rounded-lg p-4 border-l-2 border-indigo-400">
                <h3 class="text-xl font-bold text-white">BSc in Computer Science</h3>
                <p class="text-gray-400 text-sm mb-1">SPPU, 2019–2022</p>
                <p class="text-gray-300">CGPA: 8.4</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Skills Column -->
        <div class="md:col-span-5">
          <div class="sticky top-24 space-y-6">
            <!-- Skills Radar Chart -->
            <div class="backdrop-blur-md bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
              <h2 class="text-2xl font-bold mb-4 text-purple-300">Skills</h2>
              <div class="h-64 relative w-full">
                <canvas id="skillsChart" class="w-full h-full"></canvas>
              </div>
            </div>
            
            <!-- Skill Tags -->
            <div class="backdrop-blur-md bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
              <h2 class="text-2xl font-bold mb-4 text-purple-300">Tech Stack</h2>
              
              <div class="mb-4">
                <h3 class="text-sm uppercase text-gray-400 mb-2">Frontend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default">React.js</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default">Next.js</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default">AngularJS</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default">HTML</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default">CSS (Bootstrap)</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default">JavaScript</span>
                </div>
              </div>
              
              <div class="mb-4">
                <h3 class="text-sm uppercase text-gray-400 mb-2">Backend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default">Node.js</span>
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default">Express</span>
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default">MongoDB</span>
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default">PostgreSQL</span>
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default">Neo4j</span>
                </div>
              </div>
              
              <div class="mb-4">
                <h3 class="text-sm uppercase text-gray-400 mb-2">Tools & DevOps</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors cursor-default">Git</span>
                  <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors cursor-default">GitHub</span>
                  <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors cursor-default">Jira</span>
                  <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors cursor-default">Azure DevOps</span>
                  <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors cursor-default">Docker</span>
                </div>
              </div>
              
              <div>
                <h3 class="text-sm uppercase text-gray-400 mb-2">Design & Interests</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 hover:bg-pink-500/30 transition-colors cursor-default">UI/UX strategy</span>
                  <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 hover:bg-pink-500/30 transition-colors cursor-default">Dark mode systems</span>
                  <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 hover:bg-pink-500/30 transition-colors cursor-default">Component design</span>
                </div>
              </div>
            </div>
            
            <!-- Resume Link -->
            <div class="flex">
              <a href="/Rutuja_Kirad_Resume.pdf" download class="w-full px-5 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Full Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  background-color: #0f172a;
  color: #f1f5f9;
}
</style>