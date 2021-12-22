# DigitalBank
Digital Bank is an example online digital banking application for exploratory purposes.
## Getting Started
* Clone [this repository](https://github.com/digisic/digitalbank-gen-one)
## Prerequisites
* Install [Java SDK](https://openjdk.java.net/)
* Install [Node.js](https://nodejs.org/download/release/v12.21.0/)
* Install [Visual Studio Code](https://code.visualstudio.com/download)
## Executing VSCode
* Create a new folder and add it to the workspace
* In a new terminal run: npm init 
* Install WebdriverIO: npm install webdriverio --save-dev
* Install the client: npm install @wdio/cli
* Create the configuration file: npx wdio config
* Install Chai: npm install chai --save-dev
* Install Chai-WebdriverIO: npm install chai-webdriverio --save-dev
## Executing Tests
* Change the file wdio.conf.js: specs './tests/**/*.js'
* Add in package.json: "test": "wdio ./wdio.conf.js"
* JUnit Tests - Execute "npm run test"
## Deployment
Digital Bank can be deployed as a single standalone application service or be deployed and configured to integrate with Digital Credit.
* Docker Compose Deployment
* Deploy Digital Bank as a full stack to enable all services.
* Use ' cd  deploy/docker-compose
 docker-compose -f docker-compose-postgres.yml up'
## Interfaces
* Web Interface @ https://localhost:8080/bank
* Sample user data is created when the application is started. User credentials: jsmith@demo.io / Demo123!