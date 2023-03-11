function filtrarProyectos() {
    
    const selectFiltro = document.getElementById("filtro");
    const tecnologiaSeleccionada = selectFiltro.value;
  
    
    const cardsProyectos = document.querySelectorAll(".Parte2_contenedorCartas_cartas");
    cardsProyectos.forEach((cardProyecto) => {
      const tecnologiasProyecto = cardProyecto.dataset.tecnologias.split(",");
      if (tecnologiasProyecto.includes(tecnologiaSeleccionada)) {
        cardProyecto.style.display = "block"; 
      } else {
        cardProyecto.style.display = "none"; 
      }
    });
  }
  
  const selectFiltro = document.getElementById("filtro");
  selectFiltro.addEventListener("change", filtrarProyectos);