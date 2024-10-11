import { Project } from "../../model/project_model.js";

document.addEventListener('DOMContentLoaded', function() {
    const containerProjects = document.getElementById('container-projects');
  
    const projects = Project.getAll(); // Asegúrate de que 'Project.getAll()' devuelva la lista de proyectos
  
    projects.forEach(function(project) {
      const detailsContainer = document.createElement('div');
      detailsContainer.setAttribute('class', 'details-container color-container');
  
      const div2 = document.createElement('div');
      div2.setAttribute('class', 'article-container');
  
      const img = document.createElement('img');
      img.setAttribute('class', 'project-img');
      img.alt = project.title;
      img.src = project.imagesUrls[0];
  
      const title = document.createElement('h2');
      title.setAttribute('class', 'experience-sub-title project-title');
      title.textContent = project.title;
  
      const containerBtn = document.createElement('div');
      containerBtn.setAttribute('class', 'btn-container');
  
      const btn = document.createElement('button');
      btn.setAttribute('class', 'btn btn-color-2 project-btn');
      btn.textContent = "Ver detalles";
  
      btn.addEventListener('click', function() {
        window.location.href = `/project/?id=${project.id}`;
      });
  
      div2.appendChild(img);
      detailsContainer.appendChild(div2);
      detailsContainer.appendChild(title);
  
      containerBtn.appendChild(btn);
      detailsContainer.appendChild(containerBtn);
  
      if (containerProjects) {
        containerProjects.appendChild(detailsContainer);
      }
    });
  });
  