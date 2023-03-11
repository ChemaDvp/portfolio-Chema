let btNormal = document.querySelector("#botonNormal");
let btOscuro = document.querySelector("#modOscuro");
let btGrises = document.querySelector("#grises");

btNormal.addEventListener("click", function(){
    document.documentElement.style.setProperty("--color1", "#121b26");
    document.documentElement.style.setProperty("--color2", "#123e4c");
    document.documentElement.style.setProperty("--color3", "#12697e");
    document.documentElement.style.setProperty("--color4", "#1aa3b8");
    document.documentElement.style.setProperty("--color5", "#20dbd8");
})

btGrises.addEventListener("click", function(){
    document.documentElement.style.setProperty("--color1", "#2d3034");
    document.documentElement.style.setProperty("--color2", "#454c4c");
    document.documentElement.style.setProperty("--color3", "#646d70");
    document.documentElement.style.setProperty("--color4", "#91a0a2");
    document.documentElement.style.setProperty("--color5", "#cae4e0");
})

btOscuro.addEventListener("click", function(){
    document.documentElement.style.setProperty("--color1", "#fafafa");
    document.documentElement.style.setProperty("--color2", "#253047");
    document.documentElement.style.setProperty("--color3", "#acb0c5");
    document.documentElement.style.setProperty("--color4", "#606074");
    document.documentElement.style.setProperty("--color5", "#121113");
})


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