# Next.js + Tailwind CSS + Airtable + Auth0 App

This app shows how to tie in Next.js with Airtable as its serverless backend. This is a simple todo app that users will log into to see their todos. Building it was fun and interesting.

## Setup

Clone the Repo

```bash
git clone https://github.com/KellsLTE/nextjs-airtable-todo-app.git
```

Cd into the directory and set it up with this command

```bash
npm install
```
Go to Airtable and create your base [Airtable](https://airtable.com)

Then head to Auth0 and create an app [Auth0](https://auth0.com)

## How to use

Create your .env file and populate the fields you find in .env.example with the credentials you got from Airtable and Auth0

Run your app

```bash
npm run dev
```

```bash
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
