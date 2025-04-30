const projetos = [
    {
      titulo: "Landing Page com CI/CD",
      descricao: "Projeto DevOps com pipeline automatizado e infraestrutura como código.",
      link: "https://github.com/seuusuario/devops-landingpage"
    },
    {
      titulo: "Infraestrutura AWS com Terraform",
      descricao: "Provisionamento de recursos na AWS com IaC e boas práticas.",
      link: "https://github.com/seuusuario/aws-terraform-projeto"
    }
  ];
  
  const container = document.getElementById('project-list');
  
  projetos.forEach(proj => {
    const col = document.createElement('div');
    col.className = 'col-md-6 mb-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${proj.titulo}</h5>
          <p class="card-text">${proj.descricao}</p>
          <a href="${proj.link}" target="_blank" class="btn btn-dark">Ver no GitHub</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
  