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
