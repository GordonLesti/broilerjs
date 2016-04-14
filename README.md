# broilerjs

[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Coverage Status][ico-coverall]][link-coveralls]

A simple, lightweight jQuery plugin to get the color of an image pixel by click. Here is a small [demo](https://gordonlesti.com/broiler-demo-rainbow/)

## Build Status Matrix

[![Sauce Test Status](https://saucelabs.com/browser-matrix/broilerjs.svg)](https://saucelabs.com/u/broilerjs)

## Install

Several quick start options are available:
* [Download the latest release](https://github.com/GordonLesti/broilerjs/releases/latest).
* Clone the repo: `git clone https://github.com/GordonLesti/broilerjs.git`.
* Install with [npm](https://www.npmjs.com/): `npm install broilerjs`.
* Install with [Bower](http://bower.io): `bower install broilerjs`.

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/broiler.js"></script>
```

The plugin can also be loaded as AMD or CommonJS module.

## Usage

```javascript
$("#image").broiler(function(color) {
  // do what ever you want with the color object, for example an alert
  alert("red:"+color.r+" green:"+color.g+" blue:"+color.b+" alpha:"+color.a);
});
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ grunt
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email info@gordonlesti.com instead of using the issue tracker.

## Credits

- [Gordon Lesti][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/GordonLesti/broilerjs/master.svg?style=flat-square
[ico-coverall]: https://img.shields.io/coveralls/GordonLesti/broilerjs/master.svg?style=flat-square

[link-travis]: https://travis-ci.org/GordonLesti/broilerjs
[link-coveralls]: https://coveralls.io/r/GordonLesti/broilerjs
[link-author]: https://gordonlesti.com/
[link-contributors]: ../../contributors
