# GIT

### Test installation

```
$ git --version
```

### Configuring name and email

```
$ git config --global user.name "Your Name"
$ git config --global user.email "your@email.com"
```

### Initializing repo

```
$ git init
```

### Clone repo
```
$ git clone <url>
```

### Status of the repo
```
$ git status
```

### See diferences of unstaged files
```
$ git diff
```
For comparing staged and last versions:
```
$ git diff --staged
```
_Press 'Enter' to show more_ 
_Press 'q' for quit_
_Press 'h' for help_

### Staging files
```
$ git add <file-name-1> <file-name-2>
```
To add all files:
```
$ git add .
```

### Undo stage file
```
$ git reset <file-name>
```

### Commit staged files
```
$ git commit -m "Commit message"
```

### Commits history
```
$ git log
```
### Get back to commit
```
$ git checkout <commit-hash>
```

## Branchs
### List branchs
```
$ git branch
```

### Create new branch
```
$ git branch <branch-name>
```

### Go to branch
```
$ git checkout <branch-name>
```

### Merge current branch to another branch
```
$ git merge <another-branch-name>
```

### Delete branch
```
$ git branch -d <branch-name>
```
