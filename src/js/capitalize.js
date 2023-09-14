const capitalize = (str) => {
    let last = str.slice(1, str.length)
    return str.charAt(0).toUpperCase() + last.toLowerCase(); ;
}

module.exports = capitalize;
