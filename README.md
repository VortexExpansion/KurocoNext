# KurocoNext

## Deployed at : [SushiPedia](https://sushipedia.g.kuroco-front.app/homePage/)
Sushipedia is like an encyclopedia for Sushi. This site would serve as a manual for incoming foreigners in Japan. The main purpose of creating this site was to get familiar with NextJS and different features of Kuroco and leave all the logic and functionality to the backend and stick to mostly just rendering the components on frontend.

### Frontend : NextJS, TailwindCSS
### Backend : Kuroco  

## Preview

![Demo Preview](https://user-images.githubusercontent.com/55151618/174931026-66f99d1b-3ce7-4f6c-8eb4-265aac4b2257.gif)

## Features

- [Kuroco Filter query](https://kuroco.app/docs/reference/filter-query/) : 
Search by generating an API endpoint for filtered results based on entered keywords

- [Kuroco Dynamic image conversion](https://kuroco.app/docs/reference/api-convert-image/) : 
Render different image sizes across the site with lossless quality

- [Kuroco Tags](https://kuroco.app/docs/management/tag-category/) :
Add multiple tags to different items and then filter by tags by the tags API endpoint

- [Kuroco Custom Function](https://kuroco.app/docs/tutorials/creating-a-custom-function-endpoint/) : 
Created a custom endpoint for searching by `category_type_nm` which is currently not available by Kuroco

- [Kuroco Files](https://kuroco.app/docs/tutorials/difference-between-kurocofiles-and-kurocofront/) : 
Storing and rendering content for `Category Settings` of a content list

- [Kuroco API](https://kuroco.app/docs/tutorials/configure-endpoint/) : 
Configuring multiple custom endpoints for fetching results

## Installation 

### Requirements
- Node.js :`14.x`  
- Yarn  :`1.15.x`


### Steps to run locally :　
```
git clone https://github.com/VortexExpansion/KurocoNext.git
cd KurocoNext
yarn install 
yarn dev
```
> Congratulations! Your project will be hosted locally at http://localhost:3000/homePage/







