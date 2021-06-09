window.onload = function (){
    const parametros = new URLSearchParams(window.location.search);
    for(const param of parametros){
        console.log(param[0]);    
        getOneBeer(param[0]);
    }  

}
const getOneBeer = (idBeer)=>{
    console.log(idBeer);
    fetch(`https://api.punkapi.com/v2/beers/${idBeer+1}`)
        .then(resultAPI => resultAPI.json())
        .then(listBeer => {
        paintAllBeers(listBeer);
    });   

}

const paintAllBeers = (listBeer)=>{
    for (let index in listBeer){
        paintOneBeer(listBeer[index], index);
    }
}

const paintOneBeer = (oneBeer, index) => {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    const h2Beer = document.createElement("h2");
    const pDescriptionBeer = document.createElement("p");
    const imgBeer = document.createElement("img");
    const aBeer = document.createElement("a");
    
    h2Beer.innerHTML = oneBeer.name;
    pDescriptionBeer.innerHTML = oneBeer.description;
    imgBeer.setAttribute("src", oneBeer.image_url);
    aBeer.setAttribute("href", `beer.html?${index}`);
    aBeer.innerText = oneBeer.name;

           
    div.appendChild(h2Beer);
    div.appendChild(pDescriptionBeer);
    div.appendChild(imgBeer);
    div.appendChild(aBeer);
    body.appendChild(div);
}

const randomCoordinates = () => {
    const arrCoordinates = [[51.505, -0.09], [40.41, -3.70], [40.45, -3.689],[40.41,-36932]];
    const i = Math.floor(Math.random() * arrCoordinates.length); 
    return arrCoordinates[i];
}




const API_KEY = "pk.eyJ1IjoicHJvdGVybyIsImEiOiJja3BwcHNkZjIybXN6MndvOHZ2eXJmejl2In0.6UX5lzL6aiWCKMIbgU_BAg";

const mymap = L.map('mapId').setView(randomCoordinates(), 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap);
