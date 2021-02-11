document.querySelector("form").addEventListener("submit", () => {
    // avant d'envoyer les données au serveur, on peut faire une étape de validation

    // on n'envoie pas vraiment les données pour l'exercice
    document.querySelector("main").innerHTML = "Vous êtes connecté :)";
});
//on selectione la chackbox et le mdp 
let checkBox = document.getElementById("toggle-password-visibility");
let password = document.getElementById("password");

//on choisis de cha,ger l'attribut du mdp selon si l'on coche la chekcbox ou non 
//on peut remplacer "change" par "check" ou "input"
checkBox.addEventListener("change", function() {
    if (this.checked) {
        password.setAttribute("type", "text")
    } else {
        password.setAttribute("type", "password")
    }
});

const changeColor = document.getElementById("change-color");

function colorChange() {
    document.body.style.backgroundColor = changeColor.value;
}
// possibilité d'utiliser input à la place de change, c'est plus pratique 
changeColor.addEventListener("input", colorChange);