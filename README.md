# Adopt Me

A website project, where You can find and adopt a pet.

- React
- CSS
- Parcel
- Jest
- ESLint
- Prettier


## Installation

Copy SSH Link, and run:

```bash
git clone git@github.com:olivergav/adopt_me.git
cd adopt_me
npm install
npm start

```

## License

[Beerware](https://gist.github.com/olivergav/bd38cfc62e706f96953c2ebeed6fecaf)

```
* ----------------------------------------------------------------------------
* "THE BEER-WARE LICENSE" (Revision 42):
* github.com/olivergav wrote this file.  As long as you retain this notice you
* can do whatever you want with this stuff. If we meet some day, and you think
* this stuff is worth it, you can buy me a beer in return.   Oliwier Gawlik
* ----------------------------------------------------------------------------

```
## Coverage

Run coverage report
```bash
jest --coverage
#or
npm t -- --coverage
```
Open interactive [coverage index.html](coverage/lcov-report/index.html)
```bash
open coverage/lcov-report/index.html
```

## Dictionary
- CDN - Content Delivery Network
- Transpilator - (i. e. Babel, Typescript)
- Transpilation - transformation and compilation. Conversion between languages versions.
- SPA - Single Page Application
- PWA - Progressive Page Application
- SSA - Server-side rendering
- Memoizing - Cache function result instead call it twice with same parameters, only for pure function and limited combinations of parameters value


## Tools (not all were used)
- Prettier - code formatter => [Link](https://www.npmjs.com/package/prettier) <=
- Linter (ESLint- static code analyzer with guideline (Airbnb) => [Link](https://eslint.org/)  <=
- Module Bundler (WebPack, Parcel)
- StoryBook
- State management library - (Flux, Redux, Mobx)

## Snippets

Checking node_package version:
```bash
#npm view eslint versions
npm view {package_name} version - newest version
npm view {package_name} versions - all versions
npm view {package_name} - shorts and returns all the info

```

---
Example of supported browsers: => [Link](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25zLCBub3QgZGVhZA%3D%3D) <=
```json
{
  "browserslist": ["last 2 versions", "not dead"]
}
```