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
    aBeer.setAttribute("href", `beer.html?beerId=${oneBeer.id}`);
    aBeer.innerText = oneBeer.name;


    div.appendChild(h2Beer);
    div.appendChild(pDescriptionBeer);
    div.appendChild(imgBeer);
    div.appendChild(aBeer);
    body.appendChild(div);
}