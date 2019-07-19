const Mock = require('mockjs')
const Random = Mock.Random
const listData = function() {
	let data = []
	for (let i = 0; i < 5; i++) {
		let item = {
			id: Mock.mock('@integer'),
			img: {
				url: Random.image('720x240', '#FF6600'),
				alt: Mock.mock('@word')
			},
			title: Mock.mock('@title'),
			content: Mock.mock('@cparagraph'),
		}
		data.push(item)
	}
	return {
		data: data,
	}
}
const sliders = function() {
	let data = []
	for (let i = 0; i < 3; i++) {
		let item = {
			id: Mock.mock('@integer'),
			url: Random.image('1920x384', '#FF6600'),
			alt: Mock.mock('@word')
		}
		data.push(item)
	}
	return {
		data: data,
	}
}
Mock.mock('/api/getlist/', 'get', listData)
Mock.mock('/api/getSwiper/', 'get', sliders)