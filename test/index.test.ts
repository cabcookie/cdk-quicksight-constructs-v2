import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { QuickSightTestConstruct } from '../src';

test('Construct Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'MyTestStack');
  new QuickSightTestConstruct(stack, 'MyQSTest');

  const assert = Template.fromStack(stack);
  const resource = assert.findResources('AWS::S3::Bucket');

  expect(resource).toMatchSnapshot();
});