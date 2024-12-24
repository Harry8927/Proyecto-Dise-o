function checkAnswer(button, isCorrect) {
  // Desactivar todos los botones de la pregunta actual
  const buttons = button.parentNode.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  // Resaltar la respuesta seleccionada
  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }
}