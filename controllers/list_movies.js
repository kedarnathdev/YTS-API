const fetch = (...args) => import ('node-fetch').then(({default: fetch}) => fetch(...args));


const listAllMovies = async (req, res) => {
    const order_by = req.query.order_by;
    const limit = req.query.limit;
    const page = req.query.page;
    const quality = req.query.quality;
    const minimum_rating = req.query.minimum_rating;
    const genre = req.query.genre;
    const sort_by = req.query.sort_by;
    const query_term = req.query.query_term;
    const with_rt_ratings = req.query.with_rt_ratings;
    params = [
        order_by,
        limit,
        page,
        quality,
        minimum_rating,
        genre,
        sort_by,
        query_term,
        with_rt_ratings
    ];
    paramso = [
        "order_by",
        "limit",
        "page",
        "quality",
        "minimum_rating",
        "genre",
        "sort_by",
        "query_term",
        "with_rt_ratings"
    ];
    var url = new URL('https://yts.mx/api/v2/list_movies.json');
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
    listAllMovies
}