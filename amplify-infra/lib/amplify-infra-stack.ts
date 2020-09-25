import * as cdk from "@aws-cdk/core";
import * as codecommit from "@aws-cdk/aws-codecommit";
import * as amplify from "@aws-cdk/aws-amplify";

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /************* Start for Code Commit Repo  ***********/
    // Part 1 [Optional] - Creation of the source control repository
    const amplifyReactSampleRepo = new codecommit.Repository(
      this,
      "AmplifyReactTestRepo",
      {
        repositoryName: "amplify-react-test-repo",
        description:
          "CodeCommit repository that will be used as the source repository for the sample react app and the cdk app",
      }
    );

    // Part 2 - Creation of the Amplify Application via CodeCommit Repo
    const amplifyApp = new amplify.App(this, "sample-react-app ", {
      sourceCodeProvider: new amplify.CodeCommitSourceCodeProvider({
        repository: amplifyReactSampleRepo,
      }),
    });
    const masterBranch = amplifyApp.addBranch("master");
    /************* End for Code Commit Repo ***********/

    /************* Start for GitHub Repo ***********/
    /*
    // Part 2 - Creation of the Amplify Application via GitHub Repo
    const amplifyApp = new amplify.App(this, "sample-react-app ", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "Tessot",
        repository: "create-amplify-app-with-cdk",
        oauthToken: cdk.SecretValue.secretsManager("github-token-access", {
          jsonField: "oauth-token",
        }),
      }),
    });
    const masterBranch = amplifyApp.addBranch("master");
    */
    /************* End for GitHub Repo ***********/
  }
}
