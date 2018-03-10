# wdio-docker-compose
Running wdio tests inside a docker container

## Running Docker Compose
When you run below command, it will run tests with `wdio.conf.remote.js` configuration. Each test will run on both Google Chrome
and Firefox browser.

```
docker-compose up
```

## Running docker-compose in jenkins

```
docker-compose build

docker-compose run sut

echo $?

docker cp wdiodockercompose_sut_run_1:/e2e-tests/allure-results $WORKSPACE
```
