const keyWords = ['下线','下線'];
const config = [
    {
        exchange:'HUOBI',
        url:"https://www.huobi.com/support/zh-cn/list/360000039982",
        feildName:".list-field1",
    },
    {
        exchange:'OKEX',
        url:"https://www.okex.com/support/hc/zh-cn/sections/360000030652-%E6%9C%80%E6%96%B0%E5%85%AC%E5%91%8A",
        feildName:'.article-list-link',
    },
    {
        exchange:'BINANCE',
        url:"https://www.binancezh.ac/zh-CN/support/announcement/c-48?navId=48",
        feildName:".css-1ej4hfo",
        type:'最新公告'
    }
]



module.exports = {
    config,keyWords
}