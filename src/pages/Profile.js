import React, { useEffect, useState } from "react"
import { dbconn, buildMoviesArr } from "../services/services"

export const Profile = ({ userID }) => {

    useEffect((() => {
        (async () => {
            const tasksCollection = await dbconn()
            const database = await tasksCollection.find({})
            console.log("database", database)
            const response = await buildMoviesArr(database)
        })()
    }),[])

    return userID
}