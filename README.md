# WrapLines 📖

[![npm version](https://img.shields.io/npm/v/wraplines.svg?style=for-the-badge&colorB=%23000)](https://www.npmjs.com/package/wraplines)
[![license](https://img.shields.io/npm/l/wraplines.svg?style=for-the-badge&colorB=%23000)](https://github.com/nielsreijnders/wrapLines/blob/master/LICENSE)
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg?style=for-the-badge&colorB=%23000)](https://github.com)
[![gzip size](http://img.badgesize.io/https://unpkg.com/wraplines/dist/wrapLines.mjs?colorB=black&compression=gzip&style=for-the-badge)](https://unpkg.com/wraplines)

 Tiny library to wrap lines after every "line break" in a paragraph. 

##### Install

```js
npm install wraplines --save
```

##### Usage

```js
import wrapLines from 'wraplines';

//Openingtag & closingtag has to be a string
wrapLines(container, openingtag, closingtag);
```

##### Notice

> This library only breaks each line! You can add your own animations with by example css or gsap.

##### Example

```js
wrapLines(document.getElementById("container"), "<span><thisiscoolhuh>", "</span></thisiscoolhuh>");
```
###### So you don't have to run the demo :p

![example.gif](https://media.giphy.com/media/jxchZz0EDhQ7QmYEwD/giphy.gif)

##### To dos

- [ ] resize option
- [ ] option to also split words/characters

###### MIT © <a href="#?????portfolio_coming_soon">Niels Reijnders</a>
