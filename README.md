# Project Front-End Notes App Back-End Fundamentals
Running a project in production:

Required:
- NodeJS Fermium (14.x)

Clone this repository and `cd` into it:
```shell
git clone https://github.com/stackpan/notes-client
```

Configure `.env` file. By copying it from `.env.example` file
```shell
cp .env.example .env
```

set `NEXT_PUBLIC_SERVER_URL` value to your backend server url

Final steps:
```shell
npm install

npm run build

npm start
```
