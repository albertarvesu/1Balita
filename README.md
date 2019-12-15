# 1Balita

1Balita is a Philippine online news aggregator from local news providers. It aims to provide a user to read news coming from multiple sources. The application is currently accessible in [1balita.com](http://1balita.com).

## News Providers

News items were being fetched from the timeline of tweets of popular Philippine news providers and can be configured from the file named `providers.json`.

## Development Setup

Requirements: Node.js, Docker, internet access

### Installing Node.js

Follow instructions for downloading and installing Node.js for your operating system from the [official Node.js website](https://nodejs.org/en/download/).

Ensure you are installing Node 10 or greater and npm 6 or greater.

### Installing Docker

See the [Docker installation "Supported platforms"](https://docs.docker.com/install/#supported-platforms) section and follow the instructions to download & install Docker Desktop for your operating system (or Docker CE for Linux).

You can find more resources on Docker here:

- [Docker: What and Why](https://stackoverflow.com/questions/28089344/docker-what-is-it-and-what-is-the-purpose)
- [Docker Lessons on KataCoda](https://www.katacoda.com/learn?q=docker)
- [Play with Docker Classroom](https://training.play-with-docker.com/)

### Starting the Development Server

Open up Terminal/Powershell/bash and navigate to the directory where you want the project to live.

Clone this repository:

```
git clone https://github.com/albertarvesu/1Balita
```

Navigate to the newly cloned repo:

```
cd 1Balita
```

Install dependencies:

```
npm install
```

Ensure that Docker Desktop is up and running, then run the following command:

```
docker-compose up
```

Wait for the logs to show "server started on port 3000", then navigate to `localhost` to view the app.

The server will automatically restart anytime you save a `.ts` or `.js` file within the `server/` directory.
