broilerjs
=========

[![Build Status](https://travis-ci.org/GordonLesti/broilerjs.svg?branch=master)](https://travis-ci.org/GordonLesti/broilerjs)

A simple jQuery Plugin to get the color of an image pixel by click

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/broiler.js"></script>
```

The plugin can also be loaded as AMD or CommonJS module.

## Demo

Here is a small [demo](http://gordonlesti.com/broilerjs/demo/rainbow.html)

## Usage

```javascript
$("#image").broiler(function(color) {
  // do what ever you want with the color object, for example a alert
  alert("red:"+color.r+" green:"+color.g+" blue:"+color.b+" alpha:"+color.a);
});
