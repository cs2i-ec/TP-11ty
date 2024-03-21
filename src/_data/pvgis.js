const EleventyFetch = require("@11ty/eleventy-fetch")


module.exports = async () => {
    const url = "https://re.jrc.ec.europa.eu/api/MRcalc?lat=45&lon=8&horirrad=1&outputformat=json";
    const data = await EleventyFetch(url, {
        duration: '1d',
        type: 'json'
    })

    console.log(data);
    return data;
}