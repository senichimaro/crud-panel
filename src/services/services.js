import axios from 'axios'
import * as Realm from "realm-web";
import { useDispatch } from 'react-redux'
import { setCurrentUserID } from '../redux/reducers'

export const buildMoviesArr = async (database) => {
    console.log("database", database)
    let movies = []
    database.forEach(async (item, index) => {
        console.log("item", item)
        // const response = await axios(`https://api.themoviedb.org/3/movie/${item.movieID}${process.env.REACT_APP_TMDB}&language=en-US`)
        // movies.push(response.data)

    })
    return movies
}

export const useUserID = async ( user ) => {
    const dispatch = useDispatch()
    let userID = false
    if( user ) userID = await regexUserID(user.sub)
    else userID = await regexUserID("000|000")
    dispatch(setCurrentUserID(userID))
    return userID
}

export const regexUserID = (idString) => {
    return idString.split("|")[1]
}

export const dbconn = async () => {
    const app = await new Realm.App({ id: process.env.REACT_APP_MONGO_REALM_ID });
    const credentials = await Realm.Credentials.anonymous();

    const user = await app.logIn(credentials);
    const mongodb = await app.currentUser.mongoClient(process.env.REACT_APP_MONGO_CLIENT)
    const tasksCollection = await mongodb.db(process.env.REACT_APP_MONGO_DB).collection(process.env.REACT_APP_MONGO_COLLECTION)
    return tasksCollection
}

export const getDataAPI = async () => {
    try {
        const response = await axios(`${process.env.REACT_APP_TRENDING_MOVIES}${process.env.REACT_APP_TMDB}`)
        if (response.status === 200) return response.data.results
        else return {}
    }
    catch (e) {
        console.log('Error at services.js')
    }
}