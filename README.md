# Príbehy umenia

Microsite for the Stories of Art project, showcasing documentary projects inspired by peoples' stories about the context of artworks on [Web umenia](https://webumenia.sk/en)

This project uses [Nuxt.js](http://nuxtjs.org/).

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# deploy static project to `release` branch (using push-dir)
$ npm run deploy
```

## Deployment

Because of the way [push-dir](https://github.com/L33T-KR3W/push-dir) pushes generated, non-continuous versions of the `release` branch, we need to 'hard' pull it on production to make production equal to `origin/release`. [method via SO](https://stackoverflow.com/questions/1628088/reset-local-repository-branch-to-be-just-like-remote-repository-head)

``` bash
# fetch latest version of branches at origin
$ sudo git fetch origin

# reset local branch to release branch on origin
$ sudo git reset --hard origin/release
```
