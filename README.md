# A Game for Someone
This is a game with no purpose, except to make you smile.
---

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />


## The Plan

1) `three-d` branch
- create a base implementation of three-js with react-three-fiber

2) `keyboard` branch -
 -  create a keyboard operated grid navigation
 - `active` grid cell has colored border
 - `active` grid cell moves on up/down/left/right keypress


3) the `v1` branch

- uses the same sized grid from `keyboard` branch
- moves an object on X/Y and Z axis on keypress (Grid Navigation)

```javascript
// Example
// @url https://stackoverflow.com/questions/11127543/how-to-move-an-object-forward-in-three-js
THREE.translateZ( 10 )
```


## Tooling
- Formatting: Eslint, AirBnB configuration
- Animation: React Three Fiber (w/ three.js)
- Framework: Create React App
- Styling: Sass Modules, only when 100% necessary
- Testing: React Testing Library w/ Jest

