const readline = require('readline');
const sh = require('shorthash');

const regions = {};

const rl = readline.createInterface({
    input: process.stdin,
    //output: process.stdout
  });

  rl.on('line', (input) => {
    let [province, country] = input.split(',');
    const countryId = sh.unique(country);
    const provinceId = sh.unique(province);

    country = country.replace(/"/g, '');
    province = province.replace(/"/g, '');
    
    if(!regions[countryId]) regions[countryId] = { name: country };
    if(!regions[countryId].regions) regions[countryId].regions = {};
    regions[countryId].regions = { ...regions[countryId].regions, [provinceId]: {name: province} }
  });

  rl.on('close', () => {
      console.log(JSON.stringify(regions, null, 2));
  })