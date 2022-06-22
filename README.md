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

### For building the project 
```
yarn build
```

## Kuroco Configuration
- Sign up for Kuroco's [free trial](https://kuroco.app/free_trial/)
- Integrate your cloned repo to Kuroco by following this [documentation](https://kuroco.app/docs/tutorials/beginners-guide/#integrate-github-into-kuroco)
- Go to your Kuroco Management Page and select `Default` from `API` dropdown. Then choose `Import as a new API` from the given radio buttons and upload the `exported_api.yaml` folder from the original repository. 

<img src="https://user-images.githubusercontent.com/55151618/174977445-16bbd51f-e946-4af5-aa0b-09ff10ffac73.png" width="700" />

# Documentation for backend
- ## Add new Sushi
Select `Sushi List` from `Content` Dropdown menu, then on the top right corner of the screen click on `Add`  

<img src="https://user-images.githubusercontent.com/55151618/174956220-715cacee-0012-4b48-82a5-541e0c30e33a.png" width="700" />

Select the `Category` from dropdown and enter the `Title`. Also enter other non-required information below if you want to

<img src="https://user-images.githubusercontent.com/55151618/174960025-0b4611c0-0f1f-4851-90c5-f0c33fb44edb.png" width="700" />

Choose or Add a new `Tag` and then finally click on `Add` to submit the data

<img src="https://user-images.githubusercontent.com/55151618/174960872-a6ad74d4-eb75-4427-afb9-0490825a68db.png" width="700" />

On reloading the website, you can now view the newly added Sushi

- ## Define custom functions using Kuroco Smarty

Select `Function` from `Operation` dropdown menu, then on the top right corner of the screen click on `Add`

<img src="https://user-images.githubusercontent.com/55151618/174964652-83656f0b-b9e8-46a3-bf94-c127c3af5da7.png" width="700" />

Set the `Title` preferably by the name of the endpoint it is pointing to. Choose the `Category` from the dropdown menu and set the `Identifier` which is the unique identifier on which you want to perform your operation

<img src="https://user-images.githubusercontent.com/55151618/174965921-8cbba2e6-2316-4e09-b327-9e709db29fb1.png" width="700" />

Inside the `Process` field, type the commands that you want to perform and click on `Add/Update`. The language here is `Kuroco Smarty`, refer this [documentation](https://github.com/diverta/kuroco-smarty)

<img src="https://user-images.githubusercontent.com/55151618/174967347-4b8f149c-3a64-4ca9-941c-84d565d33110.png" width="700" />
