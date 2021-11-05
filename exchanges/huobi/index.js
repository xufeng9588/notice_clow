const { getExchangeDate } = require('./../../utils/transform');
const { config  } = require('./../../config');

function huobi(){
    const rowData = config[0];
    // const keyWords = ['下线'];
    getExchangeDate(rowData);
}
module.exports={
    huobi
}