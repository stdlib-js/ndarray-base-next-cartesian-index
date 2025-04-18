<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# nextCartesianIndex

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the next Cartesian index (i.e., set of subscripts/dimension indices).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-next-cartesian-index
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var nextCartesianIndex = require( '@stdlib/ndarray-base-next-cartesian-index' );
```

#### nextCartesianIndex( shape, order, idx, dim )

Returns the next Cartesian index (i.e., set of subscripts/dimension indices).

```javascript
var idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', [ 0, 0, 1 ], -1 );
// returns [ 0, 1, 0 ]
```

The function accepts the following arguments:

-   **shape**: array shape.
-   **order**: index iteration order. Must be either `row-major` (C-style) or `column-major` (Fortran-style).
-   **idx**: current dimension indices.
-   **dim**: index of the dimension from which to start incrementing (inclusive).

The `order` parameter specifies the index iteration order. When `order` is `row-major`, the last indices change fastest, and, when the `order` is `column-major`, the first indices change fastest.

```javascript
var idx = nextCartesianIndex( [ 2, 2, 2 ], 'column-major', [ 0, 1, 0 ], 0 );
// returns [ 1, 1, 0 ]
```

The `dim` parameter controls which dimensions are incremented. When `order` is `row-major`, if `dim` equals `shape.length-1` (or equivalently `-1`), the function increments over all dimensions from right-to-left (last-to-first). Similarly, when `order` is `column-major`, if `dim` equals `0`, the function increments over all dimensions from left-to-right (first-to-last). To restrict which dimensions can be incremented, set `dim` to a value other than the respective end. For example,

```javascript
// Increment starting from the second-to-last dimension:
var idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', [ 0, 0, 0 ], -2 );
// returns [ 0, 1, 0 ]

idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', idx, -2 );
// returns [ 1, 0, 0 ]

idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', idx, -2 );
// returns [ 1, 1, 0 ]
```

#### nextCartesianIndex.assign( shape, order, idx, dim, out )

Returns the next Cartesian index (i.e., set of subscripts/dimension indices) and assigns results to a provided output array.

```javascript
var out = [ 0, 0, 0 ];
var idx = nextCartesianIndex.assign( [ 2, 2, 2 ], 'row-major', [ 0, 0, 1 ], -1, out );
// returns [ 0, 1, 0 ]

var bool = ( out === idx );
// returns true
```

The function accepts the following arguments:

-   **shape**: array shape.
-   **order**: index iteration order. Must be either `row-major` (C-style) or `column-major` (Fortran-style).
-   **idx**: current dimension indices.
-   **dim**: index of the dimension from which to start incrementing (inclusive).
-   **out**: output array.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
-   If provided an empty shape (i.e., a shape corresponding to a zero-dimensional ndarray) or a dimension index `dim` which is out-of-bounds, the function returns `null`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray-array' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var nextCartesianIndex = require( '@stdlib/ndarray-base-next-cartesian-index' );

// Create an ndarray:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Initialize a set of indices:
var idx = [ 0, 0, 0 ];

// Iterate over each element in the array...
var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x[%s] = %d', idx.join( ',' ), x.get.apply( x, idx ) );
    idx = nextCartesianIndex.assign( x.shape, x.order, idx, -1, idx );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-next-cartesian-index.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-next-cartesian-index

[test-image]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-next-cartesian-index/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-next-cartesian-index?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-next-cartesian-index.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-next-cartesian-index/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-next-cartesian-index/main/LICENSE

</section>

<!-- /.links -->
