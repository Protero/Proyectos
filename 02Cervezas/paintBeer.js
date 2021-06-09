const paintAllBeers = (listBeer) => {
    for (let index in listBeer) {
        paintOneBeer(listBeer[index], index);
    }
}



getAllBeers();