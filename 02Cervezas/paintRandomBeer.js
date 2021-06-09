const paintAllBeers = (listBeer) => {
    const i = Math.floor(Math.random() * listBeer.length);
    console.log("i = ", i);
    for (let index in listBeer)
        if (i == index) paintOneBeer(listBeer[index], index);
}

getAllBeers();