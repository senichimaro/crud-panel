import axios from 'axios'
import * as Realm from "realm-web";
// import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { setCurrentUserID } from '../redux/reducers'
// import { useSelector } from 'react-redux'
// import { getCurrentUserID } from '../redux/reducers'

export const useUserID = async ( user ) => {
    const userID = await regexUserID(user.sub)
    const dispatch = useDispatch()
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
    // const insertResult = await tasksCollection.insertOne(data)
    // if (insertResult) {
    //     const getItems = await tasksCollection.find({})
    //     console.log("getItems", getItems)
    // }
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