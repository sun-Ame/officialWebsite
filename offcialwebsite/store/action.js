import http from '~/servers/index.js'
export const getList = async() => {
	const data = await http.get('/api/getlist/')
	return data
}
export const getSliders = async() => {
	const data = await http.get('/api/getSwiper/')
	return data
}
