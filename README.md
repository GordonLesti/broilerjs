broilerjs
=========

Branch | Build Status | Coverage
--- | --- | ---
Master | [![Build Status](https://img.shields.io/travis/GordonLesti/broilerjs/master.svg?style=flat-square)](https://travis-ci.org/GordonLesti/broilerjs) | [![Coverage Status](https://img.shields.io/coveralls/GordonLesti/broilerjs/master.svg?style=flat-square)](https://coveralls.io/r/GordonLesti/broilerjs?branch=master)
Develop | [![Build Status](https://img.shields.io/travis/GordonLesti/broilerjs/develop.svg?style=flat-square)](https://travis-ci.org/GordonLesti/broilerjs) | [![Coverage Status](https://img.shields.io/coveralls/GordonLesti/broilerjs/develop.svg?style=flat-square)](https://coveralls.io/r/GordonLesti/broilerjs?branch=develop)

## Build Status Matrix

[![Sauce Test Status](https://saucelabs.com/browser-matrix/broilerjs.svg)](https://saucelabs.com/u/broilerjs)

A simple, lightweight jQuery plugin to get the color of an image pixel by click.

## RELEASE INFORMATION

*broilerjs 1.0.1*

## Installation

Several quick start options are available:
* [Download the latest release](https://github.com/GordonLesti/broilerjs/archive/1.0.1.zip).
* Clone the repo: `git clone https://github.com/GordonLesti/broilerjs.git`.
* Install with [Bower](http://bower.io): `bower install broilerjs`.

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/broiler.js"></script>
```

The plugin can also be loaded as AMD or CommonJS module.

## Demo

Here is a small [demo](https://gordonlesti.com/broiler-demo-rainbow/)

## Usage

```javascript
$("#image").broiler(function(color) {
  // do what ever you want with the color object, for example an alert
  alert("red:"+color.r+" green:"+color.g+" blue:"+color.b+" alpha:"+color.a);
});
