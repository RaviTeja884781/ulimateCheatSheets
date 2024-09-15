export default {
  type: "jsx",
  title: "GitHub CLI (gh) Commands",
  desc: "A quick reference for GitHub CLI commands to manage repositories, issues, pull requests, and more from the command line.",
  sheets: [
    {
      category: "Authentication",
      sheet: [
        {
          snippet: "gh auth login",
          sheetDesc: "Authenticate with GitHub via the CLI",
        },
        {
          snippet: "gh auth logout",
          sheetDesc: "Log out of GitHub via the CLI",
        },
        {
          snippet: "gh auth status",
          sheetDesc: "View the authentication status",
        },
      ],
    },
    {
      category: "Repository Management",
      sheet: [
        {
          snippet: "gh repo create",
          sheetDesc: "Create a new GitHub repository",
        },
        {
          snippet: "gh repo clone <repository>",
          sheetDesc: "Clone a GitHub repository",
        },
        {
          snippet: "gh repo fork <repository>",
          sheetDesc: "Fork a repository",
        },
        {
          snippet: "gh repo view <repository>",
          sheetDesc: "View the repository details",
        },
        {
          snippet: "gh repo list",
          sheetDesc: "List all repositories for the authenticated user",
        },
        {
          snippet: "gh repo delete <repository>",
          sheetDesc: "Delete a repository",
        },
      ],
    },
    {
      category: "Issues",
      sheet: [
        {
          snippet: "gh issue list",
          sheetDesc: "List issues in the repository",
        },
        {
          snippet: "gh issue view <issue-number>",
          sheetDesc: "View a specific issue",
        },
        {
          snippet: "gh issue create",
          sheetDesc: "Create a new issue",
        },
        {
          snippet: "gh issue close <issue-number>",
          sheetDesc: "Close an issue",
        },
        {
          snippet: "gh issue reopen <issue-number>",
          sheetDesc: "Reopen a closed issue",
        },
      ],
    },
    {
      category: "Pull Requests",
      sheet: [
        {
          snippet: "gh pr list",
          sheetDesc: "List open pull requests",
        },
        {
          snippet: "gh pr view <pr-number>",
          sheetDesc: "View details of a specific pull request",
        },
        {
          snippet: "gh pr create",
          sheetDesc: "Create a new pull request",
        },
        {
          snippet: "gh pr checkout <pr-number>",
          sheetDesc: "Check out the pull request branch",
        },
        {
          snippet: "gh pr merge <pr-number>",
          sheetDesc: "Merge a pull request",
        },
        {
          snippet: "gh pr close <pr-number>",
          sheetDesc: "Close a pull request",
        },
      ],
    },
    {
      category: "Workflow and Actions",
      sheet: [
        {
          snippet: "gh workflow list",
          sheetDesc: "List all GitHub Actions workflows",
        },
        {
          snippet: "gh workflow view <workflow-id>",
          sheetDesc: "View details of a specific workflow",
        },
        {
          snippet: "gh workflow run <workflow-id>",
          sheetDesc: "Trigger a workflow run",
        },
        {
          snippet: "gh run list",
          sheetDesc: "List recent workflow runs",
        },
        {
          snippet: "gh run view <run-id>",
          sheetDesc: "View details of a specific workflow run",
        },
        {
          snippet: "gh run watch <run-id>",
          sheetDesc: "Watch a workflow run and its status",
        },
      ],
    },
    {
      category: "Gists",
      sheet: [
        {
          snippet: "gh gist create <file>",
          sheetDesc: "Create a new gist from a file",
        },
        {
          snippet: "gh gist list",
          sheetDesc: "List all gists for the authenticated user",
        },
        {
          snippet: "gh gist view <gist-id>",
          sheetDesc: "View a specific gist",
        },
        {
          snippet: "gh gist delete <gist-id>",
          sheetDesc: "Delete a gist",
        },
      ],
    },
    {
      category: "Notifications",
      sheet: [
        {
          snippet: "gh notification list",
          sheetDesc: "List all notifications",
        },
        {
          snippet: "gh notification view <notification-id>",
          sheetDesc: "View a specific notification",
        },
        {
          snippet: "gh notification mark-read <notification-id>",
          sheetDesc: "Mark a notification as read",
        },
      ],
    },
    {
      category: "Managing Issues and PR Comments",
      sheet: [
        {
          snippet: 'gh issue comment <issue-number> -b "Comment body"',
          sheetDesc: "Comment on an issue",
        },
        {
          snippet: 'gh pr comment <pr-number> -b "Comment body"',
          sheetDesc: "Comment on a pull request",
        },
        {
          snippet: "gh pr review <pr-number> -c",
          sheetDesc: "Add a review comment to a pull request",
        },
        {
          snippet: "gh pr review <pr-number> -a",
          sheetDesc: "Approve a pull request",
        },
        {
          snippet: "gh pr review <pr-number> -r",
          sheetDesc: "Request changes on a pull request",
        },
      ],
    },
    {
      category: "Milestones and Labels",
      sheet: [
        {
          snippet: "gh label create <label-name>",
          sheetDesc: "Create a new label",
        },
        {
          snippet: "gh label list",
          sheetDesc: "List all labels for a repository",
        },
        {
          snippet: "gh label delete <label-name>",
          sheetDesc: "Delete a label",
        },
        {
          snippet: "gh milestone create <milestone-name>",
          sheetDesc: "Create a new milestone",
        },
        {
          snippet: "gh milestone list",
          sheetDesc: "List all milestones for a repository",
        },
        {
          snippet: "gh milestone close <milestone-number>",
          sheetDesc: "Close a milestone",
        },
      ],
    },
  ],
};
