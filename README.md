## Website Design to host a menu for a sushi business.

In this I am using AWS amplify Gen 2.0 to host a simple static website for a menu for a sushi business.

On the menu page, I created re-useable components so that this can be copied over with multiple restaurants and food items. 
It also includes a google map integrated to show the location of the restaurant (currently just St Helier as this is not real).

The food items have a counter and the total in the footer is reactive. There is also a clear button next to the Total in the footer, which will properly reset all of the items counters and reduce the cost back to 0.
This is achieved by having a state tracked which is a record of <string, [number, number]>, where the string is the id of the food item and the array is the price of the food item and the total number being ordered.

This allows the memoised total cost to be calculated each time the order changes by iterating through only the values of the food items, as it has the price and the ordered amount, as we don't need the id for the actual cost calculation, especially as this is just a menu page. This just allows you to work out the price before placing the order.

## DESIGN

Experimenting with tailwind, hence the gradients. I created a colour scheme to import and use, but decided against it in the end.

## TODO

- Make it look reasonable on mobile as its currently only designed for medium+ screen sizes.
- move the current restaurant into a temp file for loading
- move all the current main components into a "Main" components which will pick up the restaurant data and then load everything necessary

- If time, link this to proper DB service, probably S3 to store pages and possibly even the restaurant info to call via Lambda, or dynamoDB.



----


## AWS Amplify React+Vite Starter Template

This repository provides a starter template for creating applications using React+Vite and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational React application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
