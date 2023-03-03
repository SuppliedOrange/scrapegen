const webscraper = require('./webscraper');
const configIni = require('config.ini');
const exampleData = configIni.load('./config.ini').Generator;
const fs = require('fs');

async function generate ( config, callback = null ) {

    let webscraped_link = await webscraper.generate_image(config);
    if (callback) await callback(webscraped_link);
    return webscraped_link;

}

async function generate_from_configini( config_file_path, callback = null ) {

    if (!fs.existsSync( config_file_path )) {
        throw new Error("Invalid .ini path provided")
    }

    const data = configIni.load(config_file_path).Generator;
    return await generate( data, callback );

}

exports.generate = generate;
exports.generate_from_configini = generate_from_configini;
exports.exampleData = exampleData;