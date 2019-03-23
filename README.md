# knex

[![CircleCI](https://circleci.com/gh/js-items/knex.svg?style=svg)](https://circleci.com/gh/js-items/knex)
[![codecov](https://codecov.io/gh/js-items/knex/branch/master/graph/badge.svg)](https://codecov.io/gh/js-items/knex)
![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/js-items/knex.svg)
![jscpd](assets/jscpd-badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/js-items/foundation/badge.svg?targetFile=package.json)](https://snyk.io/test/github/js-items/foundation?targetFile=package.json)

Knex.js implementation of js-items

There is a fantastic alternative to this project (and @js-items/knex is based on it): 
[js-entity-repos/knex](https://github.com/js-entity-repos/knex).

The main differences to the @js-entity-repos:
- different naming convention: using `item` instead of `entity`
- cursor based pagination operates using `before` and `after` instead of `cursor` and `direction`

## Installation:
`npm i @js-items/knex --save`

Credits:
- [ryansmith94](https://github.com/ryansmith94)