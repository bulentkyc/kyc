export default (timeDiff, sameDay) => {
    
    let localData;

    if(!(localStorage.getItem(url))) {
        localData = JSON.parse(localStorage.getItem(url));
        if ((timeDiff > (Date.now() - localData.date)) && (sameDay == false)) {
            return localData.result;
        } 
    }
    
    return null;

}