import { useAuth0 } from '@auth0/auth0-react'
import { dbconn } from '../services/services'
import { useSelector } from 'react-redux'
import { getCurrentUserID } from '../redux/reducers'

function Card({ movie }) {
    const { isAuthenticated } = useAuth0();
    const userID = useSelector( getCurrentUserID )
    
    const buttonCall = async (event) => {
        event.preventDefault();
        const data = {
            media_type: event.target.value,
            movieID: event.target.id,
            userID: userID
        }
        const tasksCollection = await dbconn()
        await tasksCollection.insertOne(data)
    }

    return (
        <div className="card m-1" style={{ width: "18rem" }}>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{`${movie.overview.substring(0, 65)}...`}</p>
                {
                    isAuthenticated
                    ? <button onClick={buttonCall} id={movie.id} value={movie.media_type} className="btn btn-primary">Save</button>
                    : null
                }
            </div>
        </div>
    )
}
export default Card