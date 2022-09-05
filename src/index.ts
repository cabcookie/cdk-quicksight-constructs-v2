import { RemovalPolicy } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

// export interface QuickSightTestConstructProps {

// }

export class QuickSightTestConstruct extends Construct {
  public readonly bucketName: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const bucket = new Bucket(this, 'QSCTestBucket', {
      removalPolicy: RemovalPolicy.DESTROY,
    });

    this.bucketName = bucket.bucketName;
  }
}