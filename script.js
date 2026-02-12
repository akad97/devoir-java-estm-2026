const quizData = [

/* ===== PARTIE VRAI / FAUX ===== */

{question:"1) En Java, il est possible d'écrire des méthodes en dehors de toute classe.",options:["OUI","NON"],correct:1},

{question:"2) Une classe contient des attributs et des méthodes.",options:["OUI","NON"],correct:0},

{question:"3) Un objet appartient toujours à une classe.",options:["OUI","NON"],correct:0},

{question:"4) Les données sont encapsulées dans une classe.",options:["OUI","NON"],correct:0},

{question:"5) Pour exécuter un programme Java, il faut obligatoirement une classe nommée Main.",options:["OUI","NON"],correct:1},

{question:"6) Un attribut private est accessible depuis une autre classe du même package.",options:["OUI","NON"],correct:1},

{question:"7) Toutes les classes héritent de Object.",options:["OUI","NON"],correct:0},

/* ===== CHOIX UNIQUE ===== */

{question:"8) Différence entre long et double ?",options:["long = 4 octets","double n'existe pas","long = entier, double = flottant","long = 2 octets"],correct:2},

{question:"9) Switch sert à :",options:["Permuter tableau","Permuter variables","Tester suite de conditions","Permuter chaînes"],correct:2},

{question:"10) (int)Math.PI renvoie :",options:["0.1415","3","Erreur","3.1415"],correct:1},

{question:"11) On accède aux variables d’une classe avec :",options:["this","->",".","new"],correct:2},

{question:"12) Java est caractérisé par :",options:["Portabilité","Vitesse","Exécution immédiate","Écriture concise"],correct:0},

{question:"13) Extension fichier source Java :",options:[".source",".jvc",".java",".j"],correct:2},

{question:"14) Mot clé pour empêcher l’instanciation :",options:["abstract","protected","private","global"],correct:0},

{question:"15) Commentaire sur une ligne :",options:["//","\\\\","##","/*"],correct:0},

{question:"16) Signature correcte du main :",options:["public void main()","public static void main()","public static void main(String[] args)"],correct:2},

{question:"17) JRE signifie :",options:["Java Runtime Engine","Java Real Time Execution","Java Runtime Environment","Java Routine Emulator"],correct:2},

{question:"18) Afficher Hello World :",options:["System.console.print()","System.out.print()","System.console.display()","System.out.display()"],correct:1},

{question:"19) Société créatrice de Java :",options:["Microsoft","Sun Microsystems","IBM","Apple"],correct:1},

{question:"20) Opérateur OU logique :",options:["OR","XOR","^","||"],correct:3},

{question:"21) Environnement populaire Java :",options:["JSD","Eclipse","Visual Studio","JRE"],correct:1},

{question:"22) -- est opérateur de :",options:["Commentaire","Soustraction","Décrémentation","Négation"],correct:2},

{question:"23) String en Java est :",options:["Classe","Objet","Variable","Tableau char"],correct:0},

{question:"24) Méthode pour obtenir caractère index :",options:["charAt()","Charat()","charat()","char()"],correct:0},

/* ===== CONCEPTS POO ===== */

{question:"25) Convertir objets réels en classe :",options:["Polymorphisme","Encapsulation","Abstraction","Héritage"],correct:2},

{question:"26) Combiner méthodes et attributs :",options:["Polymorphisme","Encapsulation","Abstraction","Héritage"],correct:1},

{question:"27) Destruction dépendante classe mère/fille :",options:["Agrégation","Composition","Encapsulation","Association"],correct:1},

{question:"28) Fonction de l’interpréteur Java :",options:["Compilateur JIT","Intermédiaire JVM","Convertit bytecode en machine","Lit et exécute code"],correct:2},

/* ===== SUPPLÉMENT POUR ATTEINDRE 40 ===== */

{question:"29) Java est un langage orienté objet.",options:["OUI","NON"],correct:0},

{question:"30) Java utilise des pointeurs comme C.",options:["OUI","NON"],correct:1},

{question:"31) println() est un mot clé Java.",options:["OUI","NON"],correct:1},

{question:"32) Class est un mot clé Java.",options:["OUI","NON"],correct:1},

{question:"33) Une interface peut contenir des méthodes abstraites.",options:["OUI","NON"],correct:0},

{question:"34) Java est dépendant de la création de classe.",options:["OUI","NON"],correct:0},

{question:"35) private est un modificateur d’accès.",options:["OUI","NON"],correct:0},

{question:"36) public est un modificateur d’accès.",options:["OUI","NON"],correct:0},

{question:"37) System.out.println() affiche dans la console.",options:["OUI","NON"],correct:0},

{question:"38) final rend une variable constante.",options:["OUI","NON"],correct:0},

{question:"39) On peut importer deux fois la même classe sans erreur.",options:["OUI","NON"],correct:0},

{question:"40) Java est portable grâce à la JVM.",options:["OUI","NON"],correct:0}

];

/* ===== AFFICHAGE ===== */

const quizContainer = document.getElementById("quiz");

quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<h3>${q.question}</h3>`;

    q.options.forEach((option, i) => {
        div.innerHTML += `
        <label>
            <input type="radio" name="question${index}" value="${i}">
            ${option}
        </label>
        `;
    });

    quizContainer.appendChild(div);
});

function submitQuiz() {

    let score = 0;

    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score += 0.5;
        }
    });

    let mention = "";

    if (score >= 18) mention = "🏆 Excellent";
    else if (score >= 16) mention = "👏 Très Bien";
    else if (score >= 14) mention = "👍 Bien";
    else if (score >= 12) mention = "👍 Assez Bien";
    else if (score >= 10) mention = "✔️ Passable";
    else mention = "❌ Insuffisant";

    document.querySelector(".container").innerHTML = `
        <h1>Résultat Final</h1>
        <div id="result">
            Note : ${score.toFixed(2)} / 20 <br><br>
            Mention : ${mention}
        </div>
    `;
}
