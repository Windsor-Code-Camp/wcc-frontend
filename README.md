# Frontend for the WCC website

This repo contains the frontend of the WCC website.

## Setting up the dev environment

**You’ll need to have Node 14.0.0 or later version on your local development machine**

-   [NodeJS](https://nodejs.org/en/) - Install Node from here

## WCC API URL

**_NEW_**: You must add a WCC api url to `.env` like so:

```
$ cat .env
REACT_APP_WCC_API_URL=http://localhost:8000
```

**NOTE**: Make sure ` REACT_APP_WCC_API_URL` is using `http` and not `https` if
you're running backend locally.

## Starting the App

This repo uses React as the frontend. Before starting development, run the following command in the root folder:

```
cd wcc-frontend
npm install
npm run start
```

Or for you yarn users :wink: :

```
cd wcc-frontend
yarn install
yarn run start
```
