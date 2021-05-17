
let search={
    Contacto: "contacto.html",
    Biografia: "biografia.html"
}



window.onload = function (){
  
    console.log(window.location.search);
    let parametros = new URLSearchParams(window.location.search);
    let result = document.getElementById("result"); 

    for (let param of parametros){
        if (search[param[1]]) result.innerHTML += "<h2> Resultados de: " + param[1] + "</h2>" + "<ul><li><a href='"+ search[param[1]] +"'/>"+ param[1] +"</a></li></ul></p>";
        else result.innerHTML += "<h2> Término de búsqueda: " + param[1] + "</h2> <p>No hay resultados.</p>";
    }

   
}