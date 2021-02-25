export default (data, key, target, component) => {
    
    let finalResult;

    if (component) {
        if (key) {
            let tempRes = data;
            let keys = key.split('.');
            console.log(keys)
            keys.forEach(k=>{
                tempRes = tempRes[k];
                console.log(tempRes)
                finalResult = tempRes;
            });

            finalResult.forEach( item => {
                document.querySelector(target).insertAdjacentHTML('beforeend', component(item));
            });

            if (target == 'body') {
                console.warn('component rendered into <body> since target has not been set.');
            }
        } else {
            throw ('"key" should be supplied to render components automatically by kyc.');
        }
    }
}