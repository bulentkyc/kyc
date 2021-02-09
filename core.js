export default (url, options, timeDiff, sameDay, parser, log, target, component, key, key2, errorHandler) => {
    
    //localData = JSON.parse(localStorage.getItem());

    function isNotEmpty (source) {
        if (source == null || source == undefined || source == '' || source == false) {
            return false;
        } else {
            return true;
        }
    }

    async function parseHandler(data, pass) {
        let result;

        if (pass) {
            result = data;
        } else {
            switch (parser) {
                //read the response and return as text
                case 'text':
                    result = await data.text();
                    break;

                //parse the response as JSON
                case 'json':
                    result = await data.json();
                    break;
            
                //return the response as FormData object 
                case 'formData':
                    result = await data.formData();
                    break;
                
                //return the response as Blob (binary data with type)
                case 'blob':
                    result = await data.blob();
                    break;
                
                //return the response as ArrayBuffer (low-level representation of binary data)
                case 'arrayBuffer':
                    result = await data.arrayBuffer();
                    break;
                
                //If result is non of above data will be returned without parsing
                default:
                    result = data;
                    break;
            }
        }

        localStorage.setItem(url, JSON.stringify({result, date: Date.now()}));
        
        if (log) {
            console.log(result);
        }
        
        //console.log(isNotEmpty(component))
        if (isNotEmpty(component)) {
            for (let index = 0; index < result[key].length; index++) {
                const item = result[key][key2][index];
                //console.log(item);
                document.querySelector(target).insertAdjacentHTML('beforeend', component(item));
            }
        }
    
    }

    function errHandler(err) {
        if (isNotEmpty(errorHandler)) {
            errorHandler(err);
        } else {
            throw err
        }
        
    }

    
    if(isNotEmpty(localStorage.getItem(url))) {
        let localData = JSON.parse(localStorage.getItem(url));
        //console.log(Date.now() - localData.date)
        if (timeDiff > (Date.now() - localData.date)) {
            //console.log(localData.result)
            parseHandler(localData.result, true);
        } 
    }else {
        fetch(url, options).then(parseHandler).catch(errHandler);
    }

    
}