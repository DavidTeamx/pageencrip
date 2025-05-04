document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todas las secciones de autos
    const autos = document.querySelectorAll(".auto");
    
    autos.forEach(auto => {
        // Crear botón para mostrar/ocultar detalles
        const btnToggle = document.createElement("button");
        btnToggle.textContent = "Mostrar/Ocultar Detalles";
        btnToggle.style.marginTop = "10px";
        
        // Obtener la descripción del auto
        const detalles = auto.querySelector("p:last-of-type");
        
        // Ocultar los detalles por defecto
        detalles.style.display = "none";

        // Agregar evento al botón
        btnToggle.addEventListener("click", () => {
            detalles.style.display = detalles.style.display === "none" ? "block" : "none";
        });

        // Añadir botón a la sección del auto
        auto.appendChild(btnToggle);
    });
});
