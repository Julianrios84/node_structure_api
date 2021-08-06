const getExpeditiousCache = require('express-expeditious');

// const defaultOptions = {
//     namespace: 'expresscache',
//     defaultTtl: '1 minute',//TODO: 60 * 1000
//     engine: null,
//     statusCodeExpires: {
//         404: '5 minutes',
//         500: 0 // 1 minute in milliseconds
//     }
// }

// const cacheInit = getExpeditiousCache(defaultOptions)

// module.exports = { cacheInit }


module.exports = function (req, res, next) {
    const defaultOptions = {
        namespace: 'expresscache',
        defaultTtl: '1 minute',//TODO: 60 * 1000
        engine: null,
        statusCodeExpires: {
            404: '5 minutes',
            500: 0 // 1 minute in milliseconds
        }
    }

    return  getExpeditiousCache(defaultOptions)
};