import axios from 'axios'

export const getDataAPI = async () => {
    try {
        const response = await axios(`${process.env.REACT_APP_TRENDING_MOVIES}${process.env.REACT_APP_TMDB}`)
        if(response.status === 200) return response.data.results
        else return {}
    }
    catch(e){
        console.log('Error at services.js')
    }
}