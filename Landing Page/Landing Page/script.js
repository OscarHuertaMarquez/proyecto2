// Función para alternar la visibilidad del submenú al hacer clic en la opción
function toggleDropdown(dropdown) {
  const content = dropdown.querySelector(".dropdown-content");
  const isOpen = content.style.display === "block";

  // Oculta todos los menús desplegables
  const allDropdowns = document.querySelectorAll(".dropdown-content");
  allDropdowns.forEach((d) => {
    d.style.display = "none";
  });

  // Muestra u oculta el menú desplegable actual
  if (!isOpen) {
    content.style.display = "block";
  }
}

// Agregar event listener para cerrar menús al hacer clic en cualquier parte de la página
document.addEventListener("click", (e) => {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const content = dropdown.querySelector(".dropdown-content");
    if (!dropdown.contains(e.target)) {
      content.style.display = "none";
    }
  });
});

// Función para abrir o cerrar el menú desplegable al hacer clic en el elemento padre
function toggleDropdown(dropdown) {
  dropdown.classList.toggle("active");

  // Obtener la flecha asociada
  const arrow = dropdown.querySelector(".arrow");

  // Obtener el menú desplegable asociado
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  // Cerrar otros menús desplegables
  const allDropdowns = document.querySelectorAll(".dropdown");
  allDropdowns.forEach((d) => {
    if (d !== dropdown) {
      d.classList.remove("active");

      // Ocultar los menús desplegables asociados
      const otherDropdownContent = d.querySelector(".dropdown-content");
      if (otherDropdownContent) {
        otherDropdownContent.style.display = "none";
      }

      // Restaurar la rotación de la flecha a su posición original
      const otherArrow = d.querySelector(".arrow");
      if (otherArrow) {
        otherArrow.classList.remove("rotate");
      }
    }
  });

  // Mostrar u ocultar el menú desplegable asociado
  if (dropdown.classList.contains("active")) {
    dropdownContent.style.display = "block";

    // Girar la flecha 180 grados al abrir el menú
    arrow.classList.add("rotate");
  } else {
    dropdownContent.style.display = "none";

    // Restaurar la flecha a su posición original al cerrar el menú
    arrow.classList.remove("rotate");
  }
}

// Función para abrir o cerrar el menú desplegable al hacer clic en el elemento padre
function toggleDropdown(dropdown) {
  dropdown.classList.toggle("active");

  // Obtener la flecha asociada
  const arrow = dropdown.querySelector(".arrow");

  // Obtener el menú desplegable asociado
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  // Cerrar otros menús desplegables
  const allDropdowns = document.querySelectorAll(".dropdown");
  allDropdowns.forEach((d) => {
    if (d !== dropdown) {
      d.classList.remove("active");

      // Ocultar los menús desplegables asociados
      const otherDropdownContent = d.querySelector(".dropdown-content");
      if (otherDropdownContent) {
        otherDropdownContent.style.display = "none";
      }

      // Restaurar la rotación de la flecha a su posición original
      const otherArrow = d.querySelector(".arrow");
      if (otherArrow) {
        otherArrow.classList.remove("rotate");
      }
    }
  });

  // Mostrar u ocultar el menú desplegable asociado
  if (dropdown.classList.contains("active")) {
    dropdownContent.style.display = "block";

    // Girar la flecha 180 grados al abrir el menú
    arrow.classList.add("rotate");
  } else {
    dropdownContent.style.display = "none";

    // Restaurar la flecha a su posición original al cerrar el menú
    arrow.classList.remove("rotate");
  }
}

// Manejador de eventos para cerrar los menús desplegables al hacer clic fuera de ellos
document.addEventListener("click", function (event) {
  const allDropdowns = document.querySelectorAll(".dropdown");
  const clickedInsideDropdown = Array.from(allDropdowns).some((dropdown) =>
    dropdown.contains(event.target)
  );

  if (!clickedInsideDropdown) {
    allDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      const arrow = dropdown.querySelector(".arrow");
      if (arrow) {
        arrow.classList.remove("rotate");
      }
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      if (dropdownContent) {
        dropdownContent.style.display = "none";
      }
    });
  }
});
