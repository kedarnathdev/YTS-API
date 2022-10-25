const fetch = (...args) => import ('node-fetch').then(({default: fetch}) => fetch(...args));



const getMovieDetails = async (req, res) => {
    const movie_id = req.params.id;
    const with_images = req.query.with_images;
    const with_cast = req.query.with_cast;
    params = [
        movie_id,
        with_images,
        with_cast
    ];
    paramso = [
        "movie_id",
        "with_images",
        "with_cast"
    ];
    var url = new URL('https://yts.mx/api/v2/movie_details.json');
    for (let i = 0; i < params.length; i++) {
        if (params[i] != undefined) {
            url.searchParams.append(paramso[i], params[i]);
        }
    }
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
}

module.exports = {
    getMovieDetails
}