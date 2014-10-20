broilerjs
=========

[![Build Status](https://travis-ci.org/GordonLesti/broilerjs.svg?branch=master)](https://travis-ci.org/GordonLesti/broilerjs)
[![Coverage Status](https://coveralls.io/repos/GordonLesti/broilerjs/badge.png?branch=master)](https://coveralls.io/r/GordonLesti/broilerjs?branch=master)
[![Code Climate](https://codeclimate.com/github/GordonLesti/broilerjs/badges/gpa.svg)](https://codeclimate.com/github/GordonLesti/broilerjs)

## Build Status Matrix

[![Sauce Test Status](https://saucelabs.com/browser-matrix/broilerjs.svg)](https://saucelabs.com/u/broilerjs)

A simple, lightweight jQuery plugin to get the color of an image pixel by click.

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
  // do what ever you want with the color object, for example an alert
  alert("red:"+color.r+" green:"+color.g+" blue:"+color.b+" alpha:"+color.a);
});
