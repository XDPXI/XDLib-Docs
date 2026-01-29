# Loader Properties

```java
import dev.xdpxi.xdlib.api.v5.Loader;
```

## Mod Loaded

To check if a mod is loaded you can use

```java
Loader.isModLoaded("modID");
```

It will return a boolean `true` if it is initialized or `false` if it isn't.

## Getting the Mod Version

To get the version of a mod you can call

```java
Loader.getModVersion("modID");
```

It will return the string of the version.
