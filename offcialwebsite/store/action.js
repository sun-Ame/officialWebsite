import axios   from '~/servers/index.js'

export const getList = async (store) => {
    console.log('----/api/getlist')
    return await axios.get('api/getlist/')
}
