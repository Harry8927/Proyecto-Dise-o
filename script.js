// Obtener elementos del DOM
const images = document.querySelectorAll(".interactiveImage"); // Selecciona todas las imágenes con la clase interactiveImage
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const popupImage = document.getElementById("popupImage");
const popupText = document.getElementById("popupText");

// Añadir evento de clic a cada imagen
images.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.src; // Obtiene la fuente (src) de la imagen
    const alt = image.alt; // Obtiene el texto alternativo (alt) de la imagen

    // Mostrar la imagen ampliada y el texto en el popup
    popupImage.src = src;
    popupText.textContent = alt;

    // Mostrar el cuadro emergente y el fondo oscuro
    popup.style.display = "block";
    overlay.style.display = "block";
  });
});

// Cerrar el cuadro emergente al hacer clic en el fondo oscuro
overlay.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});