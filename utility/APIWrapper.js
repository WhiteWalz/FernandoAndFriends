let jsdom = require('jsdom');
let { JSDOM } = jsdom;
let axios = require('axios').default;

let getPlantByID = async function(id){
    try{
        var res = await axios.get('http://www.tropicopia.com/house-plant/detail.np/detail-' + id);
        return res;
    } catch(error){
        return error;
    }
};