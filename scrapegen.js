const webscraper = require('./webscraper');
const configIni = require('config.ini');
const exampleData = configIni.load('./config.ini').Generator;

async function generate ( config, callback = null ) {
    
    if (callback) await callback(await webscraper.generate_image(config));
    return await webscraper.generate_image(config);

}

async function generate_from_configini( config_file_path, callback = null ) {

    const data = configIni.load(config_file_path).Generator;
    return await generate( data, callback );

}

exports.generate = generate;
exports.generate_from_configini = generate_from_configini;
exports.exampleData = exampleData;