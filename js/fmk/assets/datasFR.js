var changeToFrench = function()
{
    if(french){
 names = ["Kimberley", "Chelsea", "Latisha", "Robin"];
 pets = [
    {
        "full":"Un animal qui a 3 pattes",
        "short":"3 Pattes"
    },{
        "full":"Une Tarentule",
        "short":"Tarentule"
    },{
        "full":"Un animal appelé Hannibal",
        "short":"Hannibal"
    },{
        "full":"Un animal qui sent le rat crevé",
        "short":"Pue"
    },{
        "full":"Un Tenya",
        "short":"Tenya"
    },{
        "full":"la maison de Robin",
        "short":"Pisse"
    },
];
 foods = [
    {
        "full":" des Burgers Végé",
        "short":"Vegan"
    },
    {
        "full":"des poulpes vivants",
        "short":"Poulpes"
    },
    {
        "full":"des rognons de veau",
        "short":"Rognons"
    },
    {
        "full":"des rognures d’ongles",
        "short":"Ongles"
    },{
        "full":"des pénis de dauphin",
        "short":"Dauphin"
    }
];
 shames = [
    {
        "full":"Canada",
        "short":"Canadien"
    },
    {
        "full":"Glee",
        "short":"Glee"
    },
    {
        "full":"Nickelback",
        "short":"Nickelback"
    },
    {
        "full":"BDSM",
        "short":"BDSM"
    },{
        "full":"un piercing bien placé",
        "short":"Piercing"
    },{
        "full":"un livre de gros rageux",
        "short":"Kampf"
    }
];

 loves = [
    {
        "full":"un concièrge",
        "short":"Concièrge"
    },
    {
        "full":"Susan Boyle",
        "short":"S.Boyle"
    },
    {
        "full":"Justin Bieber",
        "short":"J.Bieber"
    },
    {
        "full":"Michael Cera",
        "short":"M.Cera"
    },{
        "full":"la prof' d'Anglais",
        "short":"Ms Waters"
    }
];
 families = [
    {
        "full":"la prison",
        "short":"Prison"
    },
    {
        "full":"Quelqu'un qui bosse pour le Gouvernement",
        "short":"Gouvernement"
    },
    {
        "full":"un joueur de Hocket Pro",
        "short":"Hockey"
    },
    {
        "full":"de l'intolérence au Lactose",
        "short":"Lactose"
    },{
        "full":"Beaucoup trop de vin",
        "short":"Vin"
    },{
        "full":"Une voiture de Fucc Boi",
        "short":"Prius"
    }
];
 dialogs = [

    {
        "text": "La veille d’Halloween, Kim’, Chelsea, Rob’ et Latisha ",
        "perso": 0
    },{
        "text": "se réunissent pour passer la nuit et se raconter des histoires effrayantes... ",
        "perso": 0
    },


    {
        "text": "Hey regardez ça ! j’ai trouvé la planche Ouija de mon frère ! Ca vous dit de l’essayer ?",
        "perso": 1
    },
    {
        "text": "Je ne pense pas que ça soit une bonne idée …",
        "perso": 2,
    },
    {
        "text": "Allez ! On va bien se marrer !",
        "perso": 3,
    },
    {
        "text": "C’est vrai ! Il ne peut rien de passer de grave de toute façons !",
        "perso": 4,
    },
    {
        "text": "Ok ..",
        "perso": 2
    }
]
 questions = 
[

//pet
    {
        "text":"Qui de nous possède un animal de compagnie qui a 3 pattes ?",
        "short":"3 Pattes",
        "type":"pet",
    },{
        "text":"Qui de nous possède un animal de compagnie qui est une Tarentule ?",
        "short":"Tarentule",
        "type":"pet",
    },{
        "text":"Qui de nous possède un animal de compagnie qui s'appelle Hannibal ?",
        "short":"Hannibal",
        "type":"",
    },{
        "text":"Qui de nous possède un animal de compagnie qui Sent le rat crevé ?",
        "short":"Pue",
        "type":"pet",
    },{
        "text":"Qui de nous possède un animal de compagnie qui est un Tenya ?",
        "short":"Tenya",
        "type":"pet",
    },{
        "text":"Qui de nous possède un animal de compagnie qui fait ses besoin chez Robin ?",
        "short":"Pisse",
        "type":"pet",
    },
//shame
    {
        "text":"Qui de nous n’a jamais dit à personne qu’il/elle kiffe grave le BDSM?",
        "short":"BDSM",
        "type":"shame",
    },{
        "text":"Qui de nous n’a jamais dit à personne qu’il/elle a regardé toutes les saisons de Glee?",
        "short":"Glee",
        "type":"shame",
    },{
        "text":"Qui de nous n’a jamais dit à personne qu’il/elle possède tout les CDs de Nickelback ?",
        "short":"Nickelback",
        "type":"shame",
    },{
        "text":"Qui de nous n’a jamais dit à personne qu’il/elle a des ancêtres Canadiens?",
        "short":"Canadien",
        "type":"shame",
    },{
        "text":"Qui de nous n’a jamais dit à personne qu’il/elle a un piercing génital?",
        "short":"Piercing",
        "type":"shame",
    },{
        "text":"Qui de nous n’a jamais dit à personne qu’il/elle a lu Mein kampf?",
        "short":"Kampf",
        "type":"shame",
    },
    //love
    {
        "text":"Qui est secrètement amoureux/se du concièrge de l'université?",
        "short":"Concièrge",
        "type":"love"
    }, {
        "text":"Qui est secrètement amoureux/se de Susan Boyle ?",
        "short":"S.Boyle",
        "type":"love"
    }, {
        "text":"Qui est secrètement amoureux/se de Steeve McDoucheBag ?",
        "short":"Steeve",
        "type":"love"
    }, {
        "text":"Qui est secrètement amoureux/se de Justin Bieber?",
        "short":"J.Bieber",
        "type":"love"
    }, {
        "text":"Qui est secrètement amoureux/se de Michael Cera ?",
        "short":"M.Cera ",
        "type":"love"
    }, {
        "text":"Qui est secrètement amoureux/se de Mme Waters, la prof’ d’Anglais ?",
        "short":"Ms Waters",
        "type":"love"
    },
    //food
    
    {   
        "text":"Qui de nous a pour plat préféré les  Burgers Végé?",
        "short":"Vegan",
        "type":"food"
    },{   
        "text":"Qui de nous a pour plat préféré les  poulpes vivants?",
        "short":"Poulpes",
        "type":"food"
    },{   
        "text":"Qui de nous a pour plat préféré les rognons de veau?",
        "short":"Rognons",
        "type":"food"
    },{   
        "text":"Qui de nous a pour plat préféré les rognures d’ongles?",
        "short":"Ongles",
        "type":"food"
    },{   
        "text":"Qui de nous a pour plat préféré les  pénis de dauphin ?",
        "short":"Dauphin",
        "type":"food"
    },
    
    //family
    
];
pass = "Robin: Il ne se passe pas grand chose..."; 
success ="Latisha: Wow!"; 
defeat = "Chelsea: Hum..."; 
basicHelper = "Clique n'importe où pour continuer"; 
questionHelper = "Clique sur un personnage pour le choisir";
indice = "Wow, J'ai eu une vision de ";
indice2 = " et ";
revelation = "Oh mais c'est ";
    }}