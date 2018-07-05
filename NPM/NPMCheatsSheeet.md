Node.js - npm Cheat Sheet
===
(Full description and list of commands at - https://npmjs.org/doc/index.html)

## List of less common (however useful) NPM commands

###### Prepand ./bin to your $PATH
Make sure to export your local $PATH and prepand relative ./node_modules/.bin/:

````sh
export PATH="$PATH:./node_modules/.bin"
````

This will allow executing npm binaries installed into the .bin local and isolated current ./node_modules

###### Install a package and also update package.json with the installed version and package name.

```
npm install <module-name> --save
```

###### Install a package and also update package.json with the installed version and package name, but into the devDependencies section.

```
npm install <module-name> --save-dev
```

###### Set --save as a default for ```npm install ```.

```
npm config set save true
```

###### Generate package.json in a module directory, based on npm parmaters.

```
npm init
```


###### List all npm configuration flags.

```
npm config ls -l
```


###### Install a version not from a git repository and not from the npm directory, for example:

```
npm install git://github.com/substack/node-browserify.git
````

###### Update the global npm version.

```
npm update npm -g
```

###### Display the readme.md / documentation / npmjs.orf page of a give library.

```
npm docs <module-name>
```

###### Run package test suite, based on setup in package.json in:
 
``` "scripts" : {"test" : "node testfile.js"} ```
 

```
npm test
```

###### Uninstall package (A nice thing about npm is you can always just ```rm -rf ./node_modules/<module_name>```).

```
npm uninstall <module_name>
```

###### Locally edit a dependency.

```
npm edit <module_name>
```

###### Setup editor for ```npm edit ``` :

```
npm config set editor "sublime"
```

###### Publish a package not under the default "latest" tag:

```
npm publish --tag beta
```

###### Test & Show the full dependency tree

```
npm install --dry-run
```

###### List outdated libraries compared to currently installe node_modules:

```
npm outdated
```

###### Lock down dependency versions:

```
npm shrinkwrap
```



