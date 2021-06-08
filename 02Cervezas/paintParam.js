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

