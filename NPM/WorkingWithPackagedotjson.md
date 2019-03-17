# Working with package.json

The best way to manage locally installed npm packages is to create a package.json file.

A package.json file:

1. lists the packages that your project depends on.
2. allows you to specify the versions of a package that your project can use using semantic versioning rules.
3. makes your build reproducible, and therefore much easier to share with other developers.

## Requirements
A package.json must have:

1. "name"
- all lowercase
- one word, no spaces
- hyphens and underscores allowed
2. "version"
- in the form of x.x.x
- follows semver spec

For example:

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0"
}
```

## Creating a package.json

There are two ways to create a package.json

1. Run a CLI Questionnaire
```
>npm init
```
This will initiate a command line questionnaire that will conclude with the creation of a package.json in the directory in which you initiated the command.

2. Create a default package.json

To get a default package.json, run npm init with the --yes or -y flag:
```
> npm init --yes
Wrote to /home/ag_dubs/my_package/package.json:

{
  "name": "my_package",
  "description": "",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ashleygwilliams/my_package.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ashleygwilliams/my_package/issues"
  },
  "homepage": "https://github.com/ashleygwilliams/my_package"
}
```

## Specifying Dependencies

To specify the packages your project depends on, you need to list the packages you'd like to use in your package.json file. There are 2 types of packages you can list:

- "dependencies": These packages are required by your application in production.
- "devDependencies": These packages are only needed for development and testing.

The --save-prod and --save-dev install flags
The easier (and more awesome) way to add dependencies to your package.json is to do so from the command line, flagging the npm install command with either --save-prod (assumed by default) or --save-dev, depending on how you'd like to use that dependency.

### To add an entry to your package.json's dependencies:
```
npm install <package_name> --save-prod
```
### To add an entry to your package.json's devDependencies:
```
npm install <package_name> --save-dev
```
