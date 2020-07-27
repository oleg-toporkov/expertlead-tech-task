# Test Automation for ExpertLead #
Web UI tests in using page object pattern
REST API tests using Supertest


### Based on ###

* [TypeScript 3.8](https://www.typescriptlang.org/) - Typed superset of JavaScript
* [Playwright](https://github.com/microsoft/playwright) - Node library to automate e2e browser tests
* [Mocha](https://mochajs.org/) - Test framework with TDD/BDD style
* [Chai](http://chaijs.com/) - Assertion library
* [Allure](https://docs.qameta.io/allure/) - Nice reports :)
* [Supertest](https://github.com/visionmedia/supertest) - REST API testing automation tool


### Prerequisites ###

* [JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

### Set up ###

First, install all dependencies using running [NPM](https://www.npmjs.com/) from root folder as current working directory

```
#!bash
npm install
```


### Running tests ###

Run all tests

```
#!bash
npm run test
```


### Running report ###

Run the following command from project root

```
#!bash
npm run open-report
```


## Problems found
* An infinite spinner shown when selecting any filter for dresses (UI tests)


## Testing code improvements
* Add JSON schema validation
* Add more logging and reporting bindings (for steps etc)
* DTOs for web services could be reused from dev code (if any)
* Split one file with UI tests
* Create one account for UI tests and reuse it as much as possible
* Move browser init to other place
* Not all screenshots attached to the report as page sometimes is still loading
* See other TODOs ¯\_(ツ)_/¯ 
