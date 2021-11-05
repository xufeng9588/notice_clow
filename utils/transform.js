const { keyWords } = require('./../config');
const cheerio = require('cheerio');
const request = require('superagent');


function getExchangeDate(data){
    const exportResult = [];
    const { exchange , feildName ,url } = data;

    request.get(url).end((err,res)=>{
        console.log(err,res)
        return
        if(err) return '数据请求失败';
        const $ = cheerio.load(res.text);
        // console.log($,'res....')
        const announcement = $(feildName);
        announcement.each((i,v)=>{
            const tip = $(v).text().trim();
            keyWords.forEach(element => {
                const search = tip.indexOf(element);
                if (search > 0) {
                    exportResult.push(tip);
                }
            });
        })
        console.log(exportResult)
    })
    // console.log(exchange,feildName,url)
    // return exportResult
}

module.exports = {
    getExchangeDate
}