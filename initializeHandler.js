export default (defSettings, userSettings) => {

    Object.keys(defSettings).forEach(key => {
        if (!(userSettings[key])) {
            defSettings[key] = userSettings[key]
        }
    });

    return defSettings;
}