import { createProjectCard } from "./createProjectCard.js";

document.addEventListener('DOMContentLoaded', function() {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');
            container.innerHTML = projects.map(createProjectCard).join('');
        });

    const form = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const modalCloseButton = document.getElementById('modal-close');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío estándar del formulario

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log("enviado enviado")
                modal.classList.remove('hidden'); // Mostrar el modal
                form.reset(); // Opcional: Limpiar el formulario después del envío
            } else {
                console.log("wtfff")
                // Manejo de errores aquí si es necesario
            }
        })
        .catch(error => {
            // Manejo de errores aquí si es necesario
        });
    });

    // Cerrar el modal
    modalCloseButton.addEventListener('click', function() {
        modal.classList.add('hidden'); // Ocultar el modal
    });
});