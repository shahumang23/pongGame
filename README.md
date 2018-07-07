# `PongGame` — the Multiplayer Game which developed using Sockets lib and Angularjs framework

## Getting Started

To get you started you can simply clone the `pongGame` repository and install the dependencies:

### Prerequisites

You need git to clone the `pongGame` repository.

We also use a number of Node.js tools to initialize and test `pongGame`. You must have Node.js
and its package manager (npm) installed.

### Clone `pongGame`

Clone the `pongGame` repository using git:

```
git clone https://github.com/shahumang23/pongGame.git
cd pongGame
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the Node package manager.

```
npm install
```

* `node_modules` - contains the npm packages for the tools we need
* `app/` - contains the Angular framework files


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8080/`].

### Running Unit Tests

The `pongGame` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have an `spec.js` suffix (e.g.
  `controller.spect.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```

[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[socket]: https://socket.io/
