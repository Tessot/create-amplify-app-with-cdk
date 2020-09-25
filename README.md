## Deploying a Static Website with AWS Amplify and CDK

This is a sample source code for deploying Amplify Application with AWS CDK with source code in either CodeCommit or GitHub

### Getting started

To deploy this project, follow these steps.<br />

1. Clone the project <br/>
   `git clone https://github.com/Tessot/create-amplify-app-with-cdk`

2. Commit the project folder to the source repository you would want to use (supports CodeCommit, GitHub and GitLab)

3. Update the CDK code based on the selected source code repository <br/>
   `open and edit the file "create-amplify-app-with-cdk/amplifyinfra/lib/amplify-infra-stack.ts"`

4. Change into the directories and install dependencies <br/>
   `cd create-amplify-app-with-cdk`<br/>
   `npm install` <br/><br/>
   `cd create-amplify-app-with-cdk/amplify-infra` <br/>
   `npm install`

5. Run the build <br/>
   `cd amplify-infra`
   `npm run build`

6. Deploy the stack <br/>
   `cdk deploy`

For more details around how to set this project up read the blog here https://aws.amazon.com/blogs/mobile/deploying-a-static-website-with-aws-amplify-and-cdk/
