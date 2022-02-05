import axios from 'axios'
import * as Realm from "realm-web";

function Card({ movie }) {
    

    const buttonCall = async (event) => {
        event.preventDefault();
        const data = {
            media_type: event.target.value,
            movieID: event.target.id,
            userID: "9"
        }
        const app = await new Realm.App({ id: "crud-panel-backend-ytuar" });
        const credentials = await Realm.Credentials.anonymous();

        const user = await app.logIn(credentials);
        const mongodb = await app.currentUser.mongoClient('mongodb-atlas')
        const tasksCollection = await mongodb.db('crud-panel').collection('dummy-user')
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