If NPM not installed then refer to:

- https://nodejs.org/en/download/
  ​
  Install JS dependecies:
  On root directory run on command/terminal
- npm install
- npm update
  ​
  If gulp command line utility not installed:
  Anywhere Run
- npm install --global gulp-cli
  ​
  Run Gulp once for bundle and minifying of JS file:
- gulp bundle_minify_js
  ​
  Or if going to make continous changes then run gulp watch js:
- gulp watch_js_changes
  ​
  If you want on detached mode(creates background process) run it appending &
- gulp watch_js_changes &
  ​
  If Docker not installed then refer to:
- https://docs.docker.com/get-docker/
  ​
  Build and run Docker Image:
  #my-build-name can be any name you wish
  #my-running-app can be any name you wish
  #8080 can be changed to another port
- docker build -t my-build-name .
- docker run -dit --name my-running-app -p 8080:80 my-build-name
  ​
  Stop/Start/Restart Container:
- docker stop my-running-app
- docker start my-running-app
- docker restart my-running-app
