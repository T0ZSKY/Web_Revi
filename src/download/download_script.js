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
  