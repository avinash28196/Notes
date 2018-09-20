* [Commits](#commits)
* [Branches](#branches)
    * [master](#master)
    * [HEAD and Current Branch](#head-and-current-branch)
    * [Committing on a Branch](#committing-on-a-branch)
    * [Creating Branches](#creating-branches)
* [Merging](#merging)
    * [Three-Way Merge](#three-way-merge)
    * [Fast-Forward Merge](#fast-forward-merge)

---

[Git](https://git-scm.com/) is a revision control system usually used for source code, though storing binary assets is acceptable and common (preferably small ones).

Git has a radically different architecture than RCSes that came before it, so be careful when trying to apply your understanding of another system (like CVS, Subversion, or MS SourceSafe) to learning Git.
Even some commands that seem similar probably don't behave the way you expect.

It is Git's innovative architecture that makes possible Git's two "killer" features:

* **Cheap Branches** — In most previous RCSes, creating a branch was an expensive and slow operation, which discourage casual branching.  In Git, creating a branch is almost zero effort, which has significantly informed the kinds of workflows that Git users have evolved and adopted.
* **Fully Peer-to-Peer** — Most previous RCSes relied on a central repository to provide access control and control commit acceptance / rejection.  Git is completely peer-to-peer, which means no repository is more special than any other — all can operate independently, and all can communicate with each other to share data.

Git is fundamentally a content-addressable filesystem with a RCS user interface written on top of it.

## Commits

Git thinks about its data more like a stream of snapshots.
A Git repository stores a representation of many snapshots of a tree of files (usually a tree of source code) which we will call the "project".

Every time you perform a _commit_, you creating a new snapshot of your project as it exists at that point.
Each snapshot (commit) has a timestamp, commit message, and a pointer to the previous snapshot in the stream.
This builds a chain of snapshots all the way back to your initial commit.

    C1  <-  C2  <-  C3  (you are here)

You can view the history of commits, compare any two (or more) commits, jump back to a previous snapshot, etc.

## Branches

A _branch_ is simply a lightweight movable pointer to a commit.
While commits are identified by a checksum (aka _hash_) called a _SHA-1_, branches are usually given nice, meaningful names like `edge` and `feature7`.

SHA-1 is a cryptographically-secure hashing algorithm that turns any value into a 40-hexdigit string that looks like this: `8bb42b072078fe86a1b7568393bcd47929d3a784`

### master

Every new repository starts with a default branch called `master`.
There is nothing special or magical about this branch other than the fact that it's created for you, and that nearly every repository you encounter will have it.

### HEAD and Current Branch

Your git repository keeps track of your _current branch_.
(In a newly-created repository, that will obviously be `master`.)
There is a special pointer called _HEAD_ that always points to the current branch.

At any time, you can switch to another branch by _checking out_ that branch.
When you do, `HEAD` will be re-pointed at the new branch.

    C1  <-  C2  <-  C3  <-  master  <-  HEAD

### Committing on a Branch

Every time you perform a commit, the current branch pointer will be advanced (re-pointed) to that new commit.

    C1  <-  C2  <-  C3      =>    C1  <-  C2  <-  C3  <-  C4
                     ^                                     ^
                  master  <-  HEAD                      master  <-  HEAD

### Creating Branches

You can create as many branches as you want, whenever you want, pointed at any commit you want.
Just specify the commit when creating the branch.
(The default is to create a branch pointed at your current commit.)

Let's say you're on the `master` branch at C3 and want to branch off from there to work on a feature, so you create a branch called `feature1` and switch to it.
(These kinds of branches are often called "feature" or "topic" branches.)

    C1  <-  C2  <-  C3  <-  master
                     ^
                 feature1  <-  HEAD

You can make commits on that branch:

    C1  <-  C2  <-  C3  <-  master
                     ^
                    C4  <-  feature1  <-  HEAD

You can switch back to `master` and make more commits there:

    C1  <-  C2  <-  C3  <-  C5  <-  master  <-  HEAD
                     ^
                    C4  <-  feature1

Then do some work on yet another feature:

                            C6  <-  feature2  <-  HEAD
                             v
    C1  <-  C2  <-  C3  <-  C5  <-  master
                     ^
                    C4  <-  feature1

And so on.

## Merging

### Three-Way Merge

In general, when you _merge_ branch B into branch A, Git:

* finds the nearest common ancestor, which is the point at which the branches diverged (this is why it's called a _three-way merge_)
* applies the changes made along branch B since that point to branch A
* if a conflict occurs, it pauses to let you resolve it
* finally performs a commit on branch A (called a _merge commit_) that has pointers to both previous commits (one on each branch)

If we merge `feature1` into `master`:

                            C6  <-  feature2
                             v
    C1  <-  C2  <-  C3  <-  C5  <-  C7  master  <-  HEAD
                     ^               │
      feature1  ->  C4  <────────────┘

### Fast-Forward Merge

If we instead merge `feature2` into `master`, it will result in a _fast-forward merge_, which is a special case that is much simpler to handle than the general case.

Because the branch to be merged in is directly ahead of `master` (there have been no changes on master since `feature2` was created), Git can simply "fast-forward" `master` to point to the same commit as `feature2`:

                                 feature2
                                     v
    C1  <-  C2  <-  C3  <-  C5  <-  C6  <-  master  <-  HEAD
                     ^
                    C4  <-  feature1

This results is a simple linear history, unlike the more general merge commit.
Some people prefer that, which is why they use _rebasing_ instead of merge commits, but we will not be covering that here.
(It's a matter of taste, and rebasing is an advanced topic that we can safely skip for now.)

At this point, you can safely delete the `feature2` branch without losing any work, or continue to make more commits on it and merge it again later.
