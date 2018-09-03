const Mock = require('mockjs');
const Random = Mock.Random 

const listData = function (){
    console.log('listData---', listData)
    let data = []
    for(let i = 0; i<5; i++) {
        let item = {
            id: Mock.mock('@integer'),
            img: Random.image('720x240', '#FF6600'),
            title: Mock.mock('@cparagraph'),
        }
        data.push(item)
    }
    return {
        data: data,
    }
}
Mock.mock('/api/getlist/', 'get', listData)