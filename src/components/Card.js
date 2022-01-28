
function Card({ movie }) {
    console.log("movie", movie)
    return (
        <div className="card m-1" style={{width: "18rem"}}>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{`${movie.overview.substring(0,65)}...`}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default Card