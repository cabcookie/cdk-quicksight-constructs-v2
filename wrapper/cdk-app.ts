import { App, CfnOutput, Stack } from "aws-cdk-lib";
import { QuickSightTestConstruct } from "../src";

const app = new App();
const stack = new Stack(app, "WrapperStack");

const testContruct = new QuickSightTestConstruct(stack, 'QSC');

new CfnOutput(stack, 'BucketName', {
  value: testContruct.bucketName,
});
