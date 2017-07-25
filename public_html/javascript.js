var demande = prompt("Veuillez deviner un chiffre entre 10 et 20.");
if (demande <= 9) {
    alert("Veuillez entrer un chiffre entre 10 et 20.");
    prompt("Veuillez choisir un chiffre entre 10 et 20.");
}
if (demande > 16) {
    alert("Votre chiffre est inférieur à la bonne réponse.");
    prompt("Veuillez choisir un chiffre entre 10 et 20.");
}
if (demande < 16) {
    alert("Votre chiffre est supérieur à la bonne réponse.");
    prompt("Veuillez choisir un chiffre entre 10 et 20.");
}
if (demande === 16) {
    alert("Bravo vous avez gagné!");
}




