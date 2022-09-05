const { awscdk } = require('projen');
const { ReleaseTrigger } = require('projen/lib/release');
const project = new awscdk.AwsCdkConstructLibrary({
  name: 'cdk-quicksight-constructs-v2',
  description: 'Constructs to create and manage resources in QuickSight',
  author: 'Carsten Koch',
  authorOrganization: false,
  authorAddress: 'carsten.b.koch@gmail.com',
  entrypoint: 'lib/index.js',
  repositoryUrl: 'https://github.com/cabcookie/cdk-quicksight-constructs-v2.git',

  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  defaultReleaseBranch: 'main',
  releaseTrigger: ReleaseTrigger.manual(),
  keywords: [
    'aws-cdk',
    'aws-quicksight',
    'quicksight',
  ],
  license: 'MIT',

  cdkVersion: '2.40.0',
  deps: [
    'cdk-iam-floyd@0.391.0',
  ],
  devDeps: [
    'ts-node@^10.9.1',
    'cdk-dia@^0.7.0',
  ],

  publishDryRun: true,
});

// Fixing problem with version 3.0.0 of @types/responselike
project.package.addField('resolutions', {
  'got': '12.3.1',
  '@types/responselike': '1.0.0',
});

project.eslint.addIgnorePattern('wrapper/');
project.addGitIgnore('cdk.out/');
project.setScript('cdk', 'cdk');

project.synth();