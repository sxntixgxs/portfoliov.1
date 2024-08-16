export function createProjectCard(project){
    return `
        <div class="project-card bg-white rounded-lg shadow-lg p-6">
            <img src="${project.image}" alt="${project.title}" class="rounded-t-lg mb-4">
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p class="text-gray-700 mb-4">${project.description}</p>
            <div class="technologies flex flex-wrap gap-2">
                ${project.technologies.map(tech=>`<span class="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">${tech}</span>`).join('')}
            </div>
        </div>
    `;
}