# deepstreamio-server-client-plugin

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> A plugin to expose a deepstream client on the server

## Install

```sh
npm i -D deepstreamio-server-client-plugin
```

## Usage

```js
import clientPlugin from "deepstreamio-server-client-plugin"
clientPlugin(server);
server.once('clientReady', () => {
	// Use client
});
```

## Developing

This project uses the [RISE yeoman generator][rise].  For development workflow,
see the [workflow guide][rise-workflow].  Cheatsheet:

* Add code to `src/index.js` and tests to `test/index.js`.
* Lint, build and test a project with `npm run build`.
* Build and watch changes in `src/` with `npm run watch`
* Run only tests with `npm run test`.
* Check coverage with `npm run coverage`.
* Generate a TOC for the `CHANGELOG` with `npm run toc`
* Deploy to a remote origin with `npm run deploy`.
* Bump version and publish a package with `npm run major` or `minor/patch`

## License

MIT © [Chris Morrell](http://cmorrell.com)

[rise]: https://github.com/bucaran/generator-rise
[rise-workflow]: https://github.com/bucaran/generator-rise#beginner-workflow

[npm-url]: https://npmjs.org/package/deepstreamio-server-client-plugin
[npm-image]: https://img.shields.io/npm/v/deepstreamio-server-client-plugin.svg?style=flat-square

[travis-url]: https://travis-ci.org/inxilpro/deepstreamio-server-client-plugin
[travis-image]: https://img.shields.io/travis/inxilpro/deepstreamio-server-client-plugin.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/inxilpro/deepstreamio-server-client-plugin
[coveralls-image]: https://img.shields.io/coveralls/inxilpro/deepstreamio-server-client-plugin.svg?style=flat-square

[depstat-url]: https://david-dm.org/inxilpro/deepstreamio-server-client-plugin
[depstat-image]: https://david-dm.org/inxilpro/deepstreamio-server-client-plugin.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/deepstreamio-server-client-plugin.svg?style=flat-square
