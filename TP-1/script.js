
function add(b,c){
    return b+c;
}

function less(d,e){
    return d-e;
}

function cross(f,g){
    return f*g;
}

function divide(h,i){
    return h/i;
}



n = 0;

while (n==0){
    let a = prompt("Faites un choix entre addition, soustraction, multiplication ou division");
if (a){
    a = a.toLowerCase();
    }
    switch(a) {
        case "addition":
            b = prompt("Entrez un premier chiffre");
            b = parseFloat (b);
            c = prompt("Entrez un deuxième chiffre");
            c = parseFloat (c);
            alert (add(b,c));
            console.log(add(b,c));
        break;

        case "soustraction":
            d = prompt("Entrez un premier chiffre");
            d = parseFloat (d);
            e = prompt("Entrez un deuxième chiffre");
            e = parseFloat (e);
            alert (less(d,e));
            console.log(less(d,e));
        break;
    
        case "multiplication":
            f = prompt("Entrez un premier chiffre");
            f = parseFloat (f);
            g = prompt("Entrez un deuxième chiffre");
            g = parseFloat (g);
            alert (cross(f,g));
            console.log(cross(f,g));
        break;

        case "division":
            h = prompt("Entrez un premier chiffre");
            h = parseFloat (h);
            i = prompt("Entrez un deuxième chiffre");
            i = parseFloat (i);
            alert (divide(h,i));
            console.log(divide(h,i));
        break;
    default : a = prompt("Faites un choix entre addition, soustraction, multiplication ou division");
    break;
    }

    j = prompt("Voulez vous recommencer ? Oui/Non");
    if (j){
        j = j.toLowerCase();
    }
    switch(j) {
        case "oui":
            n=0;
            console.clear();
        break;
        
        case "non":
            n=1;
        break;

    default : j = prompt("Voulez-vous recommencer ? Oui/Non");
    break;
    }
};
