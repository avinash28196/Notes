# NPM
npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.



npm consists of three distinct components:

1. The website.

  Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up Orgs (organizations) to manage access to public or private packages.
  
2. the Command Line Interface (CLI).

  The CLI runs from a terminal. This is how most developers interact with npm.

3. the registry.

  The registry is a large public database of JavaScript software and the meta-information surrounding it.

## When to use NPM.

- Adapt packages of code to your apps, or incorporate packages as they are.
- Download standalone tools you can use right away.
- Manage multiple versions of code and code dependencies.
- Share code with any npm user, any where.
- Update applications easily when underlying code is updated.
- Discover multiple ways to solve the same puzzle.


## Installing Packages 

A package can be downloaded with the command:
```node.js
npm install package_name
```
This will create the node_modules directory in your current directory (if one doesn't exist yet) and will download the package to that directory.

If you want to depend on the package from your own module, using something like Node.js' require, then you want to install locally. This is npm install's default behavior.
If you want to use a package as a command line tool, (such as grunt CLI), then install it globally

## Which Version of the Package is Installed?
If there is no package.json file in the local directory, the latest version of the package is installed.

If there is a package.json file, npm installs the latest version that satisfies the [semver](https://docs.npmjs.com/getting-started/semantic-versioning) rule declared in package.json.

### Example

```
>npm install lodash
>ls node_modules
#=> lodash
```

### using installed packages in the code.

Create a file named index.js, with the following code:

// index.js
var lodash = require('lodash');
 
var output = lodash.without([1, 2, 3], 1);
console.log(output);
Run the code using node index.js. It should output [2, 3].

If you had not properly installed lodash, you would receive this error:

```
module.js:340
    throw err;
          ^
Error: Cannot find module 'lodash'
```



