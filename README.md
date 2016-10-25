Smart Notice Board
==============
Notice Boards for all

# Running
```
git clone https://github.com/Smart-Notice-Board/notice-board-app
cd notice-board-app
npm install
npm i -g electron-prebuilt
webpack
electron ./app
```
... and boom! You have running noticeboard on your screen.

### Project's folders

- `app` - code of your application goes here.
- `config` - place for you to declare environment specific stuff.
- `build` - in this folder lands built, runnable application.
- `releases` - ready for distribution installers will land here.
- `resources` - resources for particular operating system.
- `tasks` - build and development environment scripts.


# Development

#### Installation

```
npm install
```
It will also download Electron runtime, and install dependencies for second `package.json` file inside `app` folder.

#### Starting the app

```
electron ./app
```

#### Adding pure-js npm modules to your app

Remember to add your dependency to `app/package.json` file, so do:
```
cd app
npm install name_of_npm_module --save
```

#### Adding native npm modules to your app

If you want to install native module you need to compile it agains Electron, not Node.js you are firing in command line by typing `npm install` [(Read more)](https://github.com/atom/electron/blob/master/docs/tutorial/using-native-node-modules.md).
```
npm run app-install -- name_of_npm_module
```
Of course this method works also for pure-js modules, so you can use it all the time if you're able to remember such an ugly command.

#### Module loader

How about splitting your JavaScript code into modules? This project supports it by new ES6 syntax (thanks to [esperanto](https://github.com/esperantojs/esperanto)). ES6 modules are translated into AMD (RequireJS) modules. The main advantage of this setup is that you can use ES6/RequireJS for your own modules, and at the same time have normal access to node's `require()` to obtain stuff from npm.
```javascript
// Modules you write are required through new ES6 syntax
// (It will be translated into AMD definition).
import myOwnModule from './my_own_module';
// Node.js (npm) modules are required the same way as always
// (so you can still access all the goodness in npm).
var moment = require('moment');
```

#### Unit tests

We have preconfigured [jasmine](http://jasmine.github.io/2.0/introduction.html) unit test runner. To run it go with standard:
```
npm test
```
You don't have to declare paths to spec files in any particular place. The runner will search through the project for all `*.spec.js` files and include them automatically.


# Making a release

**Note:** There are various icon and bitmap files in `resources` directory. Those are used in installers and are intended to be replaced by your own graphics.

To make ready for distribution installer use command:
```
npm run release
```
It will start the packaging process for operating system you are running this command on. Ready for distribution file will be outputted to `releases` directory.

You can create Windows installer only when running on Windows, the same is true for Linux and OSX. So to generate all three installers you need all three operating systems.
