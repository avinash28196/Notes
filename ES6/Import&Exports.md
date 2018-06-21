# Export

The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

Exported modules are in strict mode whether you declare them as such or not.

There are two different types of export, named and default. You can have multiple named exports per module but only one default export. 

- named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

- default export can be imported with any name.

