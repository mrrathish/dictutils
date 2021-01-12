module.exports = function propertyAsString(dict, key, defVal) {
    if (dict) {
        let val = dict[key]
        if (!val) {
            return defVal
        }
        return val;
    }
    return defVal;
};
