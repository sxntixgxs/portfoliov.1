export function createProjectCard(project) {
    return `
        <div class="project-card border border-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <a href="${project.link}" target="_blank" class="block relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80">
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span class="text-white text-lg font-bold">${project.title}</span>
                </div>
            </a>
            <div class="p-4">
                <h3 class="text-xl font-bold">${project.title}</h3>
                <p>${project.description}</p>
                <div class="mt-2">
                    ${project.technologies.map(tech => `<span class="btn-icon p-2 rounded-lg shadow inline-flex items-center text-sm hover:bg-600 hover:text-white-700 focus:outline-none focus:ring-2 focus:ring-green-300 ">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}