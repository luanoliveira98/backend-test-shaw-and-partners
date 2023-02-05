# Seteps to run app

Firstly, its necessary to install the dependecies.

```bash
yarn install
```

Then you could use anyone of the following methods to run the app itself.

## CMD

You could use direct terminal commands to run the app.

```bash
yarn dev
```

## Docker

If you prefer, you could build and run the Docker container.

```bash
docker build -t [container_name] .

docker run -t [container_name]
```

## docker-compose

For last option, you can use docker-compose to run the app.

```bash
docker-compose up -d
```