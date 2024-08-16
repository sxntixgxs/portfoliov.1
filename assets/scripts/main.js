import { createProjectCard } from "./createProjectCard.js";

document.addEventListener('DOMContentLoaded',function(){
    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');
            container.innerHTML = projects.map(createProjectCard).join('');
        })
})