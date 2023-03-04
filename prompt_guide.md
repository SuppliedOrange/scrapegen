# Settings for the generation of the image.

 ## A more detailed guide is available on https://deepdreamgenerator.com/how-it-works
 ## All settings are case sensitive

```
[Generator]

prompt = ''
model = ''
aspect_ratio = ''
quality = ''
negative_prompt = ''
face_enhance = ''
upscale_and_enhance = ''
follow_model_style = ''
```
# Contents
1. [Prompt](#prompt)
2. [Model](#models)
3. [Aspect Ratio](#aspect-ratios)
4. [Quality](#qualities)
5. [Negative Prompt](#negative-prompt)
6. [Face Enhance](#face-enhance)
7. [Upscale And Enhance](#upscale--enhance)
8. [Follow Model Style](#follow-model-style)


# Prompt

### You can customize the prompt to whatever suits your needs. Seperate qualities by commas.

# Models
`Available Settings`
## Fusion
Trained with high-quality and visually appealing images, excels in consistently delivering outstanding results.
## Artistic
Trained on high-quality artistic images, excels in producing visually striking and pleasing results.
## Fantasy
Trained on high-quality fantasy and 3D anime images.
## PhotoReal
Trained on photorealistic images and photography, well-suited for generating realistic people and faces.
## Stable (Old)
Base model trained on a diverse range of images, all models above are fine-tuned versions of this one.
## Cyberspace (v2)
Trained on high-quality 3D images with a sci-fi aesthetic, excels in producing cool cars, robots, and gaming characters.
## Quantum (v2)
Trained on high-quality 3D images with a gaming aesthetic, excels in producing 3D portraits, animals and landscapes with a game-like feel.
## Stable (v2)
Base model, the above 2 models are based on this one.

# Aspect Ratios
Determines the aspect ratio of the resulting image, whether it should be square, horizontal, or vertical.

`Available Settings`

- ## Landscape
- ## Square 
- ## Portrait

# Qualities 
High quality will improve the quality and resolution of the result image.

`Available Settings`

- ## Normal
- ## High

# Negative Prompt
Basically stuff you don't want in the resulting image

# Face Enhance
Can be used to correct various artifacts and misalignments. It also improves the clarity of the eyes and mouth in the subject. Works best with Upscale And Enhance enabled

`Available Settings`

- ## None
- ## Normal

# Upscale & Enhance 
Improves the image by reducing noise and increasing resolution, resulting in a clearer and more defined image than the original. However, it may also cause some loss of texture in certain areas such as skin or paint

`Available Settings`

- ## None
- ## 1 MP
- ## 2 MP 
#### *DO NOT USE 2MP IF YOU'RE USING HIGH QUALITY, YOUR TOKENS ARE LIMITED*

# Follow Model Style 
Adheres to the style of the training data of the chosen model while generating images instead of being extra creative

`Available Settings`

- ## true
- ## false