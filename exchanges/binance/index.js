const { getExchangeDate } = require('./../../utils/transform');
const { config  } = require('./../../config');



function biance(){
    const rowData = config[2];
    // const keyWords = ['下線','上线','下架'];
    getExchangeDate(rowData);
}


module.exports = {
    biance
}