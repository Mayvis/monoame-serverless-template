# Monoame serverless with swagger document template

Currently, not working with webpack, because 'swagger-ui-express' has a known [issue](https://github.com/scottie1984/swagger-ui-express/issues/90).

You can get more details from my personal [blog](https://mayvisblog.com/aws-lambda-serverless-with-swagger-js-document/) in the conclusion part.

## How to use this project

1. Git clone this project.
2. Change .env.example to .env and update .env file to your personal config.
3. Run ```npm install``` and ```npm run dev```.
4. Then you can start playing with serverless swagger by accessing ```http://localhost:3000/dev/swagger/api-docs``` in local. 🚀