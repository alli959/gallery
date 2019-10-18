import axios from 'axios';

export function getImages(){
    const req = axios.get("https://picsum.photos/v2/list");

    return (dispatch) => {
        req.then(({data}) => {
            dispatch({type: 'GET_IMAGES', payload: data})

        })
    }

};