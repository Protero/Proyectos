console.log("> cargado main.js");

let search={
    Contacto: "contacto.html",
    Biografia: "biografia.html",
    Buscador: "result.html"
}

let tab1 = document.getElementById("m1");
let tab2 = document.getElementById("m2");
let tab3 = document.getElementById("m3");
tab1.addEventListener("focus",(e)=>{
    console.log("foco", tab1);
    document.addEventListener("keydown", (e)=>{
        console.log(e);
        tab2.focus();
        tab1.setAttribute("tabIndex", "-1");
    })
},true);
tab2.addEventListener("focus",(e)=>{
    console.log("foco", tab2);
},true);
tab3.addEventListener("focus",(e)=>{
    console.log("foco", tab3);
},true);


window.onload = function (){
    
    console.log(window.location.search);
    let parametros = new URLSearchParams(window.location.search);
    let result = document.getElementById("result"); 

    for (let param of parametros){
        if (search[param[1]]) result.innerHTML += "<h2> Resultados de: " + param[1] + "</h2>" + "<ul><li><a href='"+ search[param[1]] +"'/>"+ param[1] +"</a></li></ul></p>";
        else result.innerHTML += "<h2> Término de búsqueda: " + param[1] + "</h2> <p>No hay resultados.</p>";
    }

   
}