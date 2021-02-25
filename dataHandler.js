import localDataHandler from './localDataHandler.js';
import parseHandler from './parseHandler.js';

export default (url, options, parser, timeDiff, sameDay, errorHandler) => {

    let finalData = [];

    if(localDataHandler(timeDiff, sameDay)) {
        finalData = localData;
    } else {
        await fetch(url, options)
        .then(res => finalData = parseHandler(res, parser))
        .catch(errorHandler);
    }
    
    localStorage.setItem(url, JSON.stringify({result:finalData, date: Date.now()}));
    
    return finalData;

}