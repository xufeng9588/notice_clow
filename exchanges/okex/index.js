const { getExchangeDate } = require('./../../utils/transform');
const { config  } = require('./../../config');

function okex(){
    const rowData = config[1];
    // const keyWords = ['下线',];
    getExchangeDate(rowData);
}

module.exports = {
    okex
}