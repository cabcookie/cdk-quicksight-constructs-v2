const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Carsten Koch',
  authorAddress: 'carsten.b.koch@gmail.com',
  cdkVersion: '2.40.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-quicksight-constructs-v2',
  repositoryUrl: 'https://github.com/cabcookie/cdk-quicksight-constructs-v2.git',
  description: 'Constructs to create and manage resources in QuickSight',
  keywords: [
    'aws-cdk',
    'aws-quicksight',
    'quicksight',
  ],
  license: 'MIT',

  // Runtime dependencies of this module.
  deps: [
    'cdk-iam-floyd@0.391.0',
  ],
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */

  publishDryRun: true,
});

// Fixing problem with version 3.0.0 of @types/responselike
project.package.addField('resolutions', {
  'got': '12.3.1',
  '@types/responselike': '1.0.0',
});

project.synth();