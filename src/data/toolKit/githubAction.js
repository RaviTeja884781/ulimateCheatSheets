export default {
  type: "jsx",
  title: "GitHub Actions Workflow Commands",
  desc: "A quick reference for GitHub Actions YAML configurations to automate your development workflows.",
  sheets: [
    {
      category: "Workflow Basics",
      sheet: [
        {
          snippet: "name: CI Workflow",
          sheetDesc: "Defines the name of the workflow",
        },
        {
          snippet: "on: [push, pull_request]",
          sheetDesc: "Triggers the workflow on 'push' or 'pull request' events",
        },
        {
          snippet: "on: push",
          sheetDesc: "Runs the workflow on 'push' event",
        },
        {
          snippet: "on: schedule",
          sheetDesc: "Triggers the workflow on a schedule using cron syntax",
        },
        {
          snippet: "on: workflow_dispatch",
          sheetDesc: "Allows manual triggering of the workflow",
        },
      ],
    },
    {
      category: "Jobs",
      sheet: [
        {
          snippet: "jobs:",
          sheetDesc: "Defines a list of jobs in the workflow",
        },
        {
          snippet: "jobs.build:",
          sheetDesc: "Defines a job named 'build'",
        },
        {
          snippet: "runs-on: ubuntu-latest",
          sheetDesc: "Specifies the runner environment for the job",
        },
        {
          snippet: "steps:",
          sheetDesc: "List of steps to execute within a job",
        },
        {
          snippet: "needs: [test]",
          sheetDesc:
            "Specifies job dependencies; ensures the 'test' job finishes first",
        },
      ],
    },
    {
      category: "Steps",
      sheet: [
        {
          snippet: "steps: - name: Checkout code",
          sheetDesc: "Step with a name 'Checkout code'",
        },
        {
          snippet: "uses: actions/checkout@v2",
          sheetDesc:
            "Checks out the repository code using GitHub's built-in checkout action",
        },
        {
          snippet: "run: npm install",
          sheetDesc: "Runs a command directly in the job",
        },
        {
          snippet: "run: echo 'Hello World!'",
          sheetDesc: "Runs an echo command as a step",
        },
        {
          snippet: "with:",
          sheetDesc:
            "Passes parameters to an action (for example, passing arguments to a command)",
        },
        {
          snippet: "env:",
          sheetDesc: "Defines environment variables for the step",
        },
      ],
    },
    {
      category: "Actions",
      sheet: [
        {
          snippet: "uses: actions/setup-node@v2",
          sheetDesc:
            "Uses an action from the GitHub Marketplace, like setting up Node.js",
        },
        {
          snippet: "with: node-version: '14'",
          sheetDesc:
            "Specifies which version of Node.js to use in the setup action",
        },
        {
          snippet: "uses: actions/cache@v2",
          sheetDesc: "Caches dependencies between jobs (e.g., npm, Yarn, etc.)",
        },
        {
          snippet: "id: cache-node-modules",
          sheetDesc:
            "Gives an ID to a step so that other steps can reference it",
        },
        {
          snippet: "run: npm ci",
          sheetDesc: "Runs npm’s clean install",
        },
      ],
    },
    {
      category: "Environment Variables",
      sheet: [
        {
          snippet: "env: NODE_ENV: 'production'",
          sheetDesc: "Defines environment variables for a job",
        },
        {
          snippet: "env: CI: true",
          sheetDesc: "Sets an environment variable to true",
        },
        {
          snippet: "run: echo ${{ github.actor }}",
          sheetDesc:
            "Accesses built-in GitHub context to display the actor (username)",
        },
        {
          snippet: "run: echo $GITHUB_REF",
          sheetDesc:
            "Accesses the GITHUB_REF environment variable for branch or tag",
        },
      ],
    },
    {
      category: "Secrets and Encryption",
      sheet: [
        {
          snippet: "secrets:",
          sheetDesc:
            "Defines secrets that are encrypted and accessible to the workflow",
        },
        {
          snippet: "secrets.GITHUB_TOKEN",
          sheetDesc: "Accesses the default GitHub token available in workflows",
        },
        {
          snippet: "env: SECRET_KEY: ${{ secrets.SECRET_KEY }}",
          sheetDesc: "Uses secrets stored in the repository settings",
        },
        {
          snippet: "run: echo ${{ secrets.MY_SECRET }}",
          sheetDesc:
            "Prints the secret in the command (for debugging purposes)",
        },
      ],
    },
    {
      category: "Conditional Execution",
      sheet: [
        {
          snippet: "if: github.ref == 'refs/heads/main'",
          sheetDesc: "Runs the step only if the current branch is 'main'",
        },
        {
          snippet: "if: success()",
          sheetDesc: "Runs the step if the previous step was successful",
        },
        {
          snippet: "if: failure()",
          sheetDesc: "Runs the step if a previous step failed",
        },
        {
          snippet: "continue-on-error: true",
          sheetDesc: "Continues running the workflow even if the step fails",
        },
      ],
    },
    {
      category: "Matrix Builds",
      sheet: [
        {
          snippet: "strategy: matrix:",
          sheetDesc:
            "Defines a matrix strategy to run the job in parallel across different environments",
        },
        {
          snippet: "node-version: [12, 14, 16]",
          sheetDesc: "Runs the job on multiple Node.js versions (12, 14, 16)",
        },
        {
          snippet: "os: [ubuntu-latest, macos-latest, windows-latest]",
          sheetDesc: "Runs the job on different operating systems",
        },
      ],
    },
    {
      category: "Artifacts and Caching",
      sheet: [
        {
          snippet: "uses: actions/upload-artifact@v2",
          sheetDesc:
            "Uploads an artifact (e.g., build files, test results) for later use",
        },
        {
          snippet: "with: name: build-files path: ./build",
          sheetDesc: "Defines the name and path of the artifact to upload",
        },
        {
          snippet: "uses: actions/download-artifact@v2",
          sheetDesc: "Downloads an artifact from a previous workflow run",
        },
        {
          snippet: "uses: actions/cache@v2",
          sheetDesc:
            "Caches dependencies (e.g., npm or Yarn cache) to speed up future runs",
        },
      ],
    },
    {
      category: "Notifications",
      sheet: [
        {
          snippet: "uses: actions/slack@v2",
          sheetDesc: "Sends a notification to Slack on success or failure",
        },
        {
          snippet:
            "with: channel: '#ci-notifications' message: 'Build ${{ status }}'",
          sheetDesc: "Specifies Slack channel and message format",
        },
        {
          snippet: "if: failure()",
          sheetDesc: "Sends the notification only if the workflow fails",
        },
      ],
    },
    {
      category: "Testing",
      sheet: [
        {
          snippet: "run: npm test",
          sheetDesc: "Runs the npm test command",
        },
        {
          snippet: "run: jest --coverage",
          sheetDesc: "Runs tests with coverage reports using Jest",
        },
        {
          snippet: "run: python -m unittest discover",
          sheetDesc: "Runs unit tests in a Python environment",
        },
        {
          snippet:
            "uses: actions/upload-artifact@v2 with: name: test-results path: ./test-results",
          sheetDesc: "Uploads test results as an artifact",
        },
      ],
    },
  ],
};
