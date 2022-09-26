# Movie database
## Föreläsning 2 - Bogdan

* [x] Create React application
    * [x] package.json - npm run dev/ npm run start
    * [x] parcel
    * [x] React router
* [x] Show existing movies
* [x] Add new movies
    * [x] useEffect, useState
* [ ] Introduce testing
    * [ ] Run jest test
    * [ ] Snapshot testing
        * [x] useContext
    * [ ] Testing with simulated action
    * [ ] Run test on GitHub action

# Commands cheat sheet

- git init (to start the git repo)
- npm init -y (create package.json with default values)
- npm install parcel (to install parcel)
- npm install react react-dom react-router-dom (to install these packages)

To install packages:
- npm install <packageName>
  For example:
- npm install jest
- npm install jsdom
- npm install jest-environment-jsdom

These will show up in package.json (in the example, I have moved them from "dependencies" to "devDependencies")

Use "--save-dev" as an option if you want to install as a devDependency

- npm install --save-dev <packageName>


------------------------

## Föreläsning 2 - Johannes
## Jest & Babel

- npm install -D jest
- npm install -D babel-jest
- npm install -D jest-environment-jsdom
- npm install -D jsdom"
- npm install -D @babel/preset-env @babel/preset-react
- npm install -D @types/jest

### Need to include Babel-jest so that jest can use react code:
"babel": {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}

### Jest uses jsdom to access "document"
"jest": {
    "testEnvironment": "jsdom"
}


- To update snapshot:
- npm run test -- -u

----------------------

## Föreläsning 3 - Johannes

* [x] Create react application with parcel
* [x] Jest
* [x] Snapshot tests
  * Testing rendering

* [ ] Simulator testing
  * Testing submission

* [ ] Github Actions
* [ ] Coverage coveralls.io
* [ ] Prettier
* [ ] Typescript
* [ ] Eslint











