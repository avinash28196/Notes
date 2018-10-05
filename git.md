

## init

    $ git init

Creates the initial `.git/` subdirectory.
Starts with `master` branch, with `HEAD` pointed to it.

## add

    $ git add <files|dirs>

An add performs the following:

* Adds the current version of the file to the index.
* Adds a blob object to the object DB for the current version of the file if that version isn't already stored.

Directories are processed recursively — all files in the entire subtree (and the directories that contain them) will be added.

Empty directories are not added, which is why you will sometimes see people add an empty file called `.keep` inside them if they want them to be added.

    $ git add -A|--all

Adds the current version of all files are already tracked.

## commit

    $ git commit

A commit performs the following:

* Adds a tree object to the object DB for the staged version of each directory if that version isn't already stored.
* Adds a commit object to the object DB with the commit metadata and a reference to the root tree object and previous commits (if any).
* Moves the current branch forward (points current branch at the new commit).

Git will open your default editor to enter your commit message.
After you save and exit the editor, the commit will complete.

    $ git commit -m "log message"

Specify the commit message inline instead of launching an editor.

    $ git commit -a

Will perform the equivalent of `git add -A` before performing the commit.

## remove

    $ git rm <files>

A remove performs the following:

* Removes the file from the index.  The next time you commit, the file will be gone and no longer tracked.
* Removes the file from the working tree if it still exists.

```
$ git rm --staged <files>
```

This will only remove the file from the index, while leaving the file in the working tree.

## branch <branch>

    $ git branch <branch>

Creates a new branch pointed at the current commit, but doesn't switch HEAD (current branch pointer) to it.

    $ git branch -d <branch>

Deletes the branch.
This just deletes the pointer, not the commits or their contents — though unreferenced objects do get garbage collected after a while.

## checkout

    $ git checkout <branch>

A checkout performs the following:

* Switches HEAD (current branch pointer) to the specified branch.
* Updates the working tree to match the snapshot at the tip (latest commit) of the specified branch.
* Updates the index to match the snapshot at the tip (latest commit) of the specified branch.

If you have changes in your working tree that haven't been committed, Git will attempt to carry those changes over to the new working tree if they can be merged in without conflict.
(If not, it will let you know.)

    $ git checkout -b <branch>

Shortcut to create and switch to branch with one command.
Equivalent to: `git branch <branch> && git checkout <branch>`

    $ git checkout -b <branch> <ref>

Let's you create a branch off the specified ref instead of HEAD (your current position).
The ref can be a commit, a tag, or another branch.

## merge

    $ git merge <branch>

Merge branch into current branch.

## status

    $ git status

Prints a summary of the state of your working tree and the index:

* untracked files (that aren't ignored via `.gitignore`)
* tracked files that have unstaged modifications
* tracked files that have staged modifications

## diff

    $ git diff [paths]

Compares working directory (or specified paths) to index.

    $ git diff --staged

Compares index to repository.

## log

    $ git log [paths]

Display reverse chronological history of commits on current branch.
If paths specified, will only show commits affecting those paths.

The `log` command has many useful filter and formatting options.

## show-ref

    $ git show-ref

Lists references in your repository.
By default, shows the tags, heads (branches), and remote refs.
