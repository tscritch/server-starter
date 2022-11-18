# Server Starter

### Getting Started

1. Run `cp example.env .env` and fill out the missing vars in `.env`
1. Run `yarn`
1. Run `docker-compose up -d` to start the database in the background
1. If setting up the project for the first time run `npx prisma migrate dev` to apply the migrations to your local database
1. Run `yarn dev` to start the server `http://localhost:5005/graphql`
   > You can change the port with the env var `SERVER_PORT`

### Auth0

1. Create a new auth0 tenant
1. Add a new application and api to the auth0 tenant
1. Copy the `AUTH_DOMAIN` and `AUTH_AUDIENCE` values from the api in auth0 and put them in your `.env` file.
1. Create a new secret string (could be any UUID or a random group of words) - https://tools.tadscritchfield.com/uuid
1. Create a new flow action for "Post User Registration" and paste the contents of the `auth0-post-user-registration-script.js` file into the flow script builder.
1. Fill out the url that auth0 should call to create the user.
   > This could only be a localhost if you are using something like ngrok to make a local server url available on the internet. So choose your dev server url maybe.
1. Add the secret you created to the flow script builder. (The key icon with the tooltip "Secrets")
1. Add the new flow action to the "Post User Registration" flow.

### Testing

All tests are integration tests with a mock Prisma instance. This means the test will make a call to the API but will not go a database.

> https://www.prisma.io/docs/guides/testing/unit-testing  
> https://www.apollographql.com/docs/apollo-server/testing/testing

### Deployment

###### Resources

https://typescript-eslint.io/
https://www.apollographql.com/docs/apollo-server/getting-started/
https://www.prisma.io/docs/getting-started/quickstart
https://blog.logrocket.com/testing-typescript-apps-using-jest/
https://brianmorrison.me/blog/adding-authentication-to-a-nodejs-api-using-aws-cognito
