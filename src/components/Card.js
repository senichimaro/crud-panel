import axios from 'axios'
import * as Realm from "realm-web";

function Card({ movie }) {
    const app = new Realm.App("crud-panel-backend-ytuar")
    const mongodb = await app.currentUser.mongoClient('mongodb-atlas')
    const tasksCollection = mongodb.db('crud-panel').collection('dummy-user')

    const buttonCall = async (event) => {
        event.preventDefault();
        const data = {
            media_type: event.target.value,
            movieID: event.target.id,
            userID: "9"
        }
        const insertResult = await tasksCollection.insertOne(data)
        if (insertResult) {
            const getItems = await tasksCollection.find({})
            console.log("getItems", getItems)
        }
    }

    return (
        <div className="card m-1" style={{ width: "18rem" }}>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{`${movie.overview.substring(0, 65)}...`}</p>
                <button onClick={buttonCall} id={movie.id} value={movie.media_type} className="btn btn-primary">Save</button>
            </div>
        </div>
    )
}
export default Card