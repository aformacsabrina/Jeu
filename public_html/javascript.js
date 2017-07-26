function getRandomIntInclusive(min, max) {
    min = Math.ceil(10);
    max = Math.floor(20);
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}
var compte = 0;
function jouer() {
    do {
        var demande = prompt("Veuillez deviner un chiffre entre 10 et 20.");

        var number = getRandomIntInclusive(10, 20);
        alert(number);
        var cpt = 1;
        do {
            if (demande < number) {
                demande = prompt("Votre chiffre est trop petit!");
                cpt = cpt + 1;
            } else if (demande > number) {
                demande = prompt("Votre chiffre est trop grand!");
                cpt = cpt + 1;
            }
        } while (demande != number)
        {
            if (demande == number) {
                alert("Bravo vous avez gagné! " + cpt + " tentatives");

            }
        }

        compte = compte + 1;
        var dde = prompt("Vous avez fait " + compte + " partie(s). On refait une partie? oui ou non");
    } while (dde == "oui")
        
    {
        if (dde == "non") {
            alert("Dommage");
        }
    }
}






