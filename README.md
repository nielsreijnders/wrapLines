# WrapLines

[![npm version](https://img.shields.io/npm/v/wraplines.svg)](https://www.npmjs.com/package/wraplines)
[![gzip size](http://img.badgesize.io/https://unpkg.com/wraplines/dist/wrapLines.mjs?compression=gzip)](https://unpkg.com/wraplines)
[![license](https://img.shields.io/npm/l/wraplines.svg)](https://github.com/nielsreijnders/wrapLines/blob/master/LICENSE)
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg)](https://github.com)

Tiny library (218B) to wrap lines after every "line break" in a paragraph.

### Install

```
npm i wraplines
```

### Usage

```
wrapLines(container, openingtag, closingtag);
```

**Notice**

This library only breaks each line! You can add your own animations with by example css || gsap. Openingtag && closingtag can be anything. Example:

**Example**

```
wrapLines(document.getElementById("container"), "<span><thisiscoolhuh>", "</span></thisiscoolhuh>");
```

### To do;)

- [ ] Add resize option

MIT © <a href="#?????portfolio_coming_soon">Niels Reijnders</a>
