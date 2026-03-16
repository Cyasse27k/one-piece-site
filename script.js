function valider() {
    var u = document.getElementById("user").value;
    var p = document.getElementById("pass").value;

    if (u === "Deadmugiwara" && p === "Namichan09@") {
        alert("Accès autorisé !");
        window.location.href = "calculatrice.html"; 
    } else {
        document.getElementById("erreur").style.display = "block";
    }
}