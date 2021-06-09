const getAllBeers = () =>{

    fetch(`https://api.punkapi.com/v2/beers`)
        .then(resultAPI => resultAPI.json())
        .then(listBeer => {
            paintAllBeers(listBeer);
    });    
}