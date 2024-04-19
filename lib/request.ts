export async function getApiResponse(sub_url: string) {
    try {

        const url = `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/day?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2I1OTY2MzBkYzBkODg0YjljMGM4OTVhZDgwZTExYiIsInN1YiI6IjU0MGNmYjU4YzNhMzY4Nzk5YzAwNGQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFpL67mkQ1SGEgRMync_ixHXEZ2bd0RE9H2O5ohj7zo'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}