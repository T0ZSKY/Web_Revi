function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }


  document.addEventListener("DOMContentLoaded", function() {
    // Affiche l'animation de chargement
    document.getElementById("loader-wrapper").style.display = "flex";
  
    // Cache le rond de chargement une fois que la page est entièrement chargée
    window.addEventListener("load", function() {
      document.getElementById("loader-wrapper").style.display = "none";
    });
  });
  
  function envoyerEmail() {
    // Adresse email
    var email = "tomlimon1508@gmail.com";

    // Sujet du mail
    var sujet = "Revi aide";

    // Corps du message prérempli
    var corpsMessage = "Bonjour, \n\nJe vous contacte pour obtenir de l'aide concernant ... \n\nCordialement,\n\nVotre nom";

    // Générer le lien pour envoyer l'email
    var lien = "mailto:" + email + "?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corpsMessage);

    // Ouvrir l'application de messagerie avec le message prérempli
    window.location.href = lien;
}