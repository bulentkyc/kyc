export default (timeDiff) => {
    
    timeDiff = timeDiff.slice(0, -1);
    timeDiffUnit = timeDiff.slice(-1).toLowerCase();

    switch (timeDiffUnit) {
        case 's':
            timeDiff = timeDiff*1000
            break;
    
        case 'm':
            timeDiff = timeDiff*1000*60
            break;
    
        case 'h':
            timeDiff = timeDiff*1000*60*60
            break;
    
        case 'd':
            timeDiff = timeDiff*1000*60*60*24
            break;
    
        case 'w':
            timeDiff = timeDiff*1000*60*60*24*7
            break;
    
        case 'm':
            timeDiff = timeDiff*1000*60*60*24*30
            break;
    
        case 'y':
            timeDiff = timeDiff*1000*60*60*24*365
            break;
    
        default:
            if (isNaN(timeDiff)) {
                throw('value error for timeDiff.\n Value can be just a number for milliseconds, or a combination with a number and initial of a time unit from below:\n second, minute, hour, day, week, month, year.\n i.e. 123, 123s, 123m, 123h, 123d, 123w, 123y')
            }
            break;
    }

    return timeDiff;
}