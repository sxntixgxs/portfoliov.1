export function createProjectCard(project) {
    return `
        <div class="project-card card rounded-lg shadow-lg p-6"">
            <img src="${project.image}" alt="${project.title}" class="rounded-t-lg mb-4 object-cover h-64 w-full">
            <h3 class="text-xl font-bold mb-2 title-style">${project.title}</h3>
            <p class="desc mb-4">${project.description}</p>
            <div class="technologies flex flex-wrap gap-2 justify-center">
                ${project.technologies.map(tech => `<span class="tech-item-card p-3 rounded-lg shadow inline-flex items-center text-sm">${tech}</span>`).join('')}
            </div>
        </div>
    `;
}

