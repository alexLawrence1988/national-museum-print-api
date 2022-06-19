
# national-museum-print-api

national-museum-print-api is a serverless graphql API which calls the National Museum API.

It can be used to query the following:

### "A feed of all public items of any classification, paged and ordered however you choose. The items returned must have images and have been verified to the ‘Best’ standard."

It uses AWS SAM to contruct a cloudformation stack. This stack then deploys the following architecture within AWS:

<iframe src="https://drive.google.com/file/d/1ltPtOUZYM_5rZLXPRFeTNHZQxWiMVtz9/preview" width="640" height="480" allow="autoplay"></iframe>

## Live demo
This api have been deployed to a cloud development environment within AWS.

You can access the live GraphQL playground here:

https://dev.heniapi.com/national-museum-prints/graphql

## Project contents
This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI). It includes the following files and folders:

  

-  `src` - Code for the application's Lambda function.

-  `__tests__` - Unit tests for the application code.

-  `sam.{environment}.yml` - An environment specific template that defines the application's AWS resources.

  

Resources for this project are defined in the `sam.{environment}.yml` file in this project. You can update the template to add AWS resources through the same deployment process that updates your application code.

  

If you prefer to use an integrated development environment (IDE) to build and test your application, you can use the AWS Toolkit.

The AWS Toolkit is an open-source plugin for popular IDEs that uses the AWS SAM CLI to build and deploy serverless applications on AWS. The AWS Toolkit also adds step-through debugging for Lambda function code.



## Pre-requisites

  

To run this API locally, please first ensure you have the following tools installed:

  
* AWS-SDK
* AWS SAM CLI - [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).

* Node.js - [Install Node.js 12](https://nodejs.org/en/), including the npm package management tool.

* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community).

 ## Get started

To run the api locally, clone this repo and run the following:
```bash

npm i

npm run serve

```
This will create a local API Gateway and lambda, which is hosted in a docker image running locally.

You can visit the locally running GraphQL dashboard here:

http://127.0.0.1:3000/graphql

Full API description as well as GraphQL schema definitions are also available here.

  ## Build and deploy

To build and deploy your application for the first time, run the following in your shell:

  

```bash

sam build

sam deploy --guided

```

  Please note that this project contains specific naming and deployment configurations that you will need to customize if you wish to deploy to your own AWS account.

The first command will build the source of your application. The second command will package and deploy your application to AWS, with a series of prompts:

  

*  **Stack Name**: The name of the stack to deploy to CloudFormation. This should be unique to your account and region, and a good starting point would be something matching your project name.

*  **AWS Region**: The AWS region you want to deploy your app to.

*  **Confirm changes before deploy**: If set to yes, any change sets will be shown to you before execution for manual review. If set to no, the AWS SAM CLI will automatically deploy application changes.

*  **Allow SAM CLI IAM role creation**: Many AWS SAM templates, including this example, create AWS IAM roles required for the AWS Lambda function(s) included to access AWS services. By default, these are scoped down to minimum required permissions. To deploy an AWS CloudFormation stack which creates or modifies IAM roles, the `CAPABILITY_IAM` value for `capabilities` must be provided. If permission isn't provided through this prompt, to deploy this example you must explicitly pass `--capabilities CAPABILITY_IAM` to the `sam deploy` command.

*  **Save arguments to samconfig.toml**: If set to yes, your choices will be saved to a configuration file inside the project, so that in the future you can just re-run `sam deploy` without parameters to deploy changes to your application.

  

  

## Tests

  

Tests are defined in the `__tests__` folder in this project. Use `npm` to install the [Jest test framework](https://jestjs.io/) and run tests.

  

```bash

my-application$ npm install

# Unit test

my-application$ npm run test

# Integration test, requiring deploying the stack first.

# Create the env variable AWS_SAM_STACK_NAME with the name of the stack we are testing

my-application$ AWS_SAM_STACK_NAME=<stack-name> npm run integ-test

```

  

## Cleanup

  

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

  

```bash

aws cloudformation delete-stack --stack-name national-museum-print-api

```

  

## Resources

  

For an introduction to the AWS SAM specification, the AWS SAM CLI, and serverless application concepts, see the [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html).

  

Next, you can use the AWS Serverless Application Repository to deploy ready-to-use apps that go beyond Hello World samples and learn how authors developed their applications. For more information, see the [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/) and the [AWS Serverless Application Repository Developer Guide](https://docs.aws.amazon.com/serverlessrepo/latest/devguide/what-is-serverlessrepo.html).