var demande = prompt("Veuillez deviner un chiffre entre 10 et 20.");
function getRandomIntInclusive(min, max) {  
    min = Math.ceil(10);
    max = Math.floor(21);
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(getRandomIntInclusive(10, 21));
if (demande < getRandomIntInclusive(10, 21)) {
    
    prompt("Votre chiffre est trop petit!");
} else if (demande > getRandomIntInclusive(10, 21)) {
    promt("Votre chiffre est trop grand!");
} else if (demande === getRandomIntInclusive(10, 21)) {
    
    prompt("Bravo vous avez gagné!");
}

/*if (demande <= 9) {
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
 }*/




