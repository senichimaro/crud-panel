import CompHandler from "./CompHandler"
import Card from "./Card"

function CardsDeck({ movies }) {
    return (
        <div className="d-flex flex-wrap justify-content-center my-5">
            <CompHandler items={movies} resourceName="movie" compItem={Card} />
        </div>
    )
}
export default CardsDeck