const environment = process.env.NODE_ENV;
const config = require('../../configuration/' + environment + '.js');
const AWS = require("aws-sdk"); 

process.env["AWS_SAM_STACK_NAME"] = config.test.stackName;

/**
 * Get stack name from environment variable AWS_SAM_STACK_NAME and make an API call to verify the stack exists.
 * throw exception if AWS_SAM_STACK_NAME is not set.
 */
const getAndVerifyStackName = async () => {
  const stackName = process.env["AWS_SAM_STACK_NAME"];
  if (!stackName) {
    throw new Error(
      "Cannot find env var AWS_SAM_STACK_NAME.\n" +
        "Please setup this environment variable with the stack name where we are running integration tests."
    );
  }

  const client = new AWS.CloudFormation({
    region: config.region
  });
  try {
    await client
      .describeStacks({
        StackName: stackName,
      })
      .promise();
  } catch (e) {
    console.log(e)
    throw new Error(
      `Cannot find stack ${stackName}: ${e.message}\n` +
        `Please make sure stack with the name "${stackName}" exists.`
    );
  }

  return stackName;
};

/**
 * Make sure env variable AWS_SAM_STACK_NAME exists with the name of the stack we are going to test.
 */
describe("Test Function Invoke", function () {
  let functionName;

  /**
   * Based on the provided stack name,
   * here we use cloudformation API to find out what the helloFromLambdaFunction is
   */
  beforeAll(async () => {
    const stackName = await getAndVerifyStackName();

    const client = new AWS.CloudFormation({
      region: config.region
    });
    const response = await client
      .listStackResources({
        StackName: stackName,
      })
      .promise();

    const resources = response.StackResourceSummaries;

    console.log(resources);

    const functionResource = resources.find(
      (resource) => resource.LogicalResourceId === "national-museum-prints-api"
    );

    console.log(functionResource)

    expect(functionResource).not.toBe(undefined);

    functionName = functionResource.PhysicalResourceId;
  });

  /**
   * Calling the helloFromLambdaFunction using AWS API
   */
  it("Function should be invokable", async () => {

    const client = new AWS.Lambda({
      region: config.region
    });
    const response = await client
      .invoke({
        FunctionName: config.test.lambdaFunctionName,
        Payload: `{}`,
      })
      .promise();

    expect(response.StatusCode).toBe(200);

  });
});
