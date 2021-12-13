const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'devx-playground',
});
project.synth();