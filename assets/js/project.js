import { Project } from '../../model/project_model.js';

// Simular el objeto "window" y "document" en un entorno de navegador
function getWindowLocation() {
  return new URL(window.location.href);
}

function getElementById(id) {
  return document.getElementById(id);
}

function main() {
  const projectId = getWindowLocation().searchParams.get('id');
  const project = Project.getProject(projectId || "");
  const container = getElementById('markdown-input');
  const loading = getElementById('loading');
  let textContent = "";

  if (!project) {
    if (container) container.textContent = "## Proyecto no encontrado";
    return;
  }

  textContent += `## ${project.title}\n`;
  textContent += `### Descripción General\n${project.description}\n`;

  if (project.operatingSystems) {
    textContent += `### Sistemas operativos\n`;
    project.operatingSystems.forEach(os => {
      textContent += `- ${os}\n`;
    });
  }

  textContent += `### Tecnologías Utilizadas\n`;
  project.technologiesUsed.forEach(techno => {
    textContent += `- ${techno}\n`;
  });

  textContent += `### Funcionalidades Principales\n`;
  project.mainFeatures.forEach(feature => {
    textContent += `- ${feature}\n`;
  });

  textContent += `### Capturas de Pantalla y Videos\n`;
  project.imagesUrls.forEach(image => {
    textContent += `![Screenshot](${image})\n`;
  });

  if (loading) loading.remove();
  if (container) container.textContent = textContent;
}

// Llamar a la función principal al cargar la página
window.onload = main;
