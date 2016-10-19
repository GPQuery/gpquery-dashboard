# GPQuery-Dashboard

Data visualisation and statistical analysis dashboard for Grand Prix Racing records since 1950




## Overview

This project was generated with the [Gulp-Angular generator][yo-gulp-ng].




## Getting Started


### Prerequisites

- [Git][git]
- [Node.js][node] >= v0.12.0 and [npm][npm]
- [Bower][bower] (`npm install --global bower`)
- [Gulp][gulp] (`npm install --global gulp`)


### Installing

1. Clone the repository with git, and enter the directory:
```
git clone https://github.com/GPQuery/gpquery-dashboard.git
cd gpquery-dashboard/
```

2. Install development tools:
```
npm install
```

The above should also install front-end dependencies; you can do so yourself with:
```
bower install
```

3. Start the development server, which will automatically open the client in your browser:
```
gulp serve
```


### Developing

For development, you can launch a server that automatically reloads in the browser upon file changes:
```
gulp serve
```

To build the project into `dist/`, run:
```
gulp build
```

To build the project, and then serve it from the `dist/` directory, run:
```
gulp serve:dist
```

To run Karma for unit tests, or Protractor for end-to-end tests:
```
gulp test
gulp protractor
```




[ergast]:http://ergast.com/mrd/
[license-nc-sa]:http://creativecommons.org/licenses/by-nc-sa/3.0/

[git]:https://git-scm.com/
[node]:https://nodejs.org
[npm]:https://npmjs.org
[bower]:https://bower.io
[yo-gulp-ng]:https://github.com/Swiip/generator-gulp-angular
[gulp]:https://gulpjs.com
