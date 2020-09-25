## Deploying a Static Website with AWS Amplify and CDK

This is a sample source code for deploying Amplify Application with AWS CDK with source code in either CodeCommit or GitHub

![Image of the steps to deploy Amplify App via CDK]
(https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2020/09/16/Picture1_updated.png)

### Getting started

To deploy this project, follow these steps.

1. Clone the project

```sh
git clone https://github.com/Tessot/create-amplify-app-with-cdk
```

2. Commit the project folder to the source repository you would want to use (supports CodeCommit, GitHub and GitLab)

3. Update the CDK code based on the selected source code repository

```sh
open and edit the file "create-amplify-app-with-cdk/amplifyinfra/lib/amplify-infra-stack.ts"
```

4. Change into the directories and install dependencies

```sh
cd create-amplify-app-with-cdk

npm install

cd create-amplify-app-with-cdk/amplify-infra

npm install
```

5. Run the build

```sh
cd amplify-infra

npm run build
```

6. Deploy the stack

```sh
cdk deploy
```

For more details on this project, read the blog here https://aws.amazon.com/blogs/mobile/deploying-a-static-website-with-aws-amplify-and-cdk/
