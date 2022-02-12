import axios from 'axios'

export const getDataAPI = async () => {
    try {
        const response = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=fded687d14e48654e543b7ecfaea42cc`)
        console.log('response', response)
        if(response.status === 200) return response
        else return {}
    }
    catch(e){
        console.log('Error at services.js')
    }
}