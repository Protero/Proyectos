const getAllBeers = () =>{

    fetch(`https://api.punkapi.com/v2/beers`)
        .then(resultAPI => resultAPI.json())
        .then(listBeer => {
            paintAllBeers(listBeer);
    });    
}

const paintAllBeers = (listBeer)=>{
    const i = Math.floor(Math.random() * listBeer.length); 
    console.log("i = ", i);
    for (let index in listBeer) if (i==index) paintOneBeer(listBeer[index], index);
}

const paintOneBeer = (oneBeer, index) => {
    console.log("Entro en paintOneBeer");
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

getAllBeers ();