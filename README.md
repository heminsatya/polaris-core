# Polaris Framework

Polaris is a front-end web framework for creating responsive UI components, with a focus on simplicity.

Polaris framework is divided into two parts: **Core** & **Plugins**


## Polaris Core (v0.9.8 Beta)

Polaris Core consists of generic components and features that almost every web application needs.


### Documentation

> Coming soon...


### Audiences

Polaris framework is built for front-end web app developers and designers.


### Prerequisites

* A basic knowledge about HTML, CSS, and JavaScript.
* A basic knowledge about Sass*.
* A basic knowledge about TypeScript*.
* A basic knowledge about webpack*.

> *These prerequisites are only required for developers.


### Dependencies

In order to use Polaris framework in production you don't need to use any other packages or libraries.

However, to use it in a development environment, it depends on:

* [Node.js](https://nodejs.org/en/) need to be installed.
* [Sass](https://www.npmjs.com/package/sass) as an npm developement package.
* [TypeScript](https://www.npmjs.com/package/typescript) as an npm developement package.
* [webpack](https://www.npmjs.com/package/webpack) as an npm developement package.
* [webpack CLI](https://www.npmjs.com/package/webpack-cli) as an npm developement package.
* [TypeScript loader](https://www.npmjs.com/package/ts-loader) as an npm developement package.
* [inspectpack](https://www.npmjs.com/package/inspectpack) as an npm developement package.


### Install via npm

```
npm install polaris-core
```


### Use Polaris CDN

> Coming soon...


### Download Polaris

[Download Polaris Core](https://github.com/heminsatya/polaris-core/releases)


### Clone Polaris

You can also clone Polaris using [git](https://git-scm.com/):

```
git clone https://github.com/heminsatya/polaris-core.git
```


### Customize Polaris

#### Polaris Structure

Before customization of Polaris framework, you need to know a bit about it's structure:

```
/dist
    /css
    /fonts
    /images
    /js
/src
    /scss
    /ts
```

`dist` folder consists of all compiled files that you can use in production.

`src` folder consists of all source files that need to be complied during the development.


#### Customization

In order to customize Polaris framework, first you need to download or clone it, then you need to follow a few easy steps:

* Open up your favourite CLI program.
* Change directory to the path where Polaris framework extracted:
```
cd path-to/polaris-core/
```
* Install packages by:
```
npm install
```
Now, you have everything set-up. You can customize it however you want.


#### Rebuild Polaris

Next step after customization of Polaris is to rebuild CSS, and JavaScript libraries.

To rebuild the CSS libraries run:

```
npm run css
npm run css-dev
npm run css-rtl
npm run css-rtl-dev
```

To rebuild the JavaScript libraries run:

```
npm run js-mod
npm run js
npm run js-dev
```


## Polaris Plugins

Polaris Core only contains necessary features and components. However, for a real world project you may need more features and components.

You can use [Polaris Plugins](https://github.com/heminsatya/polaris-plugins) alongside the Polaris Core to get more features and components, if you like.


## Licence

Polaris framework is free and open-source with [MIT Licence](https://github.com/heminsatya/polaris-core/blob/main/LICENSE). You can use it for any personal or commercial purpose you want.


## About The Author

I'm Hemin Satya, a freelance programmer.

Please let me know your precious comments, observations, and suggestions:
([GitHub](https://github.com/heminsatya))
([Twitter](https://twitter.com/heminsatya))

Thank you all.


## Collaboration

Polaris framework is in a beta version and has a long way ahead. It needs contribution to be developed. 

I warmly accept and appreciate any contribution requests from anyone who wants to work on this open-source project.

I will do my best to make it something magnificent for all of us. I hope you like it.


## Bug Report

If you saw any bugs or mistakes, please let me know. I'll do my best to solve them or at least reduce them asap.

[Report Issues](https://github.com/heminsatya/polaris-core/issues)
