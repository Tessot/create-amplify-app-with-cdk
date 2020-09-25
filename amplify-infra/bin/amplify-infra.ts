#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AmplifyInfraStack } from '../lib/amplify-infra-stack';

const app = new cdk.App();
new AmplifyInfraStack(app, 'AmplifyInfraStack');
