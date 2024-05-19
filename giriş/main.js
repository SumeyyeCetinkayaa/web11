fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "821c880129msh4bdb6f5b20adacap1f8261jsnb228bb3724f8"
    }
})

    .then(response => response.json())
    .then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li> `
            document.querySelector('.movies').innerHTML += movie;
        })
    })
   
    .catch(err => {
        console.error(err);
    });