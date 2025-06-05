# Adding to a project

::: warning
This documentation is for version `6.X.X`, if you want to find the other versions please visit
our [old documentation](https://xdpxi.gitbook.io/xdlib)
:::

## Setting up the Gradle

In your `build.gradle` file you want to add the Modrith Maven to the `repositories` and then you want to add the `xdlib`
to the `dependencies`

```groovy
repositories {
    maven { url "https://api.modrinth.com/maven" }
}

dependencies {
    modImplementation("maven.modrinth:xdlib:${project.xdlib_version}")
}
```

```properties
xdlib_version=VERSION
```

## Added to the requirements

Inside your `fabric.mod.json` you want to add the mod as a dependency in `depends`

```json
"depends": {
    "xdlib": ">=VERSION"
}
```