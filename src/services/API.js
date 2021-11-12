import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL ? REACT_APP_BASE_URL : 'http://localhost:4040'

const postSignUp = body => {
    return axios.post(`${BASE_URL}/sign-up`, body)
}

export {
    postSignUp
}