export default {
  type: "jsx",
  title: "Common Git Commands",
  desc: "A collection of frequently used Git commands and their descriptions.",
  sheets: [
    {
      category: "Basic Commands",
      sheet: [
        {
          snippet: "git init",
          sheetDesc: "Initialize a new Git repository",
        },
        {
          snippet: "git clone <repo>",
          sheetDesc: "Clone a repository",
        },
        {
          snippet: "git status",
          sheetDesc: "Show the working tree status",
        },
        {
          snippet: "git log",
          sheetDesc: "Show commit history",
        },
      ],
    },
    {
      category: "Working with Commits",
      sheet: [
        {
          snippet: "git add <file>",
          sheetDesc: "Add a file to the staging area",
        },
        {
          snippet: "git add .",
          sheetDesc: "Add all files to the staging area",
        },
        {
          snippet: 'git commit -m "message"',
          sheetDesc: "Commit the staged changes with a message",
        },
        {
          snippet: "git commit --amend",
          sheetDesc: "Amend the last commit",
        },
      ],
    },
    {
      category: "Branching and Merging",
      sheet: [
        {
          snippet: "git branch",
          sheetDesc: "List all branches",
        },
        {
          snippet: "git branch <branch-name>",
          sheetDesc: "Create a new branch",
        },
        {
          snippet: "git checkout <branch-name>",
          sheetDesc: "Switch to another branch",
        },
        {
          snippet: "git merge <branch-name>",
          sheetDesc: "Merge a branch into the current branch",
        },
      ],
    },
    {
      category: "Remote Repositories",
      sheet: [
        {
          snippet: "git remote add origin <url>",
          sheetDesc: "Add a remote repository",
        },
        {
          snippet: "git push origin <branch-name>",
          sheetDesc: "Push a branch to the remote repository",
        },
        {
          snippet: "git pull",
          sheetDesc: "Fetch and merge changes from the remote repository",
        },
        {
          snippet: "git fetch",
          sheetDesc: "Fetch changes from the remote repository without merging",
        },
      ],
    },
    {
      category: "Undoing Changes",
      sheet: [
        {
          snippet: "git reset <file>",
          sheetDesc: "Unstage a file",
        },
        {
          snippet: "git checkout -- <file>",
          sheetDesc: "Discard changes in a file",
        },
        {
          snippet: "git revert <commit>",
          sheetDesc: "Revert a specific commit",
        },
        {
          snippet: "git reset --hard",
          sheetDesc: "Reset the working directory to the last commit",
        },
      ],
    },
    {
      category: "Stashing",
      sheet: [
        {
          snippet: "git stash",
          sheetDesc: "Stash the current changes",
        },
        {
          snippet: "git stash pop",
          sheetDesc: "Apply the latest stash and remove it from the stash list",
        },
        {
          snippet: "git stash apply",
          sheetDesc: "Apply the latest stash without removing it",
        },
        {
          snippet: "git stash list",
          sheetDesc: "List all stashes",
        },
      ],
    },
    {
      category: "Tagging",
      sheet: [
        {
          snippet: "git tag <tag-name>",
          sheetDesc: "Create a new tag",
        },
        {
          snippet: "git tag",
          sheetDesc: "List all tags",
        },
        {
          snippet: "git push origin <tag-name>",
          sheetDesc: "Push a tag to the remote repository",
        },
        {
          snippet: "git push --tags",
          sheetDesc: "Push all tags to the remote repository",
        },
      ],
    },
    {
      category: "Git Configuration",
      sheet: [
        {
          snippet: 'git config --global user.name "Your Name"',
          sheetDesc: "Set the global Git username",
        },
        {
          snippet: 'git config --global user.email "you@example.com"',
          sheetDesc: "Set the global Git email",
        },
        {
          snippet: "git config --list",
          sheetDesc: "List all Git configuration settings",
        },
        {
          snippet: "git config --global core.editor <editor>",
          sheetDesc: "Set the default editor for Git",
        },
      ],
    },
  ],
};
