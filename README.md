# scrapegen - free deep dream text2image.

### Status: Working 28/02/2023

<br>

## Installation:

```npm install scrapegen```

<br>


## Description:

A webscraper that generates a fake account on deepdreamgenerator.com and uses the free tokens to generate a single image within 90 seconds. You can use it with no ratelimits and in parallel. Too lazy to tidy up my code. It'll probably be patched in the future because I made this anyway.

<br>

## All possible settings/models/options etc:

It's all in  `config.ini.example` :)

<br>

## Functions:

### `.generate( config, callback (optional) )`
An asynchronous function that returns the image link once done processing. You can also pass in a callback function.


```js
// Returns a promise! You need to await if you wanna capture the data.
scrapegen.generate({
    prompt: "Japanese Woman",
    model: 'PhotoReal',
    aspect_ratio: 'Portrait',
    quality: 'High',
    negative_prompt: `ugly, scary, mangled, cross eye, abstract, weird`,
    face_enhance: 'Normal',
    upscale_and_enhance: '1MP',
    follow_model_style: 'true'

}, callback: (link => console.log(`Generated image: ${link}`) ))

```

### `.generate_from_ configini( path_to_config.ini, callback (optional) )`
An asynchronous function that generates an image based on a prompt from a config.ini file. The format for the config.ini file is provided in `config.ini.example`.

```js
async function getImage() {

    let image_link = await scrapegen.generate_from_configini('path/to/config.ini', ( link => console.log(`Generated Image: ${link}`)) );

}

( async () => await getImage() )()
```

### ` .exampleData `
Returns some example data from `config.ini` to play around with. Use it with `.generate` instead of your own prompt to test it out.
```js
scrapegen.generate( scrapegen.exampleData )
```

<br>


## Usage Examples 

<br>

**Example 1:** Generating a cyberpunk version of Mona Lisa lookalike and then opening the generated image in our default browser.

```js
const scrapegen = require('scrapegen');
const open = require('open');

(async () =>
    await generate({

        prompt: `a cyberpunk painting of a cyberpunk monalisa wearing cyberpunk intricate streetwear, , woman with long cyberpunk hair and a smile on her face and neon tattoos, with a green background and a blue cyberpunk city, volumetric lighting, inceoglu dragan bibin hans thoma greg rutkowski alexandros pyromallis nekro rene margitte illustrated, fine details, realistic shaded, 4k, hyper detailed, beautiful, detailed portrait, cell shaded, 4 k, vivid colours, concept art, by wlop, ilya kuvshinov, artgerm, krenz cushart, greg rutkowski, pixiv. cinematic dramatic atmosphere, sharp focus, volumetric lighting, cinematic lighting, studio quality`,

        model: 'Fantasy',
        aspect_ratio: 'Portrait',
        quality: 'High',
        negative_prompt: `cartoon, bad art, bad artist, mutated`,
        face_enhance: 'Normal',
        upscale_and_enhance: '1MP',
        follow_model_style: 'false'
    })
    .then(image_link => {
        open(image_link);
    })
    .catch(e => console.log(`Yikes! Hit an error:\n${e}`))
)
```

**Example 2:** Using the built-in sample `config.ini` file to generate an image.

```js
const scrapegen = require('scrapegen');

async function getImage() {

    let image_link = await scrapegen.generate_from_configini('./config.ini', ( link => console.log(`Generated Image: ${link}`)) );

}

( async () => await getImage() )()

```

## Dependencies:

- [puppeteer](https://github.com/puppeteer/puppeteer)
- [unique-username-generator](https://github.com/subhamg/unique-username-generator)
- [node-temp-mail](https://github.com/Jon-Becker/node-temp-mail)
- [config.ini](https://github.com/martinswiderski/config.ini)