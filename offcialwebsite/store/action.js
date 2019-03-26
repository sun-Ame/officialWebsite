import http from '~/servers/index.js'
export const getList = async (store) => {
	const data = await http.get('/api/getlist/')
	return data
}
export const getSliders = async (store) => {
	const data = await http.get('/api/getSwiper/')
	return data
}
