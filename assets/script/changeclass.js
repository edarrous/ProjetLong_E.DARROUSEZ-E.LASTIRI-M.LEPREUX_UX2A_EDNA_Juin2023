// Sélectionnez tous les éléments ayant un ID commençant par "button-heart"
var buttonsLike = document.querySelectorAll('[id^="button-heart"]');

// Parcourez tous les éléments sélectionnés et ajoutez l'écouteur d'événements
buttonsLike.forEach(function(button) {
  button.addEventListener('click', function() {
    button.classList.toggle("icon--heart-active");
    button.classList.toggle("icon--heart");
  });
});