# WrapLines

[![npm version](https://img.shields.io/npm/v/wraplines.svg)](https://www.npmjs.com/package/wraplines)
[![gzip size](http://img.badgesize.io/https://unpkg.com/wraplines/dist/wrapLines.mjs?compression=gzip)](https://unpkg.com/wraplines)
[![license](https://img.shields.io/npm/l/wraplines.svg)](https://github.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg)](https://github.com)

Tiny library (218B) to wrap lines after every "line break" in a paragraph.

## Install

```
npm i wraplines
```

## Usage

```
wrapLines(container, openingtag, closingtag);
```

## Example

```
wrapLines(document.getElementById("container"), "<span><thisiscoolhuh>", "</span></thisiscoolhuh>");
```
